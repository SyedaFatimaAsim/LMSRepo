import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "../Screen/Student";
import Subjects from "../Screen/Subjects";
import Dashboard from "../Pages/Dashboard";
import StudentList from "../Screen/StudentGrid";
import LoginScreen from "../Pages/LoginScreen";

export default function AppRoute(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<LoginScreen/>} />
        <Route path="dashboard/*" element={<Dashboard/>} />
        {/* <Route path="/students" element={<Students />} /> */}
        {/* <Route path="/students" element={<StudentList />} />

        <Route path="/subjects" element={<Subjects />} /> */}
    </Routes>
    </BrowserRouter>
    </>
}