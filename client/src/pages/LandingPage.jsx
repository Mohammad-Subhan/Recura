import LandingTopNavbar from '../components/LandingTopNavbar'
import { Badge } from "../components/ui/badge"
import { Button } from "../components/ui/button"
import { Card, CardContent } from "../components/ui/card"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle, FileText, Mic, Play, Share2, Shield, Zap } from 'lucide-react';

const features = [
    {
        icon: Zap,
        title: "One-Click Recording",
        description: "Start recording instantly with minimal setup. No complex configurations required.",
    },
    {
        icon: Share2,
        title: "Instant Sharing",
        description: "Generate shareable links immediately. Control privacy with public or private settings.",
    },
    {
        icon: FileText,
        title: "AI Transcription",
        description: "Automatic speech-to-text transcription powered by advanced AI technology.",
    },
    {
        icon: Mic,
        title: "Audio Controls",
        description: "Toggle microphone on/off during recording with real-time audio monitoring.",
    },
    {
        icon: Shield,
        title: "Privacy First",
        description: "Your recordings are secure with enterprise-grade encryption and privacy controls.",
    },
]

const LandingPage = () => {

    return (
        <div className="text-text dark:text-text-dark">
            {/* Top Navbar */}
            <LandingTopNavbar />

            {/* Main Content */}
            <div className="flex flex-col h-full">
                {/* Hero Section */}
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-secondary/10 to-bg dark:from-bg-dark dark:to-bg-dark py-40 pb-7 md:pb-14 lg:py-50 lg:pb-16">
                    <Badge className="text-text dark:text-text-dark font-semibold bg-border/10 rounded-full px-4 py-2 mb-4 md:text-sm">
                        ✨ AI-Powered Transcription
                    </Badge>

                    <h1 className="md:text-7xl sm:text-6xl text-5xl text-center font-bold mb-6 leading-tight">
                        Record. Share. <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Transcribe.</span>
                    </h1>

                    <p className="md:text-base sm:text-[16px] text-sm text-center font-normal text-text-secondary max-w-2xl mx-auto px-10">
                        Professional screen recording with AI transcription, instant sharing, and powerful management tools. Perfect
                        for tutorials, presentations, and team collaboration.
                    </p>

                    <div className="flex flex-row gap-4 justify-center my-10">
                        <Link to="/dashboard">
                            <Button
                                className="h-[40px] gap-3 rounded-full shadow-md font-semibold bg-primary hover:bg-primary/90 hover:cursor-pointer text-text"
                            >
                                Get Started
                                <ArrowRight />
                            </Button>
                        </Link>
                        <Button
                            variant="outline"
                            className="h-[40px] transition-all duration-300 font-semibold shadow-md dark:border-border-dark/30 rounded-full border-0 border-border-dark/5 dark:border hover:bg-border/2 hover:cursor-pointer"
                        >
                            <Play />
                            Watch Demo
                        </Button>
                    </div>
                </div>

                {/* Demo Video */}
                <div className="flex items-center justify-center h-full bg-gradient-to-tr from-secondary/10 to-bg dark:from-bg-dark dark:to-bg-dark py-10 px-10">
                    <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl shadow-lg flex items-center justify-center mx-auto aspect-video w-full md:max-w-xl lg:max-w-4xl p-6">
                        <div className="text-center">
                            <div className="sm:w-20 sm:h-20 w-10 h-10 bg-primary rounded-full relative flex items-center mx-auto mb-4 hover:cursor-pointer">
                                <Play className="absolute sm:left-6.5 left-[13px] sm:h-8 sm:w-8 text-text" />
                            </div>
                            <p className="sm:text-lg font-medium">Demo Video</p>
                        </div>
                    </div>
                </div>

                { /* Features Section */}
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-secondary/10 to-bg dark:from-bg-dark dark:to-bg-dark pt-20 md:pt-30">
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
                                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-none dark:shadow-border-dark/10 shadow-md bg-transparent backdrop-blur-sm">
                                        <CardContent className="p-0">
                                            <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4">
                                                {<feature.icon size={22} className="text-text" />}
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
                <div className="flex flex-col items-center justify-center h-full bg-gradient-to-tr from-secondary/10 to-bg dark:from-bg-dark dark:to-bg-dark py-20">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 px-10">Simple, Transparent Pricing</h2>
                        <p className="text-lg text-text-secondary max-w-2xl mx-auto px-10">
                            Choose the plan that fits your needs
                        </p>
                    </div>

                    <div className="max-w-7xl mx-auto px-10 md:h-[440px] w-full">
                        <div className="flex flex-col md:flex-row h-full justify-center items-center gap-6 w-full">
                            <Card className="p-6 hover:shadow-md transition-all duration-300 border-border dark:border-border-dark h-full w-full md:max-w-[400px] border-[1.5px] shadow-xs dark:shadow-border-dark/10 bg-transparent backdrop-blur-sm rounded-4xl">
                                <CardContent className="p-0 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Free</h3>
                                        <p className="text-4xl font-bold mb-4">
                                            $0<span className="text-lg font-normal text-text-secondary">/month</span>
                                        </p>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-center gap-x-2"><CheckCircle height={16} width={16} className="text-green-500" /> Unlimited recordings</li>
                                            <li className="flex items-center gap-x-2"><CheckCircle height={16} width={16} className="text-green-500" /> 5GB storage</li>
                                            <li className="flex items-center gap-x-2"><CheckCircle height={16} width={16} className="text-green-500" /> Basic support</li>
                                        </ul>
                                    </div>
                                    <Button variant="outline" size="lg" className="rounded-full w-full bg-transparent border-border dark:border-border-dark hover:bg-border/5 dark:hover:bg-border-dark/5 hover:cursor-pointer">Get Started</Button>
                                </CardContent>
                            </Card>

                            <Card className="p-6 hover:shadow-md dark:shadow-border-dark/20 transition-all duration-300 border-primary w-full md:max-w-[400px] h-full border-[1.5px] shadow-xs bg-transparent backdrop-blur-sm rounded-4xl">
                                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-secondary border-none text-text rounded-full">
                                    Most Popular
                                </Badge>
                                <CardContent className="p-0 flex flex-col justify-between h-full">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">Pro</h3>
                                        <p className="text-4xl font-bold mb-4">
                                            $12<span className="text-lg font-normal text-text-secondary">/month</span>
                                        </p>
                                        <ul className="space-y-2 mb-4">
                                            <li className="flex items-center gap-x-2"><CheckCircle height={16} width={16} className="text-green-500" /> Unlimited recordings</li>
                                            <li className="flex items-center gap-x-2"><CheckCircle height={16} width={16} className="text-green-500" /> 5GB storage</li>
                                            <li className="flex items-center gap-x-2"><CheckCircle height={16} width={16} className="text-green-500" /> Basic support</li>
                                        </ul>
                                    </div>
                                    <Button variant="outline" size="lg" className="rounded-full w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/95 hover:to-secondary/95 transition-all text-text hover:cursor-pointer border-none">Get Started</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="py-12 px-4 border-t border-border dark:border-border-dark bg-gradient-to-br from-secondary/10 to-bg dark:from-bg-dark dark:to-bg-dark">
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
                        <div className="border-t border-border dark:border-border-dark mt-8 pt-8 text-center">
                            <p>&copy; 2025 Recordit. All rights reserved.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default LandingPage