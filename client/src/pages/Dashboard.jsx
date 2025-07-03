import Layout from '../components/Layout'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Video, Clock, Eye, Share2, Download, TrendingUp, Globe } from "lucide-react"
import { Link } from "react-router-dom"

const recentRecordings = [
    {
        id: 1,
        title: "React Best Practices 2024",
        author: "Sarah Chen",
        authorAvatar: "/placeholder.svg?height=32&width=32",
        duration: "18:45",
        views: 2340,
        createdAt: "1 day ago",
        thumbnail: "/placeholder.svg?height=120&width=200",
        tags: ["React", "Tutorial"],
    },
    {
        id: 2,
        title: "Design System Implementation",
        author: "Mike Johnson",
        authorAvatar: "/placeholder.svg?height=32&width=32",
        duration: "25:12",
        views: 1890,
        createdAt: "2 days ago",
        thumbnail: "/placeholder.svg?height=120&width=200",
        tags: ["Design", "UI/UX"],
    },
    {
        id: 3,
        title: "API Integration Walkthrough",
        author: "Alex Rivera",
        authorAvatar: "/placeholder.svg?height=32&width=32",
        duration: "14:23",
        views: 1456,
        createdAt: "3 days ago",
        thumbnail: "/placeholder.svg?height=120&width=200",
        tags: ["API", "Backend"],
    },
    {
        id: 4,
        title: "Mobile App Testing Strategy",
        author: "Emma Wilson",
        authorAvatar: "/placeholder.svg?height=32&width=32",
        duration: "22:18",
        views: 987,
        createdAt: "4 days ago",
        thumbnail: "/placeholder.svg?height=120&width=200",
        tags: ["Testing", "Mobile"],
    },
]

// const publicRecordings = [
//     {
//         id: 1,
//         title: "React Best Practices 2024",
//         author: "Sarah Chen",
//         authorAvatar: "/placeholder.svg?height=32&width=32",
//         duration: "18:45",
//         views: 2340,
//         createdAt: "1 day ago",
//         thumbnail: "/placeholder.svg?height=120&width=200",
//         tags: ["React", "Tutorial"],
//     },
// ]

const Dashboard = () => {
    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto">
                <div className="h-full w-full p-6 space-y-8 bg-background text-text">
                    {/* Header with Start Recording Button */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-3xl font-bold mb-2">Welcome back, John! 👋</h1>
                            <p className="text-muted-foreground">Ready to create your next amazing recording?</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <Link to="/dashboard/record">
                                <Button
                                    size="lg"
                                    className="px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:cursor-pointer"
                                >
                                    <Video className="w-5 h-5 mr-2" />
                                    Start Recording
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Analytics Overview */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Card className="p-0 flex justify-center border-0 bg-gradient-to-br from-primary to-secondary text-white h-32">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm opacity-90 font-medium">Total Recordings</p>
                                        <p className="text-3xl font-bold">24</p>
                                    </div>
                                    <Video className="h-8 w-8 opacity-80" />
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="p-0 flex justify-center border-0 bg-white shadow-sm h-32">
                            <CardContent className="p-6">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground font-medium">Shares</p>
                                        <p className="text-3xl font-bold">89</p>
                                    </div>
                                    <Share2 className="h-8 w-8 text-muted-foreground" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* My Recordings */}
                    <Card className="border-0 bg-white shadow-sm gap-5">
                        <CardHeader className="">
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center text-lg font-semibold">
                                    <Clock className="w-5 h-5 mr-2 text-secondary" />
                                    My Recent Recordings
                                </CardTitle>
                                <Link to="/dashboard/recordings" className="text-sm text-secondary hover:text-secondary-hover px-2 hover:underline">
                                    View All
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-text">
                                {recentRecordings.slice(0, 4).map((recording) => (
                                    <div key={recording.id} className="group cursor-pointer">
                                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-3">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2">
                                                <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                                                    {recording.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-sm truncate group-hover:text-secondary group-hover:underline transition-colors mb-1">
                                            {recording.title}
                                        </h3>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Avatar className="w-4 h-4">
                                                <AvatarImage src={recording.authorAvatar || "/placeholder.svg"} alt={recording.author} />
                                                <AvatarFallback className="text-xs bg-gray-200">
                                                    {recording.author
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs text-muted-foreground">{recording.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                                            <span className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1" />
                                                {recording.views.toLocaleString()}
                                            </span>
                                            <span>{recording.createdAt}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Community Recordings */}
                    <Card className="border-0 bg-white shadow-sm gap-5">
                        <CardHeader className="">
                            <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center text-lg font-semibold">
                                    <Globe className="w-5 h-5 mr-2 text-secondary" />
                                    Community Recordings
                                </CardTitle>
                                <Link to="/dashboard/recordings" className="text-sm text-secondary hover:text-secondary-hover px-2 hover:underline">
                                    View All
                                </Link>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-text">
                                {recentRecordings.slice(0, 4).map((recording) => (
                                    <div key={recording.id} className="group cursor-pointer">
                                        <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden mb-3">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                                    <Play className="w-5 h-5 text-white ml-0.5" />
                                                </div>
                                            </div>
                                            <div className="absolute bottom-2 right-2">
                                                <Badge variant="secondary" className="text-xs bg-black/70 text-white border-0">
                                                    {recording.duration}
                                                </Badge>
                                            </div>
                                        </div>
                                        <h3 className="font-medium text-sm truncate group-hover:text-secondary group-hover:underline transition-colors mb-1">
                                            {recording.title}
                                        </h3>
                                        <div className="flex items-center space-x-2 mb-2">
                                            <Avatar className="w-4 h-4">
                                                <AvatarImage src={recording.authorAvatar || "/placeholder.svg"} alt={recording.author} />
                                                <AvatarFallback className="text-xs bg-gray-200">
                                                    {recording.author
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="text-xs text-muted-foreground">{recording.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                                            <span className="flex items-center">
                                                <Eye className="w-3 h-3 mr-1" />
                                                {recording.views.toLocaleString()}
                                            </span>
                                            <span>{recording.createdAt}</span>
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