import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Play,
    Pause,
    Volume2,
    VolumeX,
    Maximize,
    Eye,
    Share2,
    Download,
    Heart,
    MessageSquare,
    Clock,
    User,
    Calendar,
    ArrowLeft
} from "lucide-react"
import { Link, useParams, useNavigate } from "react-router-dom"
import Layout from "../components/Layout"
import { useState, useEffect, useRef } from "react"
import assets from "../assets/assets"

const VideoPreviewPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const videoRef = useRef(null);

    const [recording, setRecording] = useState(null);
    const [user, setUser] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        // Find the recording by ID
        const foundRecording = assets.sampleRecordings.find(rec => rec.id === parseInt(id));
        if (foundRecording) {
            setRecording(foundRecording);
            setUser(assets.sampleUser);
        } else {
            navigate('/recordings/my');
        }
    }, [id, navigate]);

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

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const percent = (e.clientX - rect.left) / rect.width;
        const newTime = percent * duration;
        if (videoRef.current) {
            videoRef.current.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };

    const toggleFullscreen = () => {
        if (videoRef.current) {
            if (!isFullscreen) {
                videoRef.current.requestFullscreen();
            } else {
                document.exitFullscreen();
            }
            setIsFullscreen(!isFullscreen);
        }
    };

    if (!recording) {
        return (
            <Layout>
                <div className="flex h-full w-full max-w-7xl mx-auto text-text dark:text-text-dark">
                    <div className="h-full w-full p-6 space-y-6 bg-background">
                        <div className="text-center">
                            <h1 className="text-2xl font-bold mb-4">Recording not found</h1>
                            <Link to="/recordings/my">
                                <Button variant="outline">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to My Recordings
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto text-text dark:text-text-dark">
                <div className="h-full w-full p-6 space-y-6 bg-background">
                    {/* Back Button */}
                    <div className="flex items-center mb-4">
                        <Button
                            variant="outline"
                            onClick={() => navigate(-1)}
                            className="border-none bg-bg-secondary dark:bg-bg-secondary-dark hover:bg-border/50 dark:hover:bg-border-dark/50"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Video Player */}
                        <div className="lg:col-span-2 space-y-4">
                            <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg dark:bg-bg-dark overflow-hidden">
                                <div className="relative aspect-video bg-black">
                                    <video
                                        ref={videoRef}
                                        src={recording.videoUrl}
                                        poster={recording.thumbnailUrl}
                                        className="w-full h-full object-contain"
                                        onTimeUpdate={handleTimeUpdate}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                    />

                                    {/* Video Controls Overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                        {/* Progress Bar */}
                                        <div
                                            className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer"
                                            onClick={handleSeek}
                                        >
                                            <div
                                                className="h-full bg-primary rounded-full transition-all"
                                                style={{ width: `${(currentTime / duration) * 100}%` }}
                                            />
                                        </div>

                                        {/* Controls */}
                                        <div className="flex items-center justify-between text-white">
                                            <div className="flex items-center space-x-3">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={togglePlay}
                                                    className="text-white hover:bg-white/20 p-2"
                                                >
                                                    {isPlaying ? (
                                                        <Pause className="w-5 h-5" />
                                                    ) : (
                                                        <Play className="w-5 h-5" />
                                                    )}
                                                </Button>

                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    onClick={toggleMute}
                                                    className="text-white hover:bg-white/20 p-2"
                                                >
                                                    {isMuted ? (
                                                        <VolumeX className="w-4 h-4" />
                                                    ) : (
                                                        <Volume2 className="w-4 h-4" />
                                                    )}
                                                </Button>

                                                <span className="text-sm">
                                                    {formatTime(currentTime)} / {formatTime(duration)}
                                                </span>
                                            </div>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                onClick={toggleFullscreen}
                                                className="text-white hover:bg-white/20 p-2"
                                            >
                                                <Maximize className="w-4 h-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>

                            {/* Video Info */}
                            <div className="space-y-4">
                                <div>
                                    <h1 className="text-2xl font-bold mb-2">{recording.title}</h1>
                                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                                        <span className="flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            {recording.views.toLocaleString()} views
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            {getTime(recording.createdAt)}
                                        </span>
                                        <Badge variant="secondary" className="text-xs">
                                            <Clock className="w-3 h-3 mr-1" />
                                            {recording.duration.split(":")[0] === "00"
                                                ? recording.duration.split(":")[1] + ":" + recording.duration.split(":")[2]
                                                : recording.duration}
                                        </Badge>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex items-center space-x-3">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-none bg-bg-secondary dark:bg-bg-secondary-dark hover:bg-border/50 dark:hover:bg-border-dark/50"
                                        >
                                            <Heart className="w-4 h-4 mr-2" />
                                            Like
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-none bg-bg-secondary dark:bg-bg-secondary-dark hover:bg-border/50 dark:hover:bg-border-dark/50"
                                        >
                                            <Share2 className="w-4 h-4 mr-2" />
                                            Share
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="border-none bg-bg-secondary dark:bg-bg-secondary-dark hover:bg-border/50 dark:hover:bg-border-dark/50"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            Download
                                        </Button>
                                    </div>
                                </div>

                                {/* Description */}
                                <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg-secondary dark:bg-bg-secondary-dark">
                                    <CardContent className="p-4">
                                        <h3 className="font-semibold mb-2">Description</h3>
                                        <p className="text-sm text-muted-foreground">
                                            {recording.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4">
                            {/* Author Info */}
                            <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg dark:bg-bg-dark">
                                <CardContent className="p-4">
                                    <div className="flex items-center space-x-3 mb-3">
                                        <Avatar className="w-10 h-10">
                                            <AvatarImage src="/placeholder.svg" alt="Author" />
                                            <AvatarFallback className="bg-gray-200 text-text">
                                                {user?.fullName.split(" ").map((n) => n[0]).join("")}
                                            </AvatarFallback>
                                        </Avatar>
                                        <div>
                                            <h4 className="font-semibold">{user?.fullName}</h4>
                                            <p className="text-xs text-muted-foreground">Creator</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="w-full border-none bg-bg-secondary dark:bg-bg-secondary-dark hover:bg-border/50 dark:hover:bg-border-dark/50"
                                    >
                                        <User className="w-4 h-4 mr-2" />
                                        View Profile
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Recording Details */}
                            <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg dark:bg-bg-dark">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-3">Recording Details</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Duration:</span>
                                            <span>{recording.duration.split(":")[0] === "00"
                                                ? recording.duration.split(":")[1] + ":" + recording.duration.split(":")[2]
                                                : recording.duration}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Views:</span>
                                            <span>{recording.views.toLocaleString()}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Created:</span>
                                            <span>{getTime(recording.createdAt)}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Visibility:</span>
                                            <Badge variant={recording.isPublic ? "default" : "secondary"} className="text-xs">
                                                {recording.isPublic ? "Public" : "Private"}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Comments Section */}
                            <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg dark:bg-bg-dark">
                                <CardContent className="p-4">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="font-semibold">Comments</h3>
                                        <MessageSquare className="w-4 h-4 text-muted-foreground" />
                                    </div>
                                    <p className="text-sm text-muted-foreground text-center py-4">
                                        No comments yet. Be the first to comment!
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default VideoPreviewPage
