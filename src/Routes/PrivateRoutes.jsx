import React, { use } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const {user,loading} = use(AuthContext);
    const location = useLocation();
    if(loading){
        return <span className="loading loading-infinity loading-xl"></span>}
    if(!user){
        return<Navigate state={location?.pathname} to="/login"></Navigate>
    }
    return children;
};

export default PrivateRoutes;