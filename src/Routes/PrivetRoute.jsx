import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const PrivetRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return (
            <div className='h-[100vh] flex items-center justify-center'>
                <progress className="progress w-56 text-center"></progress>
            </div>
        )
    }

    if (user?.email) {
        return children;
    }
    Swal.fire({
        icon: 'warning',
        title: 'Opps..!',
        text: "You have to log in first to view details",
    });
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivetRoute;