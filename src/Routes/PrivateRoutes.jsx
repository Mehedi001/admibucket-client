/* eslint-disable react/prop-types */
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import {  ImSpinner4 } from "react-icons/im";
import { AuthContext } from '../components/AuthProvider/AuthProvider';



const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (<div className="h-screen "><ImSpinner4 className='text-9xl h-screen text-[#187E89] mx-auto animate-spin '/></div>)
    }
    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{from:location}}></Navigate>
};

export default PrivateRoute;