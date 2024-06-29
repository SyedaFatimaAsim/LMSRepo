import { getDatabase, onValue, push, ref, remove, set } from "firebase/database";
import app from "./firebaseconfig";

const db = getDatabase(app);

export const sendData = (nodeName: string, data: any) => {

  return new Promise((resolve,reject)=>{
    data.id = push(ref(db, `${nodeName}`)).key;
    const reference = ref(db, `${nodeName}/${data.id}`);
    //console.log(data.id);
    set(reference, data).then(()=>{
        resolve(data);
    }).catch((err)=>{
      reject(err)
    })
     
  })
 
};

export const getData = (nodeName: string, id?: any) => {
  return new Promise((resolve , reject)=>{
    const reference = ref(db, `${nodeName}/${id ? id : ""}`);
    onValue(reference, (dt) => {
      if(dt.exists())
      {
        if(id)
        {
          console.log(id);
          resolve(dt.val());
        }
        else{
          console.log("else")
        //   let arr = Object.values(dt)
         resolve(Object.values(dt.val()));
        }
      } else{
        reject({message: "Data not found"})
      }
    });
  })
};

export const EditData2 = (nodeName: string, id:any, data: any) => {
  return new Promise((resolve,reject)=>{
    // data.id = push(ref(db, `${nodeName}`)).key;
    
    // const reference = ref(db, `${nodeName}/${id}`);
    const reference = ref(db, `${nodeName}/${id}`);
    //console.log(data.id);
    set(reference, data).then(()=>{
        resolve({message:"Edited successfully"});
    }).catch((err)=>{
      reject(err)
    })
     
  })
 
};

export const DeleteData = (nodeName: string, id:any) => {
  return new Promise((resolve,reject)=>{
    // data.id = push(ref(db, `${nodeName}`)).key;
    const reference = ref(db, `${nodeName}/${id}`);
    //console.log(data.id);
    remove(reference).then(()=>{
        resolve({message:"Data deleted successfully"});
    }).catch((err)=>{
      reject(err)
    })  
  }) 
};
