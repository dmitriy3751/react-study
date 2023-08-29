import React, {useContext} from 'react';
import {AuthContext} from "../providers/AuthProvider.jsx";

const WithAuth = (Component) => (props) => {
    const {user} = useContext(AuthContext)

    if(!user)
        return <p>You are not authorized!</p>

    return (
        <Component {...props} />
    );
};

export default WithAuth;