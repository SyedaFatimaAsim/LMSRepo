import { Box } from "@mui/material";
import SelectField from "../components/SelectField";
import InputField from "../components/Input";
import Dashboard from "../Pages/Dashboard";
import './Students.css';
import { useState } from "react";
import { sendData } from "../config/FirebaseMethods";

export default function Syallbus() 
{
    const [syallbus, setSyallbus] = useState({
        subject: '',
        class: '',
        description:''
      });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSyallbus(prevSyallbus => ({
          ...prevSyallbus,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let obj = {
          syallbus: syallbus,
          createdAt: JSON.stringify(new Date()),
        };

        sendData("syallbus",obj).then((res)=>{
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
          label="Subject"
          type="text"
          id="subject"
          name="subject"
          value={syallbus.subject}
          onChange={handleInputChange}
          required
        />
          <InputField
          label="Class"
          type="text"
          id="class"
          name="class"
          value={syallbus.class}
          onChange={handleInputChange}
          required
        />
          <InputField
          label="Description"
          type="text"
          id="description"
          name="description"
          value={syallbus.description}
          onChange={handleInputChange}
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