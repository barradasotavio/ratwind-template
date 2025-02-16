import { create } from 'zustand';

export interface ToDo {
    id: number;
    text: string;
    completed: boolean;
}

interface ToDoStore {
    todos: ToDo[];
    addToDo: (text: string) => void;
    toggleToDo: (id: number) => void;
    removeToDo: (id: number) => void;
}

export const useToDoStore = create<ToDoStore>((set) => ({
    todos: [
        { id: 1, text: 'Learn Typescript', completed: false },
        { id: 2, text: 'Learn React', completed: false },
        { id: 3, text: 'Learn Tailwind CSS', completed: false },
        { id: 4, text: 'Learn Zustand', completed: false },
    ],
    addToDo: (text: string) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), text, completed: false }],
        })),
    toggleToDo: (id: number) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo,
            ),
        })),
    removeToDo: (id: number) =>
        set((state) => ({
            todos: state.todos.filter((todo) => todo.id !== id),
        })),
}));
