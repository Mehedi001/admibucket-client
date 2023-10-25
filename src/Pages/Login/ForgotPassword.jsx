/* eslint-disable no-unused-vars */

import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import app from "../../firebase/firebase.config";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import { Helmet } from "react-helmet-async";


const ForgotPassword = () => {


    const auth = getAuth(app);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || "/";

    const handleReset = event => {
        event.preventDefault();
        const email = event.target.email.value;
        sendPasswordResetEmail(auth, email)
            .then(result => {
                setError('');
                let timerInterval
                Swal.fire({
                    title: 'Check Your Email',
                    html: 'Forgotten Password Mail Successfully send to Your Email Inbox',
                    timer: 4000,
                    timerProgressBar: true,

                    willClose: () => {
                        clearInterval(timerInterval)
                    }
                }).then((result) => {
                    /* Read more about handling dismissals below */
                    
                })
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error)
            })
    }

    return (
        <div>
            <div className="my-28 lg:my-0 lg:h-screen flex justify-center items-center ">
                <Helmet>
                    <title> Forgot Password | Admibucket</title>
                </Helmet>
                <form onSubmit={handleReset} className="bg-gray-200 text-gray-600 rounded-md p-8 lg:p-36">
                    <h1 className="text-2xl text-center underline pb-12">Forgotten Password</h1>
                    <div className="flex flex-col mt-4 px-3">
                        <label htmlFor="subject">Enter Your Email</label>
                        <input className="block appearance-none w-full bg-gray-100 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" required="" placeholder="Your email" name="email" id="subject" type="text" />
                        <button type="submit" className="mt-2 btn text-white font-thin hover:bg-[#0b3e44] bg-[#187E89]">Forgot Password</button>

                        <p className="text-red-600">{error.message}</p>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;