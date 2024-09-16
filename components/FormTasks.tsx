import { useState, useEffect } from "react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

import FormContent from "./FormContent";

import { v4 as uuidv4 } from "uuid";

interface Task {
    id: string;
    taskName: string;
    completed: boolean;
    isEditing: boolean;
}

const FormTasks = () => {
    const [inputValue, setInputValue] = useState("");
    const [taskItem, setTaskItem] = useState<Task[]>([]);

    // Load tasks from local storage when the component mounts
    useEffect(() => {
        const storedTasks = localStorage.getItem("tasks");
        if (storedTasks) {
            setTaskItem(JSON.parse(storedTasks));
        }
    }, []);

    // Save tasks to local storage whenever taskItem changes
    useEffect(() => {
        if (taskItem.length > 0) {
            localStorage.setItem("tasks", JSON.stringify(taskItem));
        }
    }, [taskItem]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    };

    const handleTask = (taskName: string): void => {
        setTaskItem([
            {
                id: uuidv4(),
                taskName,
                completed: false,
                isEditing: false
            },
            ...taskItem,
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

    const handleMoveUp = (index: number): void => {
        if (index > 0) {
            const newTaskItem = [...taskItem];
            const temp = newTaskItem[index - 1];
            newTaskItem[index - 1] = newTaskItem[index];
            newTaskItem[index] = temp;
            setTaskItem(newTaskItem);
        }
    };

    const handleMoveDown = (index: number): void => {
        if (index < taskItem.length - 1) {
            const newTaskItem = [...taskItem];
            const temp = newTaskItem[index + 1];
            newTaskItem[index + 1] = newTaskItem[index];
            newTaskItem[index] = temp;
            setTaskItem(newTaskItem);
        }
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
                onMoveUp={handleMoveUp}
                onMoveDown={handleMoveDown}
            />
        </div>
    );
};

export default FormTasks;