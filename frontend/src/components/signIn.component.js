import { React, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSession } from 'react-use-session';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Signin = () => {
  const d = {
    email: '',
    password: ''
  }
  const eye = <FontAwesomeIcon icon={faEye} />;
  
  const { session, saveJWT } = useSession('testt')
  const navigate = useNavigate();

  const [state, setState] = useState(d);
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value })
  }

  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    
    const r = await axios.post('http://localhost:4000/users/signin', state)
    if (r.data) {
      console.log(r.data.token);
      saveJWT(r.data.token)
    } else {
      console.log('NO USER')
    }
  }

  if (session) {
      navigate('/')
      window.location.reload(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <label>Email address</label>
        <input type="email" className="form-control" placeholder="Enter email" onChange={onChangeEmail} />
      </div>

      <div className="form-group">
        <label>Password</label>
        <input type={passwordShown ? "text" : "password"} className="form-control" placeholder="Enter password" onChange={onChangePassword} />
        <i onClick={togglePasswordVisiblity} >{eye}</i>
      </div>
      <div className="form-group">
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="customCheck1" />
          <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
        </div>
      </div>
      
      <button type="submit" className="btn btn-primary btn-block" >Sign in</button>
      <p className="forgot-password text-right">
        Not registered <Link to="/sign-up">sign up?</Link>
      </p>
      <p className="forgot-password text-right">
        Forgot <Link to="#">password?</Link>
      </p>
    </form>

  );
}

export default Signin;