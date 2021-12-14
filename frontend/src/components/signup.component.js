import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const eye = <FontAwesomeIcon icon={faEye} />;

const SignUp = () => {

  const d = {
    name: '',
    email: '',
    password: ''
  }

  const navigate = useNavigate();
  const [state, setState] = useState(d);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onChangename = (e) => {
    setState({ ...state, name: e.target.value })
  }

  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value })
  }

  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userObject = {
      name: state.name,
      email: state.email,
      password: state.password
    };
    axios.post('http://localhost:4000/users/Signup', userObject)
      .then(res => console.log(res.data));
    setState({ name: '', email: '', password: '' })
    navigate('/login')
    window.location.reload(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>Name</label>
        <input type="text" className="form-control" placeholder="name" onChange={onChangename} />
      </div>

      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={onChangeEmail} />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Enter password" onChange={onChangePassword} />
        <i onClick={togglePasswordVisiblity}>{eye}</i>
      </div>

      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
      <p className="forgot-password text-right">
        Already registered <Link to="/sign-in">sign in?</Link>
      </p>
    </form>
  );
}

export default SignUp;