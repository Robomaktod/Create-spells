import React from 'react';

interface TextInputProps {
 name: string;
 value: string;
 placeholder?: string;
 onChange: (name: string, value: string) => void;
 className?: string;
}

const TextInput: React.FC<TextInputProps> = ({ name, value, onChange, placeholder, className }) => (
  <input
   className={"h-min flex" + " " + className}
   type="text"
   name={name}
   value={value}
   placeholder={placeholder}
   onChange={(e) => onChange(name, e.target.value)}
  />
);

export default TextInput;