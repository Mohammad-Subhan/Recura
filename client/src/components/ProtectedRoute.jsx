import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { Navigate } from "react-router-dom"
import { setUser, clearUser } from "../features/user/userSlice"
import { getAccessToken } from "../api/auth"
import api from "../api/axios"

const ProtectedRoute = ({ children }) => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    useEffect(() => {
        const checkAuthentication = async () => {
            try {
                if (!getAccessToken()) {
                    await api.get("user/");
                }
                const response = await api.get("user/");
                dispatch(setUser(response.data.data));
            } catch (error) {
                dispatch(clearUser());
            }
        }

        checkAuthentication();
    }, [dispatch])

    return (
        isAuthenticated ? children : <Navigate to="/login" replace />
    );
}

export default ProtectedRoute;