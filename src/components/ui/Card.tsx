import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={cn("bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow", className)}>
            {children}
        </div>
    );
}

export function CardHeader({ children, className }: CardProps) {
    return <div className={cn("p-6 pb-3", className)}>{children}</div>;
}

export function CardContent({ children, className }: CardProps) {
    return <div className={cn("p-6 pt-0", className)}>{children}</div>;
}

export function CardFooter({ children, className }: CardProps) {
    return <div className={cn("p-6 pt-0 flex items-center", className)}>{children}</div>;
}
