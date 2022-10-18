import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';

const Profile = () => {
    const {user} = useContext(AuthContext);
    return (
        <div>
            <h1>This is {user?.email}</h1>
        </div>
    );
};

export default Profile;