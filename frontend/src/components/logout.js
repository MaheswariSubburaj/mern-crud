import { React } from 'react';
import { useNavigate } from "react-router-dom";
import { useSession } from 'react-use-session';

const Logout = () => {

  const navigate = useNavigate();
  const { session, } = useSession('testt')
    
    if (session !== null) {
        localStorage.clear();
        navigate('/login');
        window.location.reload(false);
    };

    return <></>
};

export default Logout;
