import Layout from '../components/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Badge } from "../components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Play, Video, Clock, Eye, Share2, Globe } from "lucide-react"
import { Link } from "react-router-dom"
import assets from '../assets/assets'
import { useEffect, useState } from 'react'

const Dashboard = () => {

    const [user, setUser] = useState({
        id: 0,
        fullName: "",
        email: "",
        isStaff: false,
        createdAt: ""
    });
    const [recordings, setRecordings] = useState([]);
    const [sharedLinks, setSharedLinks] = useState([]);

    useEffect(() => {
        setUser(assets.sampleUser);
        setRecordings(assets.sampleRecordings);
        setSharedLinks(assets.sampleSharedLinks);
    }, []);

    const getTime = (dateString) => {
        const today = new Date();
        const date = new Date(dateString);
        const diff = today - date;
        const seconds = Math.floor(diff / 1000);

        if (seconds < 60) return `${seconds} seconds ago`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)} minutes ago`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)} hours ago`;
        if (seconds < 2592000) return `${Math.floor(seconds / 86400)} days ago`;
        if (seconds < 31536000) return `${Math.floor(seconds / 2592000)} months ago`;
        return `${Math.floor(seconds / 31536000)} years ago`;
    }

    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
                <div className="h-full w-full p-6 space-y-8 bg-background">
                    {/* Header with Start Recording Button */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome back, {user.fullName.split(" ")[0]}! 👋</h1>
                            <p className="text-muted-foreground">Ready to create your next amazing recording?</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <Link to="/dashboard/record">
                                <Button
                                    size="lg"
                                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-text-dark dark:text-text font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer rounded-full"
                                >
                                    <Video className="w-5 h-5 mr-1" />
                                    Start Recording
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Analytics Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-0 flex justify-center border-0 bg-gradient-to-br from-primary to-secondary text-text-dark dark:text-text h-32">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-medium">Total Recordings</p>
                                        <p className="text-3xl font-bold">{recordings.length}</p>
                                    </div>
                                    <Video className="h-8 w-8" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-0 flex justify-center border-0 bg-bg-secondary dark:bg-bg-secondary-dark shadow-sm h-32">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium">Shares</p>
                                        <p className="text-3xl font-bold">{sharedLinks.length}</p>
                                    </div>
                                    <Share2 className="h-8 w-8 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* My Recordings */}
                    <Card className="border-0 bg-bg dark:bg-bg-secondary-dark shadow-sm gap-5">
                        <CardHeader className="">
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center text-lg font-semibold">
                                    <Clock className="w-5 h-5 mr-2 text-primary" />
                                    My Recent Recordings
                                </CardTitle>
                                <Link to="/dashboard/recordings" className="text-sm text-secondary hover:text-secondary-hover px-2">
                                    View All
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {recordings.slice(0, 4).map((recording) => (
                                    <div key={recording.id} className="group cursor-pointer">
                                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-3 hover:shadow-lg transition-shadow duration-300">
                                            <img src={recording.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2">
                                                <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                                                    {recording.duration.split(":")[0] === "00"
                                                        ? recording.duration.split(":")[1] + ":" + recording.duration.split(":")[2]
                                                        : recording.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-sm truncate group-hover:text-secondary transition-colors mb-1">
                                            {recording.title}
                                        </h3>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Avatar className="w-4 h-4">
                                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User Avatar" />
                                                <AvatarFallback className="text-[10px] bg-gray-200 text-text">
                                                    {user.fullName.split(" ")
                                                        .map((n) => n[0])}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs text-muted-foreground">{user.fullName}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                                            <span className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1" />
                                                {recording.views.toLocaleString() || 0}
                                            </span>
                                            <span>{getTime(recording.createdAt)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Community Recordings */}
                    <Card className="border-0 bg-bg dark:bg-bg-secondary-dark shadow-sm gap-5">
                        <CardHeader className="">
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center text-lg font-semibold">
                                    <Globe className="w-5 h-5 mr-2 text-secondary" />
                                    Community Recordings
                                </CardTitle>
                                <Link to="/dashboard/recordings" className="text-sm text-secondary hover:text-secondary-hover px-2">
                                    View All
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {recordings.slice(0, 4).map((recording) => (
                                    <div key={recording.id} className="group cursor-pointer">
                                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-3 hover:shadow-lg transition-shadow duration-300">
                                            <img src={recording.thumbnailUrl} className="absolute inset-0 w-full h-full object-cover" />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2">
                                                <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                                                    {recording.duration.split(":")[0] === "00"
                                                        ? recording.duration.split(":")[1] + ":" + recording.duration.split(":")[2]
                                                        : recording.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-sm truncate group-hover:text-secondary transition-colors mb-1">
                                            {recording.title}
                                        </h3>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Avatar className="w-4 h-4">
                                                <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User Avatar" />
                                                <AvatarFallback className="text-[10px] bg-gray-200 text-text">
                                                    {user.fullName.split(" ")
                                                        .map((n) => n[0])}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs text-muted-foreground">{user.fullName}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                                            <span className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1" />
                                                {recording.views.toLocaleString() || 0}
                                            </span>
                                            <span>{getTime(recording.createdAt)}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard