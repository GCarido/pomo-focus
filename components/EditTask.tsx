import React, { useState } from 'react'
import { Input } from './ui/input'
import { Button } from './ui/button'

interface EditTaskProps {
    itemValue: string;
    onSave: (updatedTask: string) => void;
};

const EditTask = ({ itemValue, onSave }: EditTaskProps) => {
    const [inputValue, setInputValue] = useState(itemValue);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSave(inputValue);
    }

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-4">
                <Input
                    type="text"
                    className="w-full"
                    value={inputValue}
                    onChange={handleEdit}
                />
                <Button
                    variant="outline"
                    type="submit"
                    className="w-full"
                >
                    Save
                </Button>
            </div>

        </form>
    )
}

export default EditTask