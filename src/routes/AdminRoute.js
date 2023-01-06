import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import Loading from '../components/LoadingScreen/Loading';
import { AuthContext } from '../contexts/UserContext';
import useAdmin from '../CustomHook/useAdmin';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin(user.email);

    if (loading || isAdminLoading) {
        return <div><Loading></Loading></div>
    }
    if (isAdmin) {
        return children;
    }

    return <Navigate to='/signup'></Navigate>
};

export default AdminRoute;