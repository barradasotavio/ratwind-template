import { Button } from '@/components/ui/button';
import { ToDo } from '@/store';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

interface ToDoItemProps {
    todo: ToDo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function ToDoItem({ todo, onToggle, onDelete }: ToDoItemProps) {
    return (
        <li className='flex items-center justify-between'>
            <div
                className='flex cursor-pointer items-center gap-2'
                onClick={() => onToggle(todo.id)}>
                {todo.completed ?
                    <CheckCircle
                        className='cursor-pointer text-green-500'
                        size={20}
                    />
                :   <Circle
                        className='cursor-pointer text-gray-500'
                        size={20}
                    />
                }
                <span
                    className={
                        todo.completed ? 'text-gray-500 line-through' : ''
                    }>
                    {todo.text}
                </span>
            </div>
            <Button
                variant='destructive'
                size='sm'
                onClick={() => onDelete(todo.id)}
                className='flex items-center gap-1'>
                <Trash2 size={16} />
                <span>Delete</span>
            </Button>
        </li>
    );
}
