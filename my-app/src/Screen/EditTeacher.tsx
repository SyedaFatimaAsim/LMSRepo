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
export default function EditTeacherForm(props:Props)
{
   
  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [gender , setGender] = useState("");
  const [qualification , setQualification] = useState("");
  const [experience , setExperience] = useState("");
  const [allocated_to , setAllocation] = useState("");
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
       setAddress(props.fid.address);
       setGender(props.fid.gender);
       setExperience(props.fid.experience);
       setQualification(props.fid.qualification);
       setAllocation(props.fid.allocated_to)
       console.log("fid");

      },[])

      const handleInputChangeName=(event:any)=>{
        setName(event.target.value);
      }
      const handleInputChangeEmail=(event:any)=>{
        setEmail(event.target.value);
      }
      const handleInputChangeAddress=(event:any)=>{
        setAddress(event.target.value);
      }
      const handleInputChangeGender=(event:any)=>{
        setGender(event.target.value);
      }
      const handleInputChangeExperience=(event:any)=>{
        setExperience(event.target.value);
      }
      const handleInputChangeQualification=(event:any)=>{
        setQualification(event.target.value);
      }
      const handleInputChangePhone=(event:any)=>{
        setPhone(event.target.value);
      }
      
      const handleSubmit = () => {
        
        const teacher={
          name: name,
          email: email,
          phone: phone,
          qualification: qualification,
          gender: gender,
          address: address,
          experience:experience,
          allocated_to:allocated_to,
        }
        const teachers={
          teacher:teacher,
        }
        EditData2("teachers", props.fid.id,teachers).then((res)=>{
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
          pattern="[0-9]{4}-[0-9]{3}-[0-9]{4}"
          placeholder="Format: 123-456-7890"
          required
        />
        <InputField
          label="Address"
          type="text"
          id="address"
          name="address"
          value={address}
          onChange={handleInputChangeAddress}
          required
        />
        <InputField
          label="Experience"
          type="text"
          id="experience"
          name="experience"
          value={experience}
          onChange={handleInputChangeExperience}
          required
        />
        <InputField
          label="Qualification"
          type="text"
          id="qualification"
          name="qualification"
          value={qualification}
          onChange={handleInputChangeQualification}
          required
        />
        {/* <InputField
          label=""
          type="text"
          id="qualification"
          name="qualification"
          value={qualification}
          onChange={handleInputChange}
          required
        /> */}
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


function getData(arg0: string) {
    throw new Error("Function not implemented.");
}

