import { Alert, Box } from "@mui/material";
import Dashboard from "../Pages/Dashboard";
import InputField from "../components/Input";
import SelectField from "../components/SelectField";
import { useState } from "react";
import './Students.css';
import { EditData2, getData, sendData } from "../config/FirebaseMethods";
import Dropdown from "../components/FireBaseDropdown";

export default function Students() 
{
  const [bDataNotFound, setDataNotFound] = useState(false);
  let studentData:any = null;

    const [student, setStudent] = useState
    ({
        name:'',
        class:'',
      });

      const getStudents = ()=> {
        getData("students").then((res)=>{
          studentData = res;
          console.log("studentData",studentData)
          
          }).catch((err)=>{
            console.log(err);
          });
      };
      
    function checkStudentDataFound()
    {
       getStudents();
       
       if(studentData==null)
        return;

      let bStudentNotFound:boolean = false;
      bStudentNotFound =  studentData.some((x:any,i:any)=>
      {
          if(x.student.name != student.name)
            return x;
      },
      setDataNotFound(bStudentNotFound));
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setStudent(prevStudent => ({
          ...prevStudent,
          [name]: value
        }));
      };
    
      const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(student); 
        let obj = {
          TransferedStudent: student,
          createdAt: JSON.stringify(new Date()),
        };
 
        checkStudentDataFound();
        
        if(!bDataNotFound)
        {
        sendData("TransferedStudent",obj).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
      }
      };
return <>
<Box sx={{ display: 'flex' }}>
<Box component="main"sx={{flexGrow:1,p:3}} className="container">
      <h2>Transfered Form</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          label="Student"
          type="text"
          id="student"
          name="student"
          value={student.name}
          onChange={handleInputChange}
          required
        />
      
      <InputField
          label="class"
          type="text"
          id="class"
          name="class"
          value={student.class}
          onChange={handleInputChange}
          required
        />
        <div className="form-control">
          <button type="submit" onClick={handleSubmit}>Submit</button>
          {bDataNotFound && 
           <Alert severity="success">
           No data found
         </Alert>
          }  
        </div>
      </form>
    </Box>
</Box>

</>
}