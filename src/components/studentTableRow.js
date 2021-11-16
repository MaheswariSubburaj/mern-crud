import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

const StudentTableRow = (obj, key) => {
  const deleteStudent = () => {
    axios.delete('http://localhost:4000/students/delete-student/' + obj.id)
      .then((res) => {
        console.log('Student successfully deleted!')
      }).catch((error) => {
        console.log(error)
      })
  }

  return (
    <tr>
      <td>{obj.name}</td>
      <td>{obj.email}</td>
      <td>{obj.rollno}</td>
      <td>
        <Link className="edit-link" to={"/edit-student/" + obj.id}>
          Edit
        </Link>
        <Button onClick={deleteStudent} size="sm" variant="danger">Delete</Button>
      </td>
    </tr>
  );
}

export default StudentTableRow;