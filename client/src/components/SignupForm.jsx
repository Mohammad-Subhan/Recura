import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineMail } from "react-icons/hi"
import { FiUser } from "react-icons/fi"
import { LuKeyRound } from "react-icons/lu"
import { FaGoogle } from "react-icons/fa"
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import api from "../api/axios"

const SignupForm = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await api.post("register/", {
                fullName: fullName,
                email: email,
                password: password,
            });
            console.log("Registration successful:", response.data.message);
            navigate("/login");
        } catch (error) {
            console.log("Error:", error.response?.data?.message || "An error occurred");
        } finally {
            setLoading(false);
        }
    }


    return (
        <div className="flex flex-col items-center justify-center w-full">
            <h1 className="text-3xl font-bold text-text mb-6">Welcome to Recordit</h1>
            <form className="space-y-4 w-full max-w-md" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <div className="relative">
                        <Label htmlFor="fullName" className="sr-only">
                            Full Name
                        </Label>
                        <Input
                            id="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            className="pl-12 h-14 bg-white border-secondary rounded-xl text-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                        />
                        <FiUser className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    </div>
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
                    Sign Up
                </Button>

                <div className="text-center">
                    <span className="text-gray-500">or</span>
                </div>

                <div className="flex flex-col space-y-4">
                    <Button
                        variant="outline"
                        className="h-12 bg-secondary hover:bg-secondary-hover text-text border-secondary-hover rounded-xl"
                    >
                        <FaGoogle className="mr-2 h-5 w-5 text-text" />
                        Login with Google
                    </Button>
                </div>
                <div className="text-center mt-6">
                    <p className="text-sm text-gray-500 mt-4">
                        Already have an account? <Link className="text-primary font-semibold hover:underline" to="/login">Login</Link>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default SignupForm