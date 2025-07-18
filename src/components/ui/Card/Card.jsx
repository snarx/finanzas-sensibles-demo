import React from 'react';

const Card = ({
    children,
    className = '',
    variant = 'default',
    onClick,
    ...props
}) => {
    const baseClasses = 'rounded-3xl transition-all duration-200';

    const variants = {
        default: 'bg-white shadow-lg hover:shadow-xl',
        gradient: 'bg-gradient-to-br from-teal-500 to-blue-500 text-white shadow-xl',
        glass: 'bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg',
        outline: 'bg-white border border-gray-200 shadow-sm hover:shadow-md',
    };

    const clickableClasses = onClick ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : '';

    return (
        <div
            className={`${baseClasses} ${variants[variant]} ${clickableClasses} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;