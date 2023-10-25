/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import {  useContext, useState } from 'react';
import { FacebookAuthProvider, GoogleAuthProvider, getAuth,  signInWithPopup } from 'firebase/auth';
import { AiOutlineGoogle } from 'react-icons/ai'
import { Helmet } from "react-helmet-async";
import { AuthContext } from '../../components/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import app from '../../firebase/firebase.config';



const Login = () => {


    const auth = getAuth(app);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { login } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                if (!loggedInUser) {
                    setError('Please Check Your email & password')
                }

                const newUser = { name: loggedInUser.displayName,  email: loggedInUser.email, photo: loggedInUser.photoURL };


                fetch('https://admibucket-server.vercel.app//users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Login Successfully',
                                icon: 'success',
                                confirmButtonText: 'Thank you'
                            })
                            form.reset('');
                        }
                    })

                setSuccess('User Login Successfull');
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error)
            })


    }

    const handleFacebookSignIn = () => {

        signInWithPopup(auth, facebookProvider)
            .then(result => {
                const loggedInUser = result.user;
                if (!loggedInUser) {
                    setError('Please Login to your Facebook')
                }

                const newUser = { name: loggedInUser.displayName, email: loggedInUser.email, photo: loggedInUser.photoURL };


                fetch('https://admibucket-server.vercel.app//users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(newUser)
                })

                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            Swal.fire({
                                title: 'Success!',
                                text: 'Login Successfully',
                                icon: 'success',
                                confirmButtonText: 'Thank you'
                            })
                            form.reset('');
                        }
                    })

                setSuccess('User Login Successfull');
                setError('');
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error)
            })

    }


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(result => {
                const loggedUser = result.user;
                if (!loggedUser) {
                    setError('Please Check Your email & password')
                }
                setSuccess('User Login Successfull');
                form.reset();
                setError('');
                navigate(from, { replace: true });
            })

            .catch(error => {
                setError(error.message)
            })
    }

    return (
        <div className="form-container mx-auto my-14">
            <Helmet>
                <title> Login | Admibucket</title>
            </Helmet>
            <div className="logo-container">
                Please Login
            </div>

            <div className="social-buttons">
                
                <button onClick={handleGoogleSignIn} className="social-button hover:bg-red-600 bg-red-500 google" >
                    
                    <AiOutlineGoogle className='text-xs'/>
                    <span>Sign in with Google</span>
                </button>
                <button onClick={handleFacebookSignIn} className="social-button bg-blue-500 hover:bg-blue-600">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                    </svg>
                    <span>Sign in with Facebook</span>

                </button>
            </div>
            <div className="line"></div>
            <form onSubmit={handleLogin} className="form">
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required="" placeholder="Enter your email" name="email" id="email" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input required="" name="password" placeholder="Enter your password" id="password" type="password" />
                </div>

                <button type="submit" className="form-submit-btn">Login</button>
            </form>


            <Link to="/reset" className="forgot-password-link link" href="#">Forgot Password</Link>

            <p className="text-red-600 note">{error}</p>
            <p className="text-green-600 note">{success}</p>

            <p className="signup-link">
                Don't have an account?
                <Link to="/registration" className="signup-link link" href="#"> Register</Link>
            </p>
        </div>
    );
};

export default Login;