import { Box } from "@mui/material";
import SelectField from "../components/SelectField";
import InputField from "../components/Input";
import Dashboard from "../Pages/Dashboard";
import './Students.css';
import { useEffect, useState } from "react";
import { getData, sendData } from "../config/FirebaseMethods";

export default function SchoolRegistration() 
{
    const [school, setSchool] = useState({
        name: '',
        address: '',
      });

      const [getSchool, setGetSchool] = useState<any>([]);

      useEffect(() => {
        getSchoolData();
      }, []);

      const getSchoolData = ()=> {
        getData("schools").then((res)=>{
            console.log("done")
          const schoolData:any = res;
            setGetSchool(schoolData);
          }).catch((err)=>{
            console.log(err);
          });
      };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSchool(prevSchool => ({
          ...prevSchool,
          [name]: value
        }));
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let obj = {
          school: school,
          createdAt: JSON.stringify(new Date()),
        };
        
        sendData("schools",obj).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
      };
return <>
<Box sx={{ display: 'flex' }}>
<Dashboard/>
<Box sx={{flexGrow:1,p:3}} className="container">
    {getSchool.length>0? 
     (
        <p> Already registered</p>
      ) : 
    (
    <form onSubmit={handleSubmit}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={school.name}
          onChange={handleInputChange}
          required
        />
          <InputField
          label="address"
          type="text"
          id="address"
          name="address"
          value={school.address}
          onChange={handleInputChange}
          required
        />
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </form>
     
    )
    }
 </Box>
</Box>
</>
}

