/* eslint-disable react/no-unescaped-entities */
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { updateProfile } from 'firebase/auth';

import Swal from 'sweetalert2';
import { AuthContext } from "../../../components/AuthProvider/AuthProvider";




const Registration = () => {


    const { register, auth } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        const newUser = { name, email, photo, password };
        register(email, password)
            .then(result => {
                const user = result.user;
                setError('')
                setSuccess(`${user.email} Successfully Registered`)
                updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
                    .then(() => {
                        fetch('https://admibucket-server.vercel.app/users', {
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
                                        text: 'Registration Successfully',
                                        icon: 'success',
                                        confirmButtonText: 'Thank you'
                                    })
                                    form.reset('');
                                }
                            })


                    })
                    .catch((error) => {
                        setError(error?.message)
                    })
            })
            .catch(error => {
                setError(error?.message)
            })
    }

    return (
        <div className="form-container mx-auto my-14">
            <Helmet>
                <title> Registration | Admibucket</title>
            </Helmet>
            <div className="logo-container">
                Please Register
            </div>

            <form onSubmit={handleRegister} className="form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input required="" placeholder="Enter your name" name="name" id="name" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input required="" placeholder="Enter your email" name="email" id="email" type="text" />
                </div>
                <div className="form-group">
                    <label htmlFor="photo">Photo URL</label>
                    <input placeholder="Enter your Photo link" name="photo" id="photo" type="text" />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input required="" name="password" placeholder="Enter your password" id="password" type="password" />
                </div>

                <button type="submit" className="form-submit-btn">Register</button>
            </form>

            <p className="text-red-600 note">{error}</p>
            <p className="text-green-600 note">{success}</p>

            <p className="signup-link">
                Already have an account?
                <Link to="/login" className="signup-link link" href="#"> Login</Link>
            </p>
        </div>
    );
};

export default Registration;