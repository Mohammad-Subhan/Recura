import axios from "axios"

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

    try {
        const response = await axios.post(
            "http://localhost:8000/api/token/refresh/",
            {},
            {
                withCredentials: true,
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setAccessToken(response.data.access);
        return accessToken;
    } catch (error) {
        setAccessToken(null)
        onUnauthenticated()
        throw error;
    }
}