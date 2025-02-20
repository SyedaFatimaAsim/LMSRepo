import { Box } from "@mui/material";
import SelectField from "../components/SelectField";
import InputField from "../components/Input";
import Dashboard from "../Pages/Dashboard";
import './Students.css';
import { useState } from "react";
import { sendData } from "../config/FirebaseMethods";

export default function Subjects() 
{
    const [subject, setSubject] = useState({
        name: '',
        class: '',
      });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSubject(prevSubject => ({
          ...prevSubject,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(subject);
        let obj = {
          subject: subject,
          createdAt: JSON.stringify(new Date()),
        };

        sendData("subjects",obj).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
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
          value={subject.name}
          onChange={handleInputChange}
          required
        />
          <InputField
          label="Class"
          type="text"
          id="class"
          name="class"
          value={subject.class}
          onChange={handleInputChange}
          required
        />

        {/* <SelectField
          id="subjects"
          name="subjects"
          value={subject.class}
          onChange={handleInputChange}
          options={[
            { value: '1', label: 'ClassI' },
            { value: '2', label: 'ClassII' },
            { value: '3', label: 'ClassIII' }
          ]}
          required
        /> */}
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
</Box>
</Box>
</>
}