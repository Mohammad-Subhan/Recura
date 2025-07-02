import React from 'react'
import LandingTopNavbar from '../components/LandingTopNavbar'
import { LuZap, LuFileText, LuShield } from "react-icons/lu";
import { RiShareLine } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6"
import { FiCheckCircle } from "react-icons/fi";
import { IoPlayOutline, IoMicOutline } from "react-icons/io5"
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Link } from "react-router-dom"

const LandingPage = () => {

    const features = [
        {
            icon: LuZap,
            title: "One-Click Recording",
            description: "Start recording instantly with minimal setup. No complex configurations required.",
        },
        {
            icon: RiShareLine,
            title: "Instant Sharing",
            description: "Generate shareable links immediately. Control privacy with public or private settings.",
        },
        {
            icon: LuFileText,
            title: "AI Transcription",
            description: "Automatic speech-to-text transcription powered by advanced AI technology.",
        },
        {
            icon: IoMicOutline,
            title: "Audio Controls",
            description: "Toggle microphone on/off during recording with real-time audio monitoring.",
        },
        {
            icon: LuShield,
            title: "Privacy First",
            description: "Your recordings are secure with enterprise-grade encryption and privacy controls.",
        },
    ]

    return (
        <div className="">
            {/* Top Navbar */}
            <LandingTopNavbar />

            {/* Main Content */}
            <div className="flex flex-col h-full bg-background">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-secondary/10 to-background py-40 pb-7 md:pb-14 lg:py-50 lg:pb-16">
                    <Badge className="text-text font-semibold bg-[#EBEBEB] rounded-full px-4 py-2 mb-4 md:text-sm">
                        ✨ AI-Powered Transcription
                    </Badge>

                    <h1 className="md:text-7xl sm:text-6xl text-5xl text-center font-bold mb-6 leading-tight">
                        Record. Share. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transcribe.</span>
                    </h1>

                    <p className="md:text-xl sm:text-[16px] text-sm text-center font-normal text-text-secondary max-w-2xl mx-auto px-10">
                        Professional screen recording with AI transcription, instant sharing, and powerful management tools. Perfect
                        for tutorials, presentations, and team collaboration.
                    </p>

                    <div className="flex flex-row gap-4 justify-center my-10">
                        <Link href="/dashboard">
                            <Button
                                className="h-[40px] gap-3 font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover shadow-lg hover:cursor-pointer text-text"
                            >
                                Get Started
                                <FaArrowRight />
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="h-[40px] font-semibold border border-accent hover:bg-primary/5 hover:cursor-pointer text-text"
                        >
                            <IoPlayOutline />
                            Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Demo Video */}
                <div className="flex items-center justify-center h-full bg-gradient-to-tr from-secondary/10 to-background py-10 px-10">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg flex items-center justify-center mx-auto aspect-video w-full md:max-w-xl lg:max-w-4xl p-6">
                        <div className="text-center">
                            <div className="sm:w-20 sm:h-20 w-10 h-10 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:cursor-pointer">
                                <IoPlayOutline className="sm:h-8 sm:w-8" />
                            </div>
                            <p className="sm:text-lg font-medium text-muted-foreground">Demo Video</p>
                        </div>
                    </div>
                </div>

                { /* Features Section */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-secondary/10 to-background pt-20 md:pt-30">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 px-10">Everything you need to record</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto px-10">
                            Powerful features designed to bring ease
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex flex-wrap justify-center gap-6">
                            {features.map((feature, index) => (
                                <div key={index} className="md:max-w-[300px] lg:max-w-[390px] w-full max-w-[500px]">
                                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-none shadow-xs bg-transparent backdrop-blur-sm">
                                        <CardContent className="p-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                                                {<feature.icon size={26} color="background" />}
                                            </div>
                                            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                            <p className="text-muted-foreground">{feature.description}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-tr from-secondary/10 to-background py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 px-10">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto px-10">
                            Choose the plan that fits your needs
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-10 md:h-[440px] w-full">
                        <div className="flex flex-col md:flex-row h-full justify-center items-center gap-6 w-full">
                            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent h-full w-full md:max-w-[400px] border-2 shadow-xs bg-transparent backdrop-blur-sm">
                                <CardContent className="p-0 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Free</h3>
                                        <p className="text-4xl font-bold mb-4">
                                            $0<span className="text-lg font-normal text-text-secondary">/month</span>
                                        </p>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-center gap-x-2"><FiCheckCircle className="text-green-500" /> Unlimited recordings</li>
                                            <li className="flex items-center gap-x-2"><FiCheckCircle className="text-green-500" /> 5GB storage</li>
                                            <li className="flex items-center gap-x-2"><FiCheckCircle className="text-green-500" /> Basic support</li>
                                        </ul>
                                    </div>
                                    <Button variant="outline" size="lg" className="w-full bg-transparent border-accent hover:bg-accent-hover hover:cursor-pointer">Get Started</Button>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary w-full md:max-w-[400px] h-full border-2 shadow-xs bg-transparent backdrop-blur-sm">
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary border-none rounded-full">
                                    Most Popular
                                </Badge>
                                <CardContent className="p-0 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Pro</h3>
                                        <p className="text-4xl font-bold mb-4">
                                            $12<span className="text-lg font-normal text-text-secondary">/month</span>
                                        </p>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-center gap-x-2"><FiCheckCircle className="text-green-500" /> Unlimited recordings</li>
                                            <li className="flex items-center gap-x-2"><FiCheckCircle className="text-green-500" /> 5GB storage</li>
                                            <li className="flex items-center gap-x-2"><FiCheckCircle className="text-green-500" /> Basic support</li>
                                        </ul>
                                    </div>
                                    <Button variant="outline" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer border-none">Get Started</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-12 px-4 border-t border-accent bg-gradient-to-br from-secondary/10 to-background text-text">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            <div>
                                <h3 className="font-bold text-lg mb-4">Recordit</h3>
                                <p className="text-text-secondary">Professional screen recording made simple.</p>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Product</h4>
                                <ul className="space-y-2">
                                    <li>
                                        <Link href="#" className="">
                                            Features
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="">
                                            Pricing
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold mb-4">Support</h4>
                                <ul className="space-y-2 ">
                                    <li>
                                        <Link href="#" className="">
                                            Help Center
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="">
                                            Contact
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#" className="">
                                            Status
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="border-t border-accent mt-8 pt-8 text-center">
                            <p>&copy; 2025 Recordit. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default LandingPage