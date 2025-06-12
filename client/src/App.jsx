import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'
import { setOnUnauthenticated } from "./api/auth"

const App = () => {
    const navigate = useNavigate();

    useEffect(() => {
        setOnUnauthenticated(() => {
            navigate("/login");
        });
    }, [navigate]);


    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/" element={<Dashboard />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )

}

export default App;