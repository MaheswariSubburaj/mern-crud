import React from 'react'
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { useSession } from 'react-use-session';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

const Header = () => {
  const { session, saveJWT } = useSession('testt')
  const  JSON_WEB_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJyZWFjdC11c2Utc2Vzc2lvbi1leGFtcGxlIiwiaWF0IjoxNTQxMDgwMjAwLCJleHAiOjE5MTk3Njg0MDAsImF1ZCI6ImxvY2FsaG9zdDozMDAwIiwic3ViIjoiZ2FicmllbGJiMDMwNkBnbWFpbC5jb20iLCJHaXZlbk5hbWUiOiJHYWJyaWVsIiwiU3VybmFtZSI6IkJhc2lsaW8gQnJpdG8iLCJSb2xlIjoiQ3JlYXRvciJ9.GK23QsdEgMzGmxCwX9CjEg5lbSztZ7C67vKc7L09KgI";

  return (
    <header className="App-header">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"} className="nav-link">
              React MERN Stack App
            </Link>
          </Navbar.Brand>
          {session ? (
            <Nav className="justify-content-end">
              <Nav>
                <Link to={"/create-student"} className="nav-link">
                  Create Student
                </Link>
              </Nav>
              <Nav>
                <Link to={"/student-list"} className="nav-link">
                  Student List
                </Link>
              </Nav>
              <Nav>
                <Link to={"/logout"} className="nav-link">
                  Logout
                </Link>
              </Nav>
            </Nav>
          ) : (
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          )}
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
