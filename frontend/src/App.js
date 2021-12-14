import React, { useEffect } from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSession } from 'react-use-session';
import Container from "react-bootstrap/Container";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/header/Header";
import Login from './components/Login';
import SignUp from "./components/signup.component";
import ForgotPassword from "./components/forgotPassword";
import ResetPassword from "./components/resetPassword";
import CreateStudent from './components/create-student.component';
import EditStudent from "./components/edit-student.component";
import StudentList from './components/student-list.component';
import Logout from "./components/logout";

export const Layout = () => {
  const { session, } = useSession('testt')
  const navigate = useNavigate();

  useEffect(() => {
    if (session == null) {
            navigate('/') 
    }
  }, [session])

  return (
    <div className="App">
      <Header />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

const NotFound = () => (
  <div>
    <h1> Not Found!</h1>
    <Link to="/">Go Home</Link>
  </div>
);

const Public = () => (
  <div>
        <Link to="/"></Link>
  </div>
);

const App = () => {
  return (
    <div className="App">
       <Routes>
        <Route element={<Layout />}>
        <Route exact path='/' element={<Public />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/Signup' element={<SignUp />} />
          <Route exact path='/resetPassword' element={<ResetPassword />} />
          <Route exact path='/forgotPassword' element={<ForgotPassword />} />
          <Route exact path='/create-student' element={<CreateStudent />} />
          <Route exact path='/student-list' element={<StudentList />} />
          <Route exact path='/edit-student/:id' element={<EditStudent />} />
          <Route exact path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;