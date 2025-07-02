import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { FiUser } from "react-icons/fi";
import { LuSun } from "react-icons/lu";
import { IoMenu } from "react-icons/io5";

const LandingTopNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 w-screen h-16 bg-background/80 backdrop-blur-md shadow-md z-50">
            <div className="h-full max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-full px-10">
                    {/* Logo */}
                    <Link className="text-2xl font-bold text-text">
                        Recordit
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex text-text text-sm font-semibold">
                        <nav className="flex space-x-8">
                            <Link to="#features" className="hover:text-primary">Features</Link>
                            <Link to="#pricing" className="hover:text-primary">Pricing</Link>
                            <Link to="#about" className="hover:text-primary">About</Link>
                            <Link to="#contact" className="hover:text-primary">Contact</Link>
                        </nav>
                    </div>

                    {/* Call to Action Button */}
                    <div className="hidden md:flex items-center space-x-4">
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

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <Button variant="ghost" className="text-text hover:cursor-pointer">
                            <LuSun className="text-lg" />
                        </Button>
                        <Button variant="ghost" className="hover:cursor-pointer" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <IoMenu className="w-5 h-5" />
                        </Button>
                    </div>


                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="md:hidden fixed top-16 left-0 py-4 border-t border-accent bg-background shadow-md w-full z-50">
                            <div className="flex flex-col space-y-4 px-7">
                                <Link to="#features" className="text-sm font-medium hover:text-primary text-text transition-colors">
                                    Features
                                </Link>
                                <Link to="#pricing" className="text-sm font-medium hover:text-primary text-text transition-colors">
                                    Pricing
                                </Link>
                                <Link to="#docs" className="text-sm font-medium hover:text-primary text-text transition-colors">
                                    Docs
                                </Link>
                                <Link to="#support" className="text-sm font-medium hover:text-primary text-text transition-colors">
                                    Support
                                </Link>
                                <div className="flex flex-col space-y-2">
                                    <Link href="/auth/signin">
                                        <Button variant="outline" size="sm" className="w-full justify-center bg-background border-accent hover:bg-accent hover:cursor-pointer">
                                            Sign In
                                        </Button>
                                    </Link>
                                    <Link href="/dashboard">
                                        <Button
                                            size="sm"
                                            className="w-full bg-gradient-to-br from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer text-text flex items-center gap-x-2"
                                        >
                                            <FiUser />
                                            Register
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default LandingTopNavbar; 