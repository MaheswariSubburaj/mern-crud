import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import { useNavigate } from "react-router";

const CreateStudent = () => {
  const d = {
    name: '',
    email: '',
    rollno: ''
  }
  const navigate = useNavigate();
  
  const [state, setState] = useState(d);

  const onChangeStudentName = (e) => {
    setState({ ...state, name: e.target.value })
  }

  const onChangeStudentEmail = (e) => {
    setState({ ...state, email: e.target.value })
  }

  const onChangeStudentRollno = (e) => {
    setState({ ...state, rollno: e.target.value })
  }

  console.log(state)

  const onSubmit = (e) => {
    e.preventDefault()
    
    const studentObject = {
      name: state.name,
      email: state.email,
      rollno: state.rollno
    };
    axios.post('http://localhost:4000/students/create-student', studentObject)
      .then(res => console.log(res.data));
    setState({ name: '', email: '', rollno: '' })
    console.log("Created Sucessfully")
    navigate('/')
    window.location.reload(false);
  }


    return (
    <div className="form-wrapper">
      <h3>Create Student</h3>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={state.name} onChange={onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value={state.email} onChange={onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value={state.rollno} onChange={onChangeStudentRollno} />
        </Form.Group>

        <Button variant="primary" size="lg" block="block" type="submit">
          Create Student
        </Button>
      </Form>
    </div>
  )
};

export default CreateStudent;
