import { Box } from "@mui/material";
import SelectField from "../components/SelectField";
import InputField from "../components/Input";
import Dashboard from "../Pages/Dashboard";
import './Students.css';
import { useState } from "react";

export default function Subjects() 
{
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: ''
      });

      
      
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({
          ...prevStudent,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(student); // Replace with your form submission logic
       
      };
return <>
<Box sx={{ display: 'flex' }}>
<Dashboard/>
<Box sx={{flexGrow:1,p:3}} className="container">
<form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={student.name}
          onChange={handleInputChange}
          required
        />
        <SelectField
          id="subjects"
          name="subjects"
          value={student.gender}
          onChange={handleInputChange}
          options={[
            { value: 'ClassI', label: 'ClassI' },
            { value: 'ClassII', label: 'ClassII' },
            { value: 'ClassIII', label: 'ClassIII' }
          ]}
          required
        />
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
</Box>
</Box>
</>
}