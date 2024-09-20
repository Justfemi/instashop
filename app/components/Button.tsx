import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`p-2.5 bg-primary text-white font-medium rounded-full shadow-sm border border-primary hover:bg-outline ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
