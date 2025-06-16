import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
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
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/dashboard" element={<Navigate to="/" />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )

}

export default App;