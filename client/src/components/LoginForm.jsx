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
        <div className="flex flex-col items-center justify-center w-full h-full text-text dark:text-text-dark bg-bg dark:bg-bg-dark">
            <h1 className="text-3xl font-bold mb-6">Welcome to Recordit</h1>
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
                            className="pl-12 h-14 bg-bg dark:bg-bg-dark border-border dark:border-border-dark rounded-full placeholder:text-text-placeholder dark:placeholder:text-text-placeholder-dark focus:outline-none focus:ring-primary focus:border-transparent"
                        />
                        <HiOutlineMail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-placeholder dark:text-text-placeholder-dark" />
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
                            className="pl-12 h-14 bg-bg dark:bg-bg-dark border-border dark:border-border-dark rounded-full placeholder:text-text-placeholder dark:placeholder:text-text-placeholder-dark focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <LuKeyRound className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-text-placeholder dark:text-text-placeholder-dark" />
                    </div>
                </div>

                <Button
                    type="submit"
                    className="w-full h-12 bg-primary hover:bg-primary/95 hover:cursor-pointer text-text rounded-full"
                    disabled={loading}
                >
                    Log in
                </Button>

                <div className="text-center">
                    <span className="text-text-placeholder dark:text-text-placeholder-dark">or</span>
                </div>

                <div className="flex flex-col space-y-4">
                    <Button
                        variant="outline"
                        className="h-12 bg-bg-secondary dark:bg-bg-secondary-dark hover:bg-bg-secondary/90 dark:hover:bg-bg-secondary-dark/90 border-none hover:cursor-pointer rounded-full"
                        disabled={loading}
                    >
                        <FaGoogle className="mr-2 h-5 w-5" />
                        Continue with Google
                    </Button>
                </div>
                <div className="text-center mt-6">
                    <p className="text-sm text-text-placeholder dark:text-text-placeholder-dark mt-4">
                        Don't have an account? <Link className="text-primary font-semibold" to="/register">Register</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default LoginForm