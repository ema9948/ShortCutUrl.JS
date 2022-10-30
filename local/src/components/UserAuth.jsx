import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router-dom';
import UseFecth from '../Hooks/UseFecth';
import { appContext } from './UserProvider'

const UserAuth = ({ children }) => {

    const { user } = useContext(appContext);

    if (!user?.nombre) return <Navigate to="login" />
    if (user?.nombre) return children
}

export default UserAuth