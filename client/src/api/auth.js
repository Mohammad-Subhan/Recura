import axios from "axios"
import { clearUser, setLoading } from "../features/user/userSlice"
import { store } from "../app/store"

let accessToken = null
let onUnauthenticated = () => { }

export const setAccessToken = (token) => {
    accessToken = token
}

export const getAccessToken = () => accessToken

export const setOnUnauthenticated = (callback) => {
    onUnauthenticated = callback
}

export const refreshAccessToken = async () => {
    store.dispatch(setLoading(true));
    try {
        const response = await axios.post(
            "http://localhost:8000/api/token/refresh/",
            {},
            {
                withCredentials: true,
                headers: { "Content-Type": "application/json" },
            }
        );

        setAccessToken(response.data.access);
        store.dispatch(setLoading(false));
        return accessToken;
    } catch (error) {
        setAccessToken(null);
        store.dispatch(clearUser());
        store.dispatch(setLoading(false));
        onUnauthenticated();
        throw error;
    }
};