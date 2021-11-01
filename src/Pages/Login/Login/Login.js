import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleLogin = () => {
        signInUsingGoogle()
            .then(
                result => {
                    history.push(redirect_uri);
                }
            )
    }
    return (
        <div className="login">
            <button onClick={handleLogin} className="btn btn-danger mt-5">Login with google</button>
        </div>
    );
};

export default Login;