'use client';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, id, className, ...props }) => {
    return (
        <button
            id={id}
            className={`${className} px-4 py-2  font-semibold  `}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;