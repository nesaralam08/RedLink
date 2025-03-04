import {handleError,handleSuccess} from '../utils/ReactToast'
import React, { useEffect } from 'react';
import { useNavigate,} from 'react-router-dom';
import PageLoading from './PageLoading'

function PrivateRoute({Component}) {
    const navigate = useNavigate();
    const token = localStorage.getItem('token') || ""
    useEffect(() => {
        if (!token) {
            handleError("Login Now");
            navigate('/');
        }
        
    }, [token, navigate]);

    return token ? <Component /> : <PageLoading />;
}

export default PrivateRoute