import { useState } from "react"

import { Button } from "./ui/button"
import { Input } from "./ui/input"

import FormContent from "./FormContent"

import { v4 as uuidv4 } from "uuid"

interface Task {
    id: string;
    taskName: string;
    completed: boolean;
    isEditing: boolean;
}

const FormTasks = () => {
    const [inputValue, setInputValue] = useState("");
    const [taskItem, setTaskItem] = useState<Task[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleTask = (taskName: string): void => {
        setTaskItem([
            ...taskItem,
            {
                id: uuidv4(),
                taskName,
                completed: false,
                isEditing: false
            }
        ]);
    };
    
    const handleButtonClick = () => {
        if (inputValue.trim() !== "") {
            handleTask(inputValue);
            setInputValue("");
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    const handleDelete = (id: string): void => {
        setTaskItem(taskItem.filter(task => task.id !== id));
    };

    const handleComplete = (id: string): void => {
        setTaskItem(taskItem.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleEdit = (id: string): void => {
        setTaskItem(taskItem.map(task => 
            task.id === id ? { ...task, isEditing: !task.isEditing } : task
        ));
    };

    const handleSave = (id: string, updatedTaskName: string): void => {
        setTaskItem(taskItem.map(task =>
            task.id === id ? { ...task, taskName: updatedTaskName, isEditing: false } : task
        ));
    };
    
    return (
        <div className="flex flex-col gap-y-8">
            {/* form input */}
            <form className="pt-6" onSubmit={handleSubmit}>
                {/* input and button */}
                <div className="flex gap-x-4">
                    <Input
                        type="text"
                        placeholder="What's on your plate?"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <Button
                        variant="outline"
                        onClick={handleButtonClick}
                    >
                        Add Task
                    </Button>
                </div>
            </form>
            
            {/* form content */}
            <FormContent 
            tasks={taskItem.sort((a, b) => Number(a.completed) - Number(b.completed))} 
            onDelete={handleDelete} 
            onComplete={handleComplete}
            onEdit={handleEdit}
            onSave={handleSave}
            />

        </div>
    )
}

export default FormTasks