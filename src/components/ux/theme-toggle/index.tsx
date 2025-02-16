import { Switch } from '@/components/ui/switch';
import { cn } from '@/lib/utils';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const [isLight, setIsLight] = useState(false);

    useEffect(() => {
        if (isLight) {
            document.body.classList.remove('dark');
        } else {
            document.body.classList.add('dark');
        }
    }, [isLight]);

    return (
        <div className='flex items-center justify-center gap-4'>
            <Moon
                className={cn('text-gray-400', isLight && 'text-gray-400/30')}
            />
            <Switch
                checked={isLight}
                onCheckedChange={setIsLight}
            />
            <Sun
                className={cn(
                    'text-yellow-500',
                    !isLight && 'text-yellow-500/30',
                )}
            />
        </div>
    );
}
