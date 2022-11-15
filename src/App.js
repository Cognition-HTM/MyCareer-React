import { Routes, Route, Navigate , useLocation , Outlet } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Nav from "./Components/Nav"
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import FAQ from './Pages/Student/FAQ';
import Error from './Pages/Error';
import CounselorHeader from './Components/Counselor/CounselorHeader'
export default function App() {
  const {currentUser} = useContext(AuthContext);
  const location = useLocation();
  console.log({currentUser});
  const RequireStudent = ({children}) => {
    return currentUser?.userType == 'Student' ? (children) : <Navigate to = "/login" state={{from : location}} replace/>
  }
  const RequireCounselor = ({children}) => {
    return currentUser?.userType == 'Counselor' ? (children) : <Navigate to = "/login" state={{from : location}} replace/>
  }
  return (
    <>

    <Routes>
    <Route exact path = "/login" element = {<Login/>} />
    <Route exact path = "/signup" element = {<Signup/>} />
    <Route exact path = "/FAQ" element = {<RequireStudent><Nav/></RequireStudent>} />
    <Route exact path = "/Counselor" element = {<RequireCounselor><CounselorHeader/></RequireCounselor>} />
    <Route path='*' element={<Error/>}/>
    </Routes>
    </>
  )
}