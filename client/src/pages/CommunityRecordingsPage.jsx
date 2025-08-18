import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, Play, Eye, ArrowDownWideNarrow, ArrowUpWideNarrow } from "lucide-react"
import Layout from "../components/Layout"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import assets from "../assets/assets"

const CommunityRecordingsPage = () => {

    const [recordings, setRecordings] = useState([]);
    const [user, setUser] = useState({
        id: 0,
        fullName: "",
        email: "",
        isStaff: false,
        createdAt: ""
    });
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("latest");

    useEffect(() => {
        setRecordings(assets.sampleRecordings);
        setUser(assets.sampleUser);
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

    useEffect(() => {
        const filteredRecordings = assets.sampleRecordings.filter(recording =>
            recording.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            recording.description.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setRecordings(filteredRecordings);
    }, [searchTerm]);

    const handleSort = () => {
        const sortedRecordings = [...recordings];
        if (sortBy === "latest") {
            sortedRecordings.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
            setSortBy("oldest");
        } else {
            sortedRecordings.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setSortBy("latest");
        }
        setRecordings(sortedRecordings);
    }

    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto text-text dark:text-text-dark">
                <div className="h-full w-full p-6 space-y-6 bg-background">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div>
                            <h1 className="text-xl md:text-3xl font-bold mb-2">Community Recordings</h1>
                            <p className="text-sm md:text-md text-muted-foreground">Explore and discover recordings from the community</p>
                        </div>
                    </div>

                    {/* Filters and Search */}
                    <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg dark:bg-bg-dark p-2 backdrop-blur-sm shadow-sm">
                        <CardContent className="w-full p-0">
                            <div className="flex flex-col md:flex-row gap-4 items-end md:items-center justify-between">
                                <div className="relative flex items-center h-full w-full">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                    <Input placeholder="Search recordings..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 placeholder:text-text-placeholder dark:placeholder:text-text-placeholder-dark bg-bg dark:bg-bg-dark border-none shadow-none focus-visible:ring-0" />
                                </div>
                                <div className="flex h-full items-center space-x-2">
                                    <Button variant="outline" onClick={handleSort} className="border-none bg-bg-secondary dark:bg-bg-secondary-dark w-24 hover:cursor-pointer">
                                        {sortBy === "latest" ? <ArrowDownWideNarrow className="w-4 h-4 mr-1" /> : <ArrowUpWideNarrow className="w-4 h-4 mr-1" />}
                                        {sortBy === "latest" ? "Latest" : "Oldest"}
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Recordings Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {recordings.map((recording) => (
                            <Link key={recording.id} to={`/recording/${recording.id}`} className="group cursor-pointer">
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
                                        <AvatarImage src={"/placeholder.svg"} alt="Author" />
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
                                        {recording.views.toLocaleString()}
                                    </span>
                                    <span>{getTime(recording.createdAt)}</span>
                                </div>
                            </Link>
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

export default CommunityRecordingsPage;