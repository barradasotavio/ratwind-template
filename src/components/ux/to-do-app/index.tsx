import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { useToDoStore } from '@/store';
import { List } from 'lucide-react';
import { useState } from 'react';
import ToDoInput from './to-do-input';
import ToDoList from './to-do-list';

export default function ToDoApp() {
    const [newToDo, setNewToDo] = useState<string>('');

    const todos = useToDoStore((state) => state.todos);
    const { addToDo, toggleToDo, removeToDo } = useToDoStore.getState();

    const handleAddToDo = () => {
        if (newToDo.trim() !== '') {
            addToDo(newToDo);
            setNewToDo('');
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className='flex flex-row items-center text-xl leading-none'>
                    <List className='mt-0.5 mr-2 size-fit' />
                    My To-Do List
                </CardTitle>
                <CardDescription>
                    A simple to-do list app to keep track of your tasks.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ToDoInput
                    newToDo={newToDo}
                    setNewToDo={setNewToDo}
                    onAdd={handleAddToDo}
                />
                <ToDoList
                    todos={todos}
                    onToggle={toggleToDo}
                    onDelete={removeToDo}
                />
            </CardContent>
        </Card>
    );
}
