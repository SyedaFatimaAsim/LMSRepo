import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import SelectField from "../components/SelectField";
import InputField from "../components/Input";
import { EditData2 } from "../config/FirebaseMethods";
import './Students.css';
import { AnySrvRecord } from "dns";
import { FormatIndentDecrease } from "@mui/icons-material";
import { formatDiagnostic } from "typescript";

type Props= {
    fid: any;
    func: () => void;
   
  }
export default function EditSubjectForm(props:Props)
{
   
  const [name , setName] = useState("");
  const [Class , setClass] = useState("");
  
      useEffect(()=>{ 
       setName(props.fid.name);
       setClass(props.fid.Class);
      },[])

      const handleInputChangeName=(event:any)=>{
        setName(event.target.value);
      }
      const handleInputChangeClass=(event:any)=>{
        setClass(event.target.value);
      }
     
      const handleSubmit = () => {
        
        const subject={
          name: name,
          class: Class
        }
        const subjects={
          subject:subject,
        }
        EditData2("subjects", props.fid.id,subjects).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });
        props.func();
      };

    return<>
    <Box sx={{m:2}}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Teachers
    </Typography>
    </Box>
    <Grid container spacing={2}>
        <Grid item xs={12}>
        <InputField
          label="Name"
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChangeName}
          required
        />
          <InputField
          label="Class"
          type="text"
          id="class"
          name="class"
          value={Class}
          onChange={handleInputChangeClass}
          required
        />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </Grid>
    </Grid>
    </>
}