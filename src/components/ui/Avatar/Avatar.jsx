import React from 'react';

const Avatar = ({
    name,
    src,
    size = 'md',
    className = '',
    color = 'bg-teal-500',
    ...props
}) => {
    const sizes = {
        xs: 'w-6 h-6 text-xs',
        sm: 'w-8 h-8 text-sm',
        md: 'w-10 h-10 text-base',
        lg: 'w-12 h-12 text-lg',
        xl: 'w-16 h-16 text-xl',
        xxl: 'w-20 h-20 text-2xl',
    };

    const getInitials = (name) => {
        if (!name) return '';
        return name
            .split(' ')
            .map(word => word.charAt(0))
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const baseClasses = `${sizes[size]} rounded-full flex items-center justify-center font-semibold text-white`;

    if (src) {
        return (
            <img
                src={src}
                alt={name || 'Avatar'}
                className={`${baseClasses} object-cover ${className}`}
                {...props}
            />
        );
    }

    return (
        <div
            className={`${baseClasses} ${color} ${className}`}
            {...props}
        >
            {getInitials(name)}
        </div>
    );
};

export default Avatar;