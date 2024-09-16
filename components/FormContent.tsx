import { motion } from "framer-motion";

import { CheckCircle, Edit, Trash2, ArrowUp, ArrowDown } from "lucide-react";

import EditTask from "./EditTask";

interface Task {
    id: string;
    taskName: string;
    completed: boolean;
    isEditing: boolean;
}

interface FormContentProps {
    tasks: Task[];
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
    onEdit: (id: string) => void;
    onSave: (id: string, updatedTaskName: string) => void;
    onMoveUp: (index: number) => void;
    onMoveDown: (index: number) => void;
}

const FormContent = ({ tasks, onDelete, onComplete, onEdit, onSave, onMoveUp, onMoveDown }: FormContentProps) => {

    const handleDelete = (id: string) => {
        onDelete(id);
    };

    const handleComplete = (id: string) => {
        onComplete(id);
    };

    const handleEdit = (id: string) => {
        onEdit(id);
    };

    const handleSave = (id: string, updatedTask: string) => {
        onSave(id, updatedTask);
    };

    const handleMoveUp = (index: number) => {
        if (index > 0) {
            onMoveUp(index);
        }
    };

    const handleMoveDown = (index: number) => {
        if (index < tasks.length - 1) {
            onMoveDown(index);
        }
    };

    return (
        <div className="flex flex-col gap-y-5">
            {tasks.map((task, index) => (
                // add smooth transition when moving items
                <motion.div 
                    key={task.id} 
                    layout 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                >
                    {task.isEditing ? (
                        <EditTask
                            itemValue={task.taskName}
                            onSave={(updatedTask) => handleSave(task.id, updatedTask)}
                        />
                    ) : (
                        <div className="border-2 rounded-sm border-accent-foreground/70 p-5 flex items-center justify-between">
                            <div className="flex gap-x-5 items-center relative">
                                <div className="absolute -left-4 flex flex-col gap-y-4">
                                    <ArrowUp
                                        size={15}
                                        className="cursor-pointer hover:dark:text-blue-500 hover:text-blue-400 touch-none"
                                        onClick={() => handleMoveUp(index)}
                                    />
                                    <ArrowDown
                                        size={15}
                                        className="cursor-pointer hover:dark:text-blue-500 hover:text-blue-400 touch-none"
                                        onClick={() => handleMoveDown(index)}
                                    />
                                </div>
                                <CheckCircle
                                    size={30}
                                    className={`${task.completed ? "text-primary dark:text-primary" : ""}`}
                                    onClick={() => handleComplete(task.id)}
                                />
                                <p className={`hover:dark:text-blue-300 hover:text-blue-400 break-words w-[120px] md:w-[320px] ${task.completed ? "line-through text-primary dark:text-primary" : ""}`}>{task.taskName}</p>
                            </div>
                            <div className="flex gap-x-2">
                                <Edit
                                    size={30}
                                    className="hover:dark:text-blue-500 hover:text-blue-400"
                                    onClick={() => handleEdit(task.id)}
                                />
                                <Trash2
                                    size={30}
                                    className="hover:dark:text-blue-500 hover:text-blue-400"
                                    onClick={() => handleDelete(task.id)}
                                />
                            </div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
};

export default FormContent;
