interface Option {
 value: string;
 label: string;
}

interface SelectInputProps {
 name: string;
 value: string;
 onChange: (name: string, value: string) => void;
 options: Option[];
 className?: string;
}

const SelectInput: React.FC<SelectInputProps> = ({ name, value, onChange, options, className}) => {
 return (
   <select
    className={"bg-zinc-700/65 rounded-lg border-black border-2 flex" + " " + className}
    name={name}
    value={value}
    onChange={(e) => onChange(name, e.target.value)}>
    {options.map((option) => (
     <option key={option.value} value={option.value}>
      {option.label}
     </option>
    ))}
   </select>
 )
}

export default SelectInput