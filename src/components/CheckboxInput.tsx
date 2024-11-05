import React from 'react';

interface CheckboxInputProps {
  name: string;
  checked: boolean;
  onChange: (name: string, checked: boolean) => void;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ name, checked, onChange }) => (
  <div className="form-group checkbox-group">
    <input
      type="checkbox"
      name={name}
      checked={checked}
      onChange={(e) => onChange(name, e.target.checked)}
    />
  </div>
);

export default CheckboxInput;
