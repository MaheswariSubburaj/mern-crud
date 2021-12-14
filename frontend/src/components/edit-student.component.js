import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const EditStudent = () => {

  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:4000/students/edit-student/' + params.id)
      .then(res => {
        setState({
          name: res.data.name,
          email: res.data.email,
          rollno: res.data.rollno
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }, [params.id])



  const s = {
    name: '',
    email: '',
    rollno: ''
  }

  const [state, setState] = useState(s);

  const onChangeStudentName = (e) => {
    setState({ ...state, name: e.target.value })
  }

  const onChangeStudentEmail = (e) => {
    setState({ ...state, email: e.target.value })
  };

  const onChangeStudentRollno = (e) => {
    setState({ ...state, rollno: e.target.value })
  };

  const onSubmit = async (e) => {
    e.preventDefault()
    
    const studentObject = {
      name: state.name,
      email: state.email,
      rollno: state.rollno
    };

    const r = await axios.put('http://localhost:4000/students/update-student/' + params.id, studentObject)
    setState(r.data)
    console.log('Student successfully updated')
    navigate('/student-list')
    window.location.reload(false);
  }

  return (
    <div className="form-wrapper">
      <h3>Edit {state.name}</h3>
      <Form onSubmit={onSubmit }>
        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control name='name' type="text" value={state.name} onChange={onChangeStudentName} />
        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control name='email' type="email" value={state.email} onChange={onChangeStudentEmail} />
        </Form.Group>

        <Form.Group controlId="Name">
          <Form.Label>Roll No</Form.Label>
          <Form.Control name='rollno' type="text" value={state.rollno} onChange={onChangeStudentRollno} />
        </Form.Group>

        <Button variant="primary" size="lg" block="block" type="submit">
          Update Student
        </Button>
      </Form>
    </div >
  );
}

export default EditStudent;
