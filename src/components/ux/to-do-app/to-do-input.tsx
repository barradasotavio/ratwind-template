import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Plus } from 'lucide-react';
import { ChangeEvent } from 'react';

interface ToDoInputProps {
    newToDo: string;
    setNewToDo: (value: string) => void;
    onAdd: () => void;
}

export default function ToDoInput({
    newToDo,
    setNewToDo,
    onAdd,
}: ToDoInputProps) {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewToDo(e.target.value);
    };

    return (
        <div className='flex gap-2'>
            <Input
                value={newToDo}
                onChange={handleChange}
                placeholder='Enter a todo...'
            />
            <Button
                onClick={onAdd}
                className='flex items-center gap-1'>
                <Plus size={16} />
                <span>Add</span>
            </Button>
        </div>
    );
}
