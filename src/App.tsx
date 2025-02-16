import ThemeToggle from '@/components/ux/theme-toggle';
import ToDoApp from '@/components/ux/to-do-app';

export function App() {
    return (
        <div className='mx-auto flex h-screen min-h-screen max-w-xl flex-col justify-start gap-8 pt-8'>
            <ThemeToggle />
            <ToDoApp />
        </div>
    );
}
