import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { FiUser } from "react-icons/fi"
import { LuSun } from "react-icons/lu"
import { IoMenu } from "react-icons/io5"
import ModeToggle from './ModeToggle'

const LandingTopNavbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (currentY < 128) {
                setShowBackground(false);
            } else {
                setShowBackground(true);
            }

            if (Math.abs(currentY - lastScrollY) < 10) return;

            if (currentY > lastScrollY) {
                setShowHeader(false); // moving down
                setIsMenuOpen(false); // close menu on scroll down
            } else {
                setShowHeader(true); // moving up
            }

            setLastScrollY(currentY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`${!showHeader && "top-[-64px]"} ${showBackground && "bg-bg/80 dark:bg-bg-dark/80 shadow-md"} transition-all fixed top-0 left-0 w-screen text-text dark:text-text-dark h-16 backdrop-blur-md z-50`}>
            <div className="h-full max-w-7xl mx-auto">
                <div className="flex items-center justify-between h-full md:px-10 pl-10 px-4">
                    {/* Logo */}
                    <Link className="text-2xl font-bold w-[256px] text-left" to="/">
                        Recordit
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex text-sm font-semibold">
                        <nav className="flex space-x-8">
                            <Link to="#features" className="hover:text-primary">Features</Link>
                            <Link to="#pricing" className="hover:text-primary">Pricing</Link>
                            <Link to="#about" className="hover:text-primary">About</Link>
                            <Link to="#contact" className="hover:text-primary">Contact</Link>
                        </nav>
                    </div>

                    {/* Call to Action Button */}
                    <div className="flex items-center justify-end space-x-4">
                        <ModeToggle />

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <Button variant="ghost" className="hover:cursor-pointer" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                <IoMenu className="w-5 h-5" />
                            </Button>
                        </div>

                        <Button variant="ghost" className="hidden md:flex">
                            <Link to="/login" className="">
                                Login
                            </Link>
                        </Button>
                        <Button className="hidden md:flex px-4 py-2 bg-gradient-to-br from-primary to-secondary dark:text-text rounded-full hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer">
                            <Link to="/register" className="flex items-center gap-x-2">
                                <FiUser />
                                Register
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`${isMenuOpen ? "opacity-100 top-16" : "-top-[250px] opacity-0"} md:hidden fixed left-0 py-4 border-t transition-all bg-bg dark:bg-bg-dark border-border dark:border-border-dark shadow-md w-full -z-10 duration-300 ease-in-out`}>
                        <div className="flex flex-col space-y-4 px-7">
                            <Link to="#features" className="text-sm font-medium hover:text-primary transition-colors">
                                Features
                            </Link>
                            <Link to="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                                Pricing
                            </Link>
                            <Link to="#docs" className="text-sm font-medium hover:text-primary transition-colors">
                                Docs
                            </Link>
                            <Link to="#support" className="text-sm font-medium hover:text-primary transition-colors">
                                Support
                            </Link>
                            <div className="flex flex-col space-y-2">
                                <Link href="/auth/signin">
                                    <Button variant="outline" size="sm" className="w-full justify-center bg-bg dark:bg-bg-dark border-border dark:border-border-dark hover:bg-border-dark/10 rounded-full hover:cursor-pointer">
                                        Sign In
                                    </Button>
                                </Link>
                                <Link href="/dashboard">
                                    <Button
                                        size="sm"
                                        className="w-full bg-gradient-to-br from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 dark:from-primary-dark dark:to-secondary-dark dark:hover:from-primary-dark/90 dark:hover:to-secondary-dark/90 hover:cursor-pointer text-text rounded-full flex items-center gap-x-2"
                                    >
                                        <FiUser />
                                        Register
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default LandingTopNavbar; 