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
export default function EditForm(props:Props)
{
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [gender , setGender] = useState("");
  const [dob , setDob] = useState("");
  const [address , setAddress] = useState("");
  const [phone , setPhone] = useState("");
  // const [formId, setFormId] = useState("");
    // const [student, setStudent] = useState({
    //     name: '',
    //     email: '',
    //     phone: '',
    //     dob: '',
    //     gender: '',
    //     address: ''
    //   });

      // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      //   const { name, value } = e.target;
      //   setStudent(prevStudent => ({
      //     ...prevStudent,
      //     [name]: value
      //   }));
      // };

      useEffect(()=>{
       
       setName(props.fid.name);
       setEmail(props.fid.email);
       setPhone(props.fid.phone);
       setDob(props.fid.dob);
       setGender(props.fid.gender)
       console.log("fid");

      },[])
      const handleInputChangeName=(event:any)=>{
        setName(event.target.value);
      }
      const handleInputChangeEmail=(event:any)=>{
        setEmail(event.target.value);
      }
      const handleInputChangeDob=(event:any)=>{
        setDob(event.target.value);
      }
      const handleInputChangeGender=(event:any)=>{
        setGender(event.target.value);
      }
      const handleInputChangeAddress=(event:any)=>{
        setAddress(event.target.value);
      }
      const handleInputChangePhone=(event:any)=>{
        setPhone(event.target.value);
      }
    
      const handleSubmit = () => {
        
        const student={
          name: name,
          email: email,
          phone: phone,
          dob: dob,
          gender: gender,
          address: address
        }
        const students={
          student:student
        }
        EditData2("students", props.fid.id,students).then((res)=>{
          console.log("Data send successfully")
        }).catch((err)=>{
          console.log("Not sent")
        });

        props.func();
      };

    return<>
    <Box sx={{m:2}}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Students
    </Typography>
    {/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography> */}
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
          label="Email"
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChangeEmail}
          required
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={handleInputChangePhone}
          pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 123-456-7890"
          required
        />
        <InputField
          label="Date of Birth"
          type="date"
          id="dob"
          name="dob"
          value={dob}
          onChange={handleInputChangeDob}
          required
        />
       
        <SelectField
          label="Gender"
          id="gender"
          name="gender"
          value={gender}
          onChange={handleInputChangeGender}
          options={[
            { value: 'male', label: 'Male' },
            { value: 'female', label: 'Female' },
            { value: 'other', label: 'Other' }
          ]}
          required
        />
          <button type="submit" onClick={handleSubmit}>Submit</button>
        </Grid>
    </Grid>
    </>
}


