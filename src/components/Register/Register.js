import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
    return (
        <div className='register-form'>
            <div>
                <h3>Please Register Here</h3>
                <form >
                    <input type="email" name="Email" placeholder='Your email' id="email1" /> <br />
                    <input type="password" name="Password" placeholder='Your password' id="password1" /><br />
                    <input type="submit" value="Submit" /> <span>Already Registered? <Link to="/login">Login</Link></span>
                </form>
            </div>
        </div>
    );
};

export default Register;