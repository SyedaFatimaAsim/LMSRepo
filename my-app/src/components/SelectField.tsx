import React from 'react';

export default function SelectField(props:any)
{
interface Option {
  value: string;
  label: string;
}

interface Props {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  required?: boolean;
}

const {label,id,name,value,onChange,options,required} = props;
  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      >
        <option value="">Select {label}</option>
        {options.map((option: { value: string; label: string }) => (
  <option key={option.value} value={option.value}>{option.label}</option>
))}
      </select>
    </div>
  );
}
