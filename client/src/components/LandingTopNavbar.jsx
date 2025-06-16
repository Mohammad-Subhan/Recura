import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { FiUser } from "react-icons/fi";
import { LuSun } from "react-icons/lu";

const LandingTopNavbar = () => {
    return (
        <div className="fixed top-0 left-0 w-screen h-16 bg-background/80 backdrop-blur-md shadow-md z-50">
            <div className="h-full max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-full">
                    {/* Logo */}
                    <Link className="text-2xl font-bold text-text">
                        Recordit
                    </Link>

                    {/* Navigation Links */}
                    <div className="text-text text-sm font-semibold">
                        <nav className="flex space-x-8">
                            <Link to="#features" className="hover:text-primary">Features</Link>
                            <Link to="#pricing" className="hover:text-primary">Pricing</Link>
                            <Link to="#about" className="hover:text-primary">About</Link>
                            <Link to="#contact" className="hover:text-primary">Contact</Link>
                        </nav>
                    </div>

                    {/* Call to Action Button */}
                    <div className="flex items-center space-x-4">
                        <Button variant="ghost" className="text-text hover:cursor-pointer">
                            <LuSun className="text-lg" />
                        </Button>
                        <Button variant="ghost" className="text-text">
                            <Link to="/login" className="">
                                Login
                            </Link>
                        </Button>
                        <Button className="px-4 py-2 bg-gradient-to-br from-primary to-secondary text-text rounded-md hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer">
                            <Link to="/register" className="flex items-center gap-x-2">
                                <FiUser />
                                Resgiter
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingTopNavbar; 