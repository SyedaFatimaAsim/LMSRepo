import React, { useState, useEffect } from 'react';
import { getData } from '../config/FirebaseMethods';

type DropdownProps ={
  onSelect: (value: string) => void;
  collectionName : string;
}

type FirebaseData = {
  key: string;
  value: {
    class: string;
  createdAt: string;
  id: string;
  }
}

const Dropdown = ({ onSelect , collectionName}:DropdownProps) => {
  const [opt, setOptions] = useState<any>([]);

  useEffect(() => {
    // Fetch data from Firebase Firestore

    
   getDatabaseData();

  }, []);


  const getDatabaseData = ()=> {
    getData(`${collectionName}`).then((res)=>{
      const data:any = res;
      const fetchedOptions= data.map((key:any,value:any) => ({
        key
      }));
      // {data.map((dt:any) => 
      // {
        // const optionsArray = (Object.keys(data)).map((key: any) => 
        // ({ 
        //   class:data[key],
        // }) 
        // ))
        // const optionsArray = (Object.keys(data)).map((key:any)=>
        // ({
        //   class:data[key]
        // })
        // console.log("key",optionsArray);
        console.log("fe",fetchedOptions);
        
        setOptions(fetchedOptions);
        // console.log("object.values",optionsArray)
        // setOptions(optionsArray);
      // }
      // )}
      }).catch((err)=>{
        console.log(err);
      });
  };
  // const uniqueClasses = Array.from(new Set(options.map(item => item.value.class)));
  const handleChange = (event: any) => {
    console.log(event.target.value);
    onSelect(event.target.value);
  };

  return (
    // <select onChange={handleChange}>
    //   {options.map((option:any, index:any) => (
    //     <option key={index} value={option.class}>
    //        {option.class}
    //     </option>
    //   ))}
    // </select>
    <div>
    {opt.map((option:any, index:any) => (
         <p>
             {option.Class}
             </p>
      ))}
      </div>
  );
};

export default Dropdown;
