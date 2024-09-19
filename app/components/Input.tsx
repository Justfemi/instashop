import React from 'react';

interface InputProps {
  type?: 'text' | 'email' | 'password' | 'number';
  id?: string;
  name?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  required?: boolean;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  id,
  name,
  value,
  onChange,
  placeholder,
  className = '',
  required = false,
}) => {
  return (
    <input
      type={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`px-2 py-2.5 border-[0.5px] border-gray-300 rounded-[12px] shadow-sm focus:outline-none focus:ring-0.5 focus:ring-primary focus:border-primary disabled:bg-gray-100 ${className}`}
      required={required}
    />
  );
};

export default Input;
