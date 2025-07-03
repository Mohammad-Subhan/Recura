import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Play, Eye, SortDesc, Video } from "lucide-react"
import { Link } from "react-router-dom"
import Layout from "../components/Layout"

const MyRecordingsPage = () => {

    const recordings = [
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

    // const recordings = [
    //     {
    //         id: 1,
    //         title: "Product Demo - Q4 Features",
    //         duration: "12:34",
    //         views: 156,
    //         createdAt: "2024-01-15",
    //         thumbnail: "/placeholder.svg?height=120&width=200",
    //         status: "public",
    //         size: "45.2 MB",
    //     },
    //     {
    //         id: 2,
    //         title: "Team Meeting - Sprint Planning",
    //         duration: "45:12",
    //         views: 23,
    //         createdAt: "2024-01-14",
    //         thumbnail: "/placeholder.svg?height=120&width=200",
    //         status: "private",
    //         size: "128.7 MB",
    //     },
    //     {
    //         id: 3,
    //         title: "Tutorial - Getting Started Guide",
    //         duration: "8:45",
    //         views: 89,
    //         createdAt: "2024-01-12",
    //         thumbnail: "/placeholder.svg?height=120&width=200",
    //         status: "public",
    //         size: "32.1 MB",
    //     },
    //     {
    //         id: 4,
    //         title: "Client Presentation - Project Overview",
    //         duration: "23:18",
    //         views: 67,
    //         createdAt: "2024-01-10",
    //         thumbnail: "/placeholder.svg?height=120&width=200",
    //         status: "private",
    //         size: "89.4 MB",
    //     },
    //     {
    //         id: 5,
    //         title: "Bug Report - Issue Reproduction",
    //         duration: "6:32",
    //         views: 12,
    //         createdAt: "2024-01-08",
    //         thumbnail: "/placeholder.svg?height=120&width=200",
    //         status: "private",
    //         size: "24.8 MB",
    //     },
    //     {
    //         id: 6,
    //         title: "Feature Walkthrough - New Dashboard",
    //         duration: "15:47",
    //         views: 234,
    //         createdAt: "2024-01-05",
    //         thumbnail: "/placeholder.svg?height=120&width=200",
    //         status: "public",
    //         size: "67.3 MB",
    //     },
    // ]

    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto">
                <div className="h-full w-full p-6 space-y-6 bg-background text-text">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-xl md:text-3xl font-bold mb-2">My Recordings</h1>
                            <p className="text-sm md:text-md text-muted-foreground">Manage and organize all your screen recordings</p>
                        </div>
                        <div className="mt-4 lg:mt-0">
                            <Link to="/dashboard/record">
                                <Button
                                    className="md:h-10 h-8 px-8 py-3 bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover text-white font-semibold shadow-lg hover:shadow-xl transition-all text-xs md:text-sm duration-300 hover:cursor-pointer"
                                >
                                    <Video className="w-5 h-5 md:mr-2" />
                                    New Recording
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Filters and Search */}
                    <Card className="border-0 bg-white/60 backdrop-blur-sm">
                        <CardContent>
                            <div className="flex flex-col md:flex-row gap-4 items-end md:items-center justify-between">
                                <div className="relative flex items-center h-full w-full">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search recordings..." className="pl-10 bg-white/50 border-accent focus-visible:ring-0" />
                                </div>
                                <div className="flex h-full items-center space-x-2">
                                    <Button variant="outline" className="border-accent hover:cursor-pointer">
                                        <SortDesc className="w-4 h-4 mr-2" />
                                        Sort
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recordings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recordings.map((recording) => (
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
                            // <Card
                            //     key={recording.id}
                            //     className="border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm hover:shadow-lg transition-all duration-300 group"
                            // >
                            //     <CardContent className="p-0">
                            //         {/* Thumbnail */}
                            //         <div className="relative aspect-video bg-gradient-to-br from-yellow-100 to-amber-100 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-t-lg overflow-hidden">
                            //             <div className="absolute inset-0 flex items-center justify-center">
                            //                 <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            //                     <Play className="w-6 h-6 text-white ml-0.5" />
                            //                 </div>
                            //             </div>
                            //             <div className="absolute bottom-2 right-2">
                            //                 <Badge variant="secondary" className="text-xs bg-black/50 text-white">
                            //                     {recording.duration}
                            //                 </Badge>
                            //             </div>
                            //             <div className="absolute top-2 left-2">
                            //                 <Badge variant={recording.status === "public" ? "default" : "secondary"} className="text-xs">
                            //                     {recording.status}
                            //                 </Badge>
                            //             </div>
                            //         </div>

                            //         {/* Content */}
                            //         <div className="p-4">
                            //             <h3 className="font-semibold text-sm mb-2 line-clamp-2">{recording.title}</h3>
                            //             <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                            //                 <div className="flex items-center space-x-3">
                            //                     <span className="flex items-center">
                            //                         <Eye className="w-3 h-3 mr-1" />
                            //                         {recording.views}
                            //                     </span>
                            //                     <span className="flex items-center">
                            //                         <Calendar className="w-3 h-3 mr-1" />
                            //                         {new Date(recording.createdAt).toLocaleDateString()}
                            //                     </span>
                            //                 </div>
                            //             </div>
                            //             <div className="text-xs text-muted-foreground mb-3">Size: {recording.size}</div>

                            //             {/* Actions */}
                            //             <div className="flex items-center justify-between">
                            //                 <div className="flex space-x-1">
                            //                     <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            //                         <Play className="w-4 h-4" />
                            //                     </Button>
                            //                     <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            //                         <Share2 className="w-4 h-4" />
                            //                     </Button>
                            //                     <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            //                         <Download className="w-4 h-4" />
                            //                     </Button>
                            //                 </div>
                            //                 <DropdownMenu>
                            //                     <DropdownMenuTrigger asChild>
                            //                         <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            //                             <MoreHorizontal className="w-4 h-4" />
                            //                         </Button>
                            //                     </DropdownMenuTrigger>
                            //                     <DropdownMenuContent align="end">
                            //                         <DropdownMenuItem>Edit Details</DropdownMenuItem>
                            //                         <DropdownMenuItem>Copy Link</DropdownMenuItem>
                            //                         <DropdownMenuItem>Move to Folder</DropdownMenuItem>
                            //                         <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                            //                     </DropdownMenuContent>
                            //                 </DropdownMenu>
                            //             </div>
                            //         </div>
                            //     </CardContent>
                            // </Card>
                        ))}
                    </div>

                    {/* Load More
                    <div className="text-center">
                        <Button variant="outline" className="px-8">
                            Load More Recordings
                        </Button>
                    </div> */}
                </div>
            </div>
        </Layout >
    )
}

export default MyRecordingsPage