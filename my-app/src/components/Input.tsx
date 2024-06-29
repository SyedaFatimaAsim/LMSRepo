import { AnyARecord } from "dns";

export default function Input(props:any){
interface Props {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
}
const {label,type,id,name,value,onChange,placeholder,required,pattern}= props;

  return (
    <div className="form-control">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
    </div>
  );

}