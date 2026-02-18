import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ className, label, error, id, ...props }, ref) => {
        const inputId = id ?? (props.name ? `lead-${props.name}` : undefined);
        return (
            <div className="w-full">
                {label && (
                    <label
                        htmlFor={inputId}
                        className="block text-sm font-medium text-neutral-700 mb-1"
                    >
                        {label}
                    </label>
                )}
                <input
                    ref={ref}
                    id={inputId}
                    className={cn(
                        'block w-full rounded-md border border-neutral-300 px-4 py-2 text-neutral-900 shadow-sm focus:border-primary focus:ring-primary sm:text-sm',
                        error && 'border-red-500 focus:border-red-500 focus:ring-red-500',
                        className
                    )}
                    aria-invalid={error ? true : undefined}
                    aria-describedby={error ? `${inputId}-error` : undefined}
                    {...props}
                />
                {error && (
                    <p id={inputId ? `${inputId}-error` : undefined} className="mt-1 text-sm text-red-600" role="alert">
                        {error}
                    </p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export { Input };
