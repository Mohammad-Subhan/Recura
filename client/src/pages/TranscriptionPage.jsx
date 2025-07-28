import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Upload, File, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const TranscriptionPage = () => {

    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragOver, setIsDragOver] = useState(false);

    const openFileDialog = () => {
        const fileInput = document.querySelector('input[type="file"]');
        fileInput.accept = ".mp4, .mov, .webm";
        fileInput.multiple = false;
        fileInput.click();
        fileInput.onchange = () => {
            const files = fileInput.files;
            if (files.length > 0) {
                // Handle file upload logic here
                setSelectedFile(files[0]);
            }
        }
    }

    const handleDragOver = (e) => {
        e.preventDefault();
        setIsDragOver(true);
    }

    const handleDragLeave = (e) => {
        e.preventDefault();
        setIsDragOver(false);
    }

    const handleDrop = (e) => {
        e.preventDefault();
        setIsDragOver(false);
        const files = e.dataTransfer.files;
        if (files.length > 0) {
            // Handle file upload logic here
            const file = files[0];
            if (file.type === "video/mp4" || file.type === "video/mov" || file.type === "video/webm") {
                setSelectedFile(file);
            }
        }
    }

    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto text-text dark:text-text-dark">
                <div className="flex flex-col h-full w-full p-6 space-y-6">
                    {/* Header */}
                    <div className="text-start w-full">
                        <h1 className="text-xl md:text-3xl font-bold mb-2">AI Transcriptions</h1>
                        <p className="text-sm md:text-md text-muted-foreground">Upload audio or video files to generate accurate transcriptions</p>
                    </div>

                    {/* Upload Section */}
                    <Card className="border-0 bg-white dark:bg-bg-secondary-dark w-full shadow-sm">
                        <CardContent className="p-8">
                            <div
                                className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-200 hover:bg-primary/5 hover:border-primary border-border dark:border-border-dark ${isDragOver ? "bg-primary/10 border-primary" : ""}`}
                                onDragOver={handleDragOver}
                                onDragLeave={handleDragLeave}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    accept="audio/*,video/*"
                                    multiple
                                    className="hidden"
                                />

                                <div className="space-y-4">
                                    <div className="h-14 w-14 md:w-16 md:h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                                        <Upload className="h-6 w-6 md:h-8 md:w-8 text-text-dark dark:text-text" />
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-2">Drop files here or click to upload</h3>
                                        {selectedFile &&
                                            <div className="relative">
                                                <p className="cursor-default rounded-full text-sm text-center bg-bg-secondary dark:bg-border-dark h-fit w-fit p-1 px-2 text-border-dark dark:text-text-dark mb-3">{selectedFile.name}</p>
                                                <div onClick={() => {
                                                    setSelectedFile(null);
                                                    const fileInput = document.querySelector('input[type="file"]');
                                                    if (fileInput) fileInput.value = '';
                                                }} className="absolute -top-1.5 -right-1.5 bg-red-500 rounded-full cursor-pointer p-0.5">
                                                    <X className="h-3 w-3" />
                                                </div>
                                            </div>}
                                        <Button onClick={openFileDialog} className="bg-primary hover:bg-primary/90 text-text-dark dark:text-text text-sm md:text-base rounded-full cursor-pointer">
                                            <File className="w-2 h-2 md:w-4 md:h-4 mr-1" />
                                            Choose Files
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-xs text-muted-foreground">
                                    Maximum file size: 500MB • Supported formats: MP4, MOV, WebM
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    )
}

export default TranscriptionPage;