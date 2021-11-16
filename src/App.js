import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateStudent from "./components/create-student.component";
import EditStudent from "./components/edit-student.component";
import StudentList from "./components/student-list.component";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>

            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                React MERN Stack App
              </Link>
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>

              <Nav>
                  <Link to={"/edit-student/:id"} className="nav-link">
                    Edit Student
                  </Link>
                </Nav>

              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
            </Nav>

          </Container>
        </Navbar>

      </header>
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/create-student" element={<CreateStudent />} />
      <Route path="/student-list" element={<StudentList />} />
      <Route path="/edit-student" element={<EditStudent />} />
    </Routes>
    </div>
  );
}

export default App;