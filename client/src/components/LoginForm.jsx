import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi"
import { LuKeyRound } from "react-icons/lu"
import { FaGoogle } from "react-icons/fa"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import api from "../api/axios"
import { setAccessToken } from "../api/auth"
import { useDispatch, useSelector } from 'react-redux'
import { setUser, setLoading } from "../features/user/userSlice"

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector(state => state.user.isLoading);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(setLoading(true));
        try {
            const response = await api.post("token/", {
                email: email,
                password: password,
            });
            setAccessToken(response.data.access);
            dispatch(setUser(response.data.user));
            console.log("Login successful:", response.data.message);
            navigate("/");
        } catch (error) {
            console.log("Error:", error.response?.data?.detail || "An error occurred");
        } finally {
            dispatch(setLoading(false));
        }
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl font-bold text-text mb-6">Welcome to Recordit</h1>
            <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="relative">
                        <Label htmlFor="email" className="sr-only">
                            Email
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="pl-12 h-14 bg-white border-secondary rounded-xl text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>

                    <div className="relative">
                        <Label htmlFor="password" className="sr-only">
                            Password
                        </Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="pl-12 h-14 bg-white border-secondary rounded-xl text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <LuKeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary-hover hover:cursor-pointer text-text rounded-xl"
                    disabled={loading}
                >
                    Log in
                </Button>

                <div className="text-center">
                    <span className="text-gray-500">or</span>
                </div>

                <div className="flex flex-col space-y-4">
                    <Button
                        variant="outline"
                        className="h-12 bg-secondary hover:bg-secondary-hover text-text border-secondary-hover rounded-xl"
                        disabled={loading}
                    >
                        <FaGoogle className="mr-2 h-5 w-5 text-text" />
                        Continue with Google
                    </Button>
                </div>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500 mt-4">
                        Don't have an account? <Link className="text-primary font-semibold hover:underline" to="/register">Register</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm