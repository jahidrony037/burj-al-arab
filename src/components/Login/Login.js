
import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css";

const Login = () => {
    //const { signInUsingGoogle } = useFirebase()
    return (
        <div className='login-form'>
            <div>
                <h3>Login Here</h3>
                <form>
                    <input type="email" name="Email" id="email1" /><br />
                    <input type="password" name="Password" id="password1" /><br />
                    <input type="submit" value="Submit" />
                </form> <br />
                <button type="button" className="btn btn-primary">Google Sign In</button> <span>New User ? <Link to="/register">Register</Link></span>
            </div>
        </div>
    );
};

export default Login;