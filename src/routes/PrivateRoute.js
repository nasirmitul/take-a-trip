import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../components/LoadingScreen/Loading';
import { AuthContext } from '../contexts/UserContext';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    if(loading){
        return <div><Loading></Loading></div>
    }

    if(user && user.uid){
        return children;
    }
    return <Navigate to='signup'></Navigate>
};

export default PrivateRoute;