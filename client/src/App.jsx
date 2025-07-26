import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import Dashboard from './pages/Dashboard'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import LandingPage from './pages/LandingPage'
import NewRecordingPage from './pages/NewRecordingPage'
import MyRecordingsPage from "./pages/MyRecordingsPage"
import CommunityRecordingsPage from './pages/CommunityRecordingsPage'
import ProfilePage from './pages/ProfilePage'
import SettingsPage from './pages/SettingsPage'
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
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/recording/new" element={<NewRecordingPage />} />
            <Route path="/recordings/my" element={<MyRecordingsPage />} />
            <Route path="/recordings" element={<CommunityRecordingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )

}

export default App;