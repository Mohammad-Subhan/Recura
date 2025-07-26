import Layout from "../components/Layout"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Label } from "../components/ui/label"
import { Switch } from "../components/ui/switch"
import {
    Play,
    Monitor,
    Settings,
} from "lucide-react"
import { useState } from "react"

const settings = [
    { id: "mic-setting", label: "Microphone" },
    { id: "system-audio", label: "System Audio" },
    { id: "webcam", label: "Webcam Overlay" },
    { id: "cursor", label: "Show Cursor" },
    { id: "clicks", label: "Show Clicks" },
]

const NewRecordingPage = () => {

    const [resolution, setResolution] = useState("1080p");
    const [frameRate, setFrameRate] = useState("30fps");

    return (
        <Layout>
            <div className="flex h-full w-full max-w-7xl mx-auto text-text dark:text-text-dark">
                <div className="h-full w-full p-6 space-y-6 bg-background">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-2">Screen Recording Studio</h1>
                        <p className="text-text-secondary">Record your screen with professional quality and AI-powered features</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Recording Controls */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Main Recording Area */}
                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
                                <CardContent className=" md:p-8">
                                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/30 rounded-xl flex items-center justify-center mb-6 border-2 border-dashed border-primary">
                                        <div className="text-center">
                                            <div className="space-y-4">
                                                <div className="sm:w-20 sm:h-20 w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto">
                                                    <Monitor className="sm:h-10 sm:w-10 w-5 h-5 text-white" />
                                                </div>
                                                <div>
                                                    <p className="sm:text-xl text-sm font-semibold">Ready to Record</p>
                                                    <p className="text-muted-foreground sm:text-sm text-xs">Click start when you're ready</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recording Controls */}
                                    <div className="flex items-center justify-center space-x-4">
                                        <Button
                                            // onClick={startRecording}
                                            className="md:p-5 sm:text-sm text-xs bg-primary hover:bg-primary-hover hover:cursor-pointer text-text-dark dark:text-text shadow-lg hover:shadow-xl transition-all duration-300 rounded-full"
                                        >
                                            <Play className="sm:w-5 sm:h-5 w-2 h-2" />
                                            Start Recording
                                        </Button>
                                    </div>

                                    {/* Audio Controls */}
                                    {/* {isRecording && (
                                        <div className="flex items-center justify-center space-x-6 mt-6 pt-6 border-t border-purple-200 dark:border-purple-800">
                                            <Button
                                                variant={isMicEnabled ? "default" : "outline"}
                                                size="sm"
                                                onClick={toggleMic}
                                                className={isMicEnabled ? "bg-green-600 hover:bg-green-700" : ""}
                                            >
                                                {isMicEnabled ? <Mic className="w-4 h-4 mr-2" /> : <MicOff className="w-4 h-4 mr-2" />}
                                                Microphone
                                            </Button>
                                            <Button
                                                variant={isSystemAudioEnabled ? "default" : "outline"}
                                                size="sm"
                                                onClick={toggleSystemAudio}
                                                className={isSystemAudioEnabled ? "bg-blue-600 hover:bg-blue-700" : ""}
                                            >
                                                {isSystemAudioEnabled ? <Volume2 className="w-4 h-4 mr-2" /> : <VolumeX className="w-4 h-4 mr-2" />}
                                                System Audio
                                            </Button>
                                        </div>
                                    )} */}
                                </CardContent>
                            </Card>
                        </div>

                        {/* Settings Panel */}
                        <div className="space-y-6">
                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Settings className="w-5 h-5 mr-2" />
                                        Recording Settings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    {settings.map((setting) => (
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor={setting.id}>{setting.label}</Label>
                                            <Switch key={setting.id} />
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Quality Settings</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label className="text-sm font-medium">Resolution</Label>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <Button onClick={() => setResolution("1080p")} variant="outline" size="sm" className={`text-xs border-border dark:border-border-dark hover:cursor-pointer ${resolution === "1080p" && "bg-primary text-text-dark dark:text-text"}`}>
                                                1080p
                                            </Button>
                                            <Button onClick={() => setResolution("4K")} variant="outline" size="sm" className={`text-xs border-border dark:border-border-dark hover:cursor-pointer ${resolution === "4K" && "bg-primary text-text-dark dark:text-text"}`}>
                                                4K
                                            </Button>
                                        </div>
                                    </div>

                                    <div>
                                        <Label className="text-sm font-medium">Frame Rate</Label>
                                        <div className="grid grid-cols-2 gap-2 mt-2">
                                            <Button onClick={() => setFrameRate("30fps")} variant="outline" size="sm" className={`text-xs border-border dark:border-border-dark hover:cursor-pointer ${frameRate === "30fps" && "bg-primary text-text-dark dark:text-text"}`}>
                                                30fps
                                            </Button>
                                            <Button onClick={() => setFrameRate("60fps")} variant="outline" size="sm" className={`text-xs border-border dark:border-border-dark hover:cursor-pointer ${frameRate === "60fps" && "bg-primary text-text-dark dark:text-text"}`}>
                                                60fps
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>AI Features</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="transcription">Auto Transcription</Label>
                                        <Switch id="transcription" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="summary">AI Summary</Label>
                                        <Switch id="summary" className="bg-accent data-[state=checked]:bg-primary" />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="chapters">Auto Chapters</Label>
                                        <Switch id="chapters" className="bg-accent data-[state=checked]:bg-primary" />
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default NewRecordingPage