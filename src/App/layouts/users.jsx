import React from 'react';
import { Redirect, useParams } from 'react-router-dom';
import UserPage from '../components/page/userPage';
import AppLoader from '../components/ui/hoc/appLoader';

const Users = () => {
    const { userId, profile } = useParams();
    return (
        <AppLoader>
            {userId ? profile ? <UserPage /> : <Redirect to="/userId/profile" /> : <Redirect to="/" />}
        </AppLoader>
    );
};

export default Users;
