import React from 'react'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <div className="flex w-full h-full">
            {/* Left Side */}
            <div className="flex flex-col p-12 justify-center h-screen bg-gradient-to-br from-primary/85 to-primary w-1/2">
                <h1 className="text-6xl font-bold text-gray-900 mb-4">Recordit</h1>
                <p className="text-xl text-gray-800">A straight away recording application</p>
                <p className="absolute bottom-12">© 2025 Recordit</p>
            </div>

            {/* Right Side */}
            <div className="flex items-center justify-center h-screen bg-background w-1/2">
                <LoginForm />
            </div>
        </div>
    )
}

export default LoginPage