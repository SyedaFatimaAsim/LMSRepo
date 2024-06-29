import { Box } from "@mui/material";
import Dashboard from "../Pages/Dashboard";
import InputField from "../components/Input";
import SelectField from "../components/SelectField";
import { useState } from "react";
import './Students.css';
import { sendData } from "../config/FirebaseMethods";

export default function Students() 
{
    const [student, setStudent] = useState({
        name: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        address: ''
      });

      const addData = () => {
        let obj = {
          student: student,
          createdAt: JSON.stringify(new Date()),
        };
      }
      
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({
          ...prevStudent,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(student); 
        let obj = {
          student: student,
          createdAt: JSON.stringify(new Date()),
        };

        sendData("students", obj).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
      };
return <>
<Box sx={{ display: 'flex' }}>
<Dashboard/>
<Box component="main"sx={{flexGrow:1,p:3}} className="container">
      <h2>Student Form</h2>
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
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={student.email}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          name="phone"
          value={student.phone}
          onChange={handleInputChange}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 123-456-7890"
          required
        />
        <InputField
          label="Date of Birth"
          type="date"
          id="dob"
          name="dob"
          value={student.dob}
          onChange={handleInputChange}
          required
        />
        <SelectField
          label="Gender"
          id="gender"
          name="gender"
          value={student.gender}
          onChange={handleInputChange}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
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