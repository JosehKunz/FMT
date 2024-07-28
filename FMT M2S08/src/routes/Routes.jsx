import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Signin from '../pages/Signin/Signin'
import Signup from '../pages/Signup/Signup'
import Home from '../pages/Home/Home'

function RoutesComponent() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    function loginRedirect(component) {
        if (isAuthenticated) {
            return <Navigate to='/home' replace />
        }
        return component
    }

    return (
        <>
            <Routes>
                <Route path='/login' element={loginRedirect(<Signin setIsAuthenticated={setIsAuthenticated} />)} />
                <Route path='/cadastro' element={loginRedirect(<Signup />)} />

                {isAuthenticated ? (
                    <>
                        <Route path='/' element={<Home />} />
                        <Route path='/home' element={<Home />} />
                    </>
                ) : (
                    <>
                        <Route path='*' element={<Navigate replace to='/login' />} />
                    </>
                )}
            </Routes>
        </>
    )
}

export default RoutesComponent;
