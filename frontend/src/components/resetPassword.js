import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import axios from 'axios';


const ResetPassword = () => {

  const d = {
    email: "",
    password: "",
    password_confirmation: ""
  }

  const [state, setState] = useState(d);

  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target
    setState({
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const { password, password_confirmation } = state;
    if (password !== password_confirmation) {
      alert("Passwords don't match");
      setState({
        password: "",
        password_confirmation: ""
      })
    } else {
        setState({
        token: "",
        email: "",
        password: "",
        password_confirmation: ""
      })
    }
    axios.post('http://localhost:4000/users/resetPassword', setState)
      .then(res => console.log(res.data));
    setState({ token: "", email: '', password: '' , password_confirmation: ""})
    console.log("Password Created Sucessfully")
    navigate('/login')
    window.location.reload(false);
  }


  return (
    <><p>Reset Password:</p><form onSubmit={handleSubmit}>
        <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter your email" value={state.email} onChange={handleChange} />
      </div>
        
        <div className="form-group">
      <label>New password:</label>
      <input type="password" className="form-control" onChange={handleChange} placeholder="password" value={state.password} />
      </div>

      <div>
      <label>Confirm new password:</label>
      <input className="form-control" onChange={handleChange} type ="password_confirmation" placeholder="password confirmation" type="password" value={state.password_confirmation} />
      </div>

      <button type="submit" className="btn btn-primary btn-block" >Submit</button>
    </form></>
  );
}

export default ResetPassword;