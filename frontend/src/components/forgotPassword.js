import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

const ForgotPassword = () => {

    const b = {
        email: ""
    }

    const [state, setState] = useState(b);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target
        setState({
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        axios.post('http://localhost:4000/users/forgotPassword', state)
          .then(res => console.log(res.data));
          setState({  email: ''})
          console.log("Forgot Password")
          navigate('/resetPassword')
          window.location. reload(false);
        }
      
       
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
            <label>Email address</label>
            <input type="email" className="form-control" placeholder="Enter email" name="email" value={state.email} onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Submit</button>
        </form>
        </>
    );
}

export default ForgotPassword;
