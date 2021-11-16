import React, { useState } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
// import axios from 'axios';


const EditStudent = ({ history, params }) => {

  const s = {
    name: '',
    email: '',
    rollno: ''
  }

  const [state, setState] = useState(s);

  const onChangeStudentName = (e) => {
    setState({ name: e.target.value })
  }

  const onChangeStudentEmail = (e) => {
    setState({ name: e.target.value })
  };

  const onChangeStudentRollno = (e) => {
    setState({ name: e.target.value })
  };

  // useEffect(() => {
  //   const r = axios.put('http://localhost:4000/students/update-student/' + params.id, studentObject)
  //   setState(r.data)
  //   console.log('Student successfully updated')
  // }).catch((error) => {
  //   console.log(error)
  // }, [])

  const onSubmit = (e) => {
    e.preventDefault()

    const s = {
      name: '',
      email: '',
      rollno: ''
    }

    setState(s)

    // Redirect to Student List 
    history.push('/student-list')
  }

  return (
    <div className="form-wrapper">
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" value={state.name} onChange={onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" value="email" onChange={onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control type="text" value="rollno" onChange={onChangeStudentRollno} />
        </Form.Group>

        <Button variant="danger" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div>
  );
}

export default EditStudent;
