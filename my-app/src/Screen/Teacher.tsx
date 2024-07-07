import { Box } from "@mui/material";
import Dashboard from "../Pages/Dashboard";
import InputField from "../components/Input";
import SelectField from "../components/SelectField";
import { useState } from "react";
import './Students.css';
import { EditData2, sendData } from "../config/FirebaseMethods";

export default function Teachers() 
{
    const [teacher, setTeacher] = useState({
        name: '',
        email: '',
        phone: '',
        qualification: '',
        experience: '',
        gender: '',
        address: '',
        allocated_to:'',
      });

    //   const addData = () => {
    //     let obj = {
    //       teacher: teacher,
    //       createdAt: JSON.stringify(new Date()),
    //     };
    //   }
      
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setTeacher(prevTeacher => ({
          ...prevTeacher,
          [name]: value
        }));
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(teacher); 
        let obj = {
          teacher: teacher,
          createdAt: JSON.stringify(new Date()),
        };

        sendData("teachers",obj).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
      };
return <>
<Box sx={{ display: 'flex' }}>
<Box component="main"sx={{flexGrow:2,p:4}} className="container">
      <h2>Teacher Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={teacher.name}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Email"
          type="email"
          id="email"
          name="email"
          value={teacher.email}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          name="phone"
          value={teacher.phone}
          onChange={handleInputChange}
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 123-456-7890"
          required
        />
        <InputField
          label="Address"
          type="text"
          id="address"
          name="address"
          value={teacher.address}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Experience"
          type="text"
          id="experience"
          name="experience"
          value={teacher.experience}
          onChange={handleInputChange}
          required
        />
        <InputField
          label="Qualification"
          type="text"
          id="qualification"
          name="qualification"
          value={teacher.qualification}
          onChange={handleInputChange}
          required
        />
        <SelectField
          label="Gender"
          id="gender"
          name="gender"
          value={teacher.gender}
          onChange={handleInputChange}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]}
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