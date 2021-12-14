import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const StudentTableRow = ( { obj: { name, email, rollno, _id } }) => {
  const deleteStudent = () => {
  axios.delete('http://localhost:4000/students/delete-student/' + _id)
    .then((res) => {
      console.log('Student successfully deleted!')
    }).catch((error) => {
      console.log(error)
    })
  }
  const refresh = () => {
    window.location.reload(false);
  }
  
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{rollno}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + _id}>
          Edit
        </Link>
          <Button onClick= {(e) => {deleteStudent(e); refresh()} } size="sm" variant="danger">Delete</Button>
        </td>
    </tr>
      );
      
}

export default StudentTableRow;
