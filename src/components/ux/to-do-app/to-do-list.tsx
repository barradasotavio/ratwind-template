import { Separator } from '@/components/ui/separator';
import { ToDo } from '@/store';
import { Fragment } from 'react/jsx-runtime';
import ToDoItem from './to-do-item';

interface ToDoListProps {
    todos: ToDo[];
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export default function ToDoList({ todos, onToggle, onDelete }: ToDoListProps) {
    return (
        <ul className='mt-4'>
            {todos.map((todo, index) => (
                <Fragment key={todo.id}>
                    <ToDoItem
                        todo={todo}
                        onToggle={onToggle}
                        onDelete={onDelete}
                    />
                    {index !== todos.length - 1 && (
                        <Separator className='my-2' />
                    )}
                </Fragment>
            ))}
        </ul>
    );
}
