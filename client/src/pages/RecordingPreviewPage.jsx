import React from 'react'
import Layout from "../components/Layout"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"
import { Play, Eye, Calendar, Heart, Share2, Download, Volume2, Maximize, FileText, Copy, MoreHorizontal, Edit3, Trash2 } from "lucide-react"

const RecordingPreviewPage = () => {
    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto text-text dark:text-text-dark">
                <div className="h-full w-full p-6 space-y-6 bg-background">
                    <div className="text-start">
                        <h1 className="text-3xl font-bold mb-2">Team Meeting</h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Video Player */}
                        <div className="lg:col-span-2 space-y-4">
                            <div className="relative aspect-video bg-black rounded-md">
                                {/* <video
                                        ref={videoRef}
                                        src={recording.videoUrl}
                                        poster={recording.thumbnailUrl}
                                        className="w-full h-full object-contain"
                                        onTimeUpdate={handleTimeUpdate}
                                        onLoadedMetadata={handleLoadedMetadata}
                                        onPlay={() => setIsPlaying(true)}
                                        onPause={() => setIsPlaying(false)}
                                    /> */}

                                {/* Video Controls Overlay */}
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t rounded-md from-black/80 to-transparent p-4">
                                    {/* Progress Bar */}
                                    <div className="w-full h-2 bg-white/20 rounded-full mb-3 cursor-pointer">
                                        <div className="h-full bg-primary rounded-full transition-all" />
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center justify-between text-white">
                                        <div className="flex items-center space-x-3">
                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-white cursor-pointer p-2"
                                            >
                                                <Play className="w-5 h-5" />
                                            </Button>

                                            <Button
                                                variant="ghost"
                                                size="sm"
                                                className="text-white cursor-pointer p-2"
                                            >

                                                <Volume2 className="w-4 h-4" />
                                            </Button>

                                            <span className="text-sm">
                                                00:00 / 00:05
                                            </span>
                                        </div>

                                        <Button
                                            variant="ghost"
                                            size="sm"
                                            className="text-white cursor-pointer p-2"
                                        >
                                            <Maximize className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="flex md:flex-row flex-col gap-3 items-start md:justfiy-between">
                                <div className="flex-1">
                                    <h1 className="text-2xl font-bold mb-2">Product Demo - Q4 Features</h1>
                                    <div className="grid grid-cols-2 sm:flex items-center space-y-2 space-x-4 text-sm text-muted-foreground">
                                        <div className="flex items-center space-x-2">
                                            <Avatar className="w-6 h-6">
                                                <AvatarImage
                                                    src="/placeholder.svg"
                                                />
                                                <AvatarFallback className="bg-primary text-text-dark dark:text-text text-xs">
                                                    {"John Doe"
                                                        .split(" ")
                                                        .map((n) => n[0])
                                                        .join("")}
                                                </AvatarFallback>
                                            </Avatar>
                                            <span className="font-medium">John Doe</span>
                                        </div>
                                        <span className="flex items-center">
                                            <Eye className="w-4 h-4 mr-1" />
                                            156 views
                                        </span>
                                        <span className="flex items-center">
                                            <Calendar className="w-4 h-4 mr-1" />
                                            2 hours ago
                                        </span>
                                        <Badge
                                            variant="default"
                                            className="bg-green-100 text-green-700 h-5 border-0"
                                        >
                                            Public
                                        </Badge>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Button size="sm" className="rounded-full bg-bg-secondary hover:bg-bg-secondary dark:bg-bg-secondary-dark dark:hover:bg-bg-secondary-dark cursor-pointer">
                                        <Download className="w-4 h-4 mr-1" />
                                        Download
                                    </Button>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" className="rounded-full bg-bg-secondary hover:bg-bg-secondary dark:bg-bg-secondary-dark dark:hover:bg-bg-secondary-dark cursor-pointer">
                                                <Share2 className="w-4 h-4 mr-1" />
                                                Share
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-bg border border-border dark:bg-bg-secondary-dark dark:border-none text-text dark:text-text-dark mt-0.5">
                                            <DropdownMenuItem className="hover:bg-bg-secondary dark:hover:bg-bg-secondary-dark hover:cursor-pointer">
                                                <Copy className="w-4 h-4 mr-2" />
                                                Copy Link
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>

                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button size="sm" className="rounded-full bg-bg-secondary hover:bg-bg-secondary dark:bg-bg-secondary-dark dark:hover:bg-bg-secondary-dark cursor-pointer p-0">
                                                <MoreHorizontal className="w-4 h-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-bg border border-border dark:bg-bg-secondary-dark dark:border-none text-text dark:text-text-dark mt-0.5">
                                            <DropdownMenuItem className="hover:bg-bg-secondary dark:hover:bg-bg-secondary-dark hover:cursor-pointer">
                                                <Edit3 className="w-4 h-4 mr-2" />
                                                Edit Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="hover:bg-bg-secondary dark:hover:bg-bg-secondary-dark hover:cursor-pointer text-red-500">
                                                <Trash2 className="w-4 h-4 mr-2" />
                                                Delete
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>

                            {/* Description */}
                            <div>
                                <p className="text-sm text-muted-foreground leading-relaxed">Comprehensive walkthrough of our new Q4 features including the redesigned dashboard, analytics improvements, and enhanced security measures.</p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-4">
                            {/* Recording Details */}
                            <Card className="border border-bg-secondary dark:border-bg-secondary-dark bg-bg dark:bg-bg-dark">
                                <CardContent className="p-4">
                                    <h3 className="font-semibold mb-3">Recording Details</h3>
                                    <div className="space-y-2 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Duration:</span>
                                            <span>00:05</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Views:</span>
                                            <span>100</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Created:</span>
                                            <span>11 days ago</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Visibility:</span>
                                            <Badge variant="default" className="bg-green-100 text-green-700">
                                                Public
                                            </Badge>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <div className="flex w-full">
                                <Button className="w-full border-none rounded-full text-text-dark dark:text-text cursor-pointer">
                                    <FileText className="w-4 h-4 mr-2" />
                                    View Transcription
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default RecordingPreviewPage;