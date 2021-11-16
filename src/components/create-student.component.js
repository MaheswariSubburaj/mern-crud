import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';

const CreateStudent = () => {

  const d = {
    name: '',
    email: '',
    rollno: ''
  }

  const [state, setState] = useState(d);

  const onChangeStudentName = (e) => {
    setState({ name: e.target.value })
  }

  const onChangeStudentEmail = (e) => {
    setState({ email: e.target.value })
  }

  const onChangeStudentRollno = (e) => {
    setState({ rollno: e.target.value })
  }

  console.log(state)

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(`Student successfully created!`);
  }

  return <div className="form-wrapper">
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

      <Button variant="danger" size="lg" block="block" type="submit">
        Create Student
      </Button>
    </Form>
  </div>
};

export default CreateStudent;
