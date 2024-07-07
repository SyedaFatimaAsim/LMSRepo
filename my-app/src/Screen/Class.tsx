import { Box } from "@mui/material";
import Dashboard from "../Pages/Dashboard";
import InputField from "../components/Input";
import SelectField from "../components/SelectField";
import { useState } from "react";
import './Students.css';
import { EditData2, sendData } from "../config/FirebaseMethods";

export default function Class() 
{
    const [classes, setClasses] = useState({
        class: '',
      });
    

      const addData = () => {
        let obj = {
          class: classes,
          createdAt: JSON.stringify(new Date()),
        };
      }
      
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setClasses(prevStudent => ({
          ...prevStudent,
          [name]: value
        }));
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        // console.log(class); 
        let obj = {
          class: classes,
          createdAt: JSON.stringify(new Date()),
        };

        sendData("classes",obj).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
      };
return <>
<Box sx={{ display: 'flex' }}>
<Dashboard/>
<Box component="main"sx={{flexGrow:1,p:3}} className="container">
      <h2>Class Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="class"
          type="text"
          id="class"
          name="class"
          value={classes.class}
          onChange={handleInputChange}
          required
        />
        <div className="form-control">
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
      </form>
    </Box>
</Box>

</>
}