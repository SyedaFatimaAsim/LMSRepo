// StudentTable.tsx

import { Button } from '@mui/material';
import { GridRowsProp } from '@mui/x-data-grid';
import { DataGrid } from '@mui/x-data-grid/DataGrid';
import React, { useState, useEffect } from 'react';
import { getData } from '../config/FirebaseMethods';
import './Students.css';

// type Student = {
//   id: string;
//   name: string;
//   age: string;
//   email:string,
//   gender:string,
//   number:string,
// };

export default function StudentTable() {
  // const [students, setStudents] = useState<Student[]>([]);
  const [students, setStudents] = useState<any>([]);

  useEffect(() => {
    getStudents();
  }, []);

  const getStudents =() => {

   getData("students").then((res)=>{
    const studentData:any = res;
    // console.log(studentData);
    if(studentData)
    {
      let studentsList:any = null;
        // studentsList= Object.values(studentData).map((id) => ({
        //     id,
        //     ...studentsList[id],
        //   }));
        // studentsList= Object.values(studentData);
        // console.log("studentList",studentsList);
        // students.map((student) => (
        //     console.log("student",student)
        // ))
        setStudents(studentData);
        console.log("studentData",studentData)
    }
    }).catch((err)=>{
      console.log(err);
    });
}

const columns = [
  { field: 'name', headerName: 'Name' },
  { field: 'email', headerName: 'Email', width: 300 },
  { field: 'gender', headerName: 'Gender', width: 600 },
  { field: 'phone', headerName: 'Number', width: 600 }
]

const rows: GridRowsProp =[];

  return (
    <div className="table-container">
    <h2>Student List</h2>
     {/* { students.map((value:any, key:any) => {
           rows.concat(value.student);
            })
          }
      <DataGrid columns={columns}
      rows={students}/> */}
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {
            students.map((value:any, key:any) => {
              return (
                <tr key={key}>
                  <td>{value.student.name}</td>
                  <td>{value.student.dob}</td>
                  <td>{value.student.phone}</td>
                  <td>{value.student.email}</td>
                  <td><Button>Edit</Button></td>
                  <td><Button>Delete</Button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
};
