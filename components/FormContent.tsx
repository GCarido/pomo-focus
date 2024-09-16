import { CheckCircle, Edit, Trash2 } from "lucide-react"
import { useState } from "react";

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
};

const FormContent = ({ tasks, onDelete, onComplete }: FormContentProps) => {

    const handleDelete = (id: string) => {
        onDelete(id);
    };

    const handleComplete = (id: string) => {
        onComplete(id);
    };

    return (
        <div className="cursor-pointer flex flex-col gap-y-5">
            {tasks.map(task => (
                <div key={task.id}>
                    <div className="border-2 rounded-sm border-accent-foreground/70 p-5 flex items-center justify-between">
                        {/* check and text */}
                        <div className="flex gap-x-5 items-center">
                            <CheckCircle
                                size={30}
                                className={`hover:dark:text-blue-500 hover:text-blue-400 ${task.completed ? "text-primary dark:text-primary" : ""}`}
                                onClick={() => handleComplete(task.id)}
                            />
                            <p className={`h5 hover:dark:text-blue-300 hover:text-blue-400 ${task.completed ? "line-through text-primary dark:text-primary" : ""}`}>{task.taskName}</p>
                        </div>
                        <div className="flex gap-x-2">
                            {/* edit and delete */}
                            <Edit
                                size={30}
                                className="hover:dark:text-blue-500 hover:text-blue-400"
                            />
                            <Trash2
                                size={30}
                                className="hover:dark:text-blue-500 hover:text-blue-400"
                                onClick={() => handleDelete(task.id)}
                            />
                        </div>
                    </div>
                </div>
            ))}


        </div>
    )
}

export default FormContent