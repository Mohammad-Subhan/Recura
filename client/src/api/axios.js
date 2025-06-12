import axios from "axios"
import { getAccessToken, setAccessToken, refreshAccessToken } from "./auth"

const BASE_URL = "http://localhost:8000/api/"

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    }
})

api.interceptors.request.use(
    (config) => {
        const token = getAccessToken()
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

let isRefreshing = false
let failedQueue = []

const processQueue = (error, token = null) => {
    failedQueue.forEach((prom) => {
        if (error) {
            prom.reject(error)
        } else {
            prom.resolve(token)
        }
    })
    failedQueue = []
}

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config

        // Public routes where no token should be refreshed
        const publicPaths = ["register/", "token/"]
        const isPublicPath = (url) => {
            return ["register/", "token/"].some((path) => url.endsWith(path))
        }


        // Don't refresh for public routes
        if (isPublicPath(originalRequest.url) || originalRequest._retry) {
            return Promise.reject(error)
        }

        if (error.response?.status === 401) {

            originalRequest._retry = true

            if (isRefreshing) {
                return new Promise(function (resolve, reject) {
                    failedQueue.push({ resolve, reject })
                })
                    .then((token) => {
                        originalRequest.headers["Authorization"] = `Bearer ${token}`
                        return api(originalRequest)
                    })
                    .catch((err) => Promise.reject(err))
            }

            isRefreshing = true

            try {
                const newToken = await refreshAccessToken()
                setAccessToken(newToken)
                processQueue(null, newToken)
                originalRequest.headers["Authorization"] = `Bearer ${newToken}`
                return api(originalRequest)
            } catch (err) {
                processQueue(err, null)
                return Promise.reject(err)
            } finally {
                isRefreshing = false
            }
        }

        return Promise.reject(error)
    }
)


export default api