import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Video, Mic, Bell, Shield, Palette, Download, Share2, Trash2, AlertTriangle } from "lucide-react"
import Layout from "../components/Layout"

const SettingsPage = () => {
    return (

        <Layout>
            <div className="flex h-full w-full max-w-6xl mx-auto">
                <div className="h-full w-full p-6 space-y-6 bg-background text-text">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Settings</h1>
                        <p className="text-muted-foreground">Customize your recording experience and account preferences</p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {/* Settings Navigation */}
                        <Card className="border-0 bg-white/60 backdrop-blur-sm md:col-span-1 h-fit">
                            <CardContent className="flex flex-col md:items-center">
                                <nav className="space-y-2">
                                    <Button
                                        variant="ghost"
                                        className="w-full justify-start hover:bg-accent/50 hover:cursor-pointer"
                                    >
                                        <Video className="w-4 h-4 mr-2" />
                                        Recording
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 hover:cursor-pointer">
                                        <Bell className="w-4 h-4 mr-2" />
                                        Notifications
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 hover:cursor-pointer">
                                        <Palette className="w-4 h-4 mr-2" />
                                        Appearance
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 hover:cursor-pointer">
                                        <Shield className="w-4 h-4 mr-2" />
                                        Privacy
                                    </Button>
                                    <Button variant="ghost" className="w-full justify-start hover:bg-accent/50 hover:cursor-pointer">
                                        <Share2 className="w-4 h-4 mr-2" />
                                        Sharing
                                    </Button>
                                </nav>
                            </CardContent>
                        </Card>

                        {/* Settings Content */}
                        <div className="md:col-span-3 space-y-6">
                            {/* Recording Settings */}
                            <Card className="border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Video className="w-5 h-5 mr-2" />
                                        Recording Settings
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="space-y-4">
                                        <h4 className="font-medium">Default Recording Options</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="default-mic">Enable Microphone by Default</Label>
                                                <Switch id="default-mic" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="system-audio">Record System Audio</Label>
                                                <Switch id="system-audio" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="cursor">Show Cursor</Label>
                                                <Switch id="cursor" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="clicks">Highlight Mouse Clicks</Label>
                                                <Switch id="clicks" className="bg-accent data-[state=checked]:bg-primary" />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="webcam">Enable Webcam Overlay</Label>
                                                <Switch id="webcam" className="bg-accent data-[state=checked]:bg-primary" />
                                            </div>
                                        </div>
                                    </div>

                                    <Separator />

                                    <div className="space-y-4">
                                        <h4 className="font-medium">AI Features</h4>
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="auto-transcription">Auto Transcription</Label>
                                                <Switch id="auto-transcription" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="ai-summary">AI Summary Generation</Label>
                                                <Switch id="ai-summary" className="bg-accent data-[state=checked]:bg-primary" />
                                            </div>

                                            <div className="flex items-center justify-between">
                                                <Label htmlFor="auto-chapters">Auto Chapter Detection</Label>
                                                <Switch id="auto-chapters" className="bg-accent data-[state=checked]:bg-primary" />
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Notification Settings */}
                            <Card className="border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Bell className="w-5 h-5 mr-2" />
                                        Notification Preferences
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="email-notifications">Email Notifications</Label>
                                            <Switch id="email-notifications" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="recording-complete">Recording Complete</Label>
                                            <Switch id="recording-complete" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="transcription-ready">Transcription Ready</Label>
                                            <Switch id="transcription-ready" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="storage-alerts">Storage Alerts</Label>
                                            <Switch id="storage-alerts" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="marketing-emails">Marketing Emails</Label>
                                            <Switch id="marketing-emails" className="bg-accent data-[state=checked]:bg-primary" />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Privacy Settings */}
                            <Card className="border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="w-5 h-5 mr-2" />
                                        Privacy & Security
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="default-privacy">Default Recording Privacy</Label>
                                        <Select defaultValue="private">
                                            <SelectTrigger className="mt-1 border-accent hover:cursor-pointer">
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-background border-accent">
                                                <SelectItem value="private" className="hover:bg-accent/50 hover:cursor-pointer">Private</SelectItem>
                                                <SelectItem value="public" className="hover:bg-accent/50 hover:cursor-pointer">Public</SelectItem>
                                                <SelectItem value="unlisted" className="hover:bg-accent/50 hover:cursor-pointer">Unlisted</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>

                                    <div className="space-y-3">
                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="analytics">Allow Analytics Tracking</Label>
                                            <Switch id="analytics" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <Label htmlFor="data-export">Enable Data Export</Label>
                                            <Switch id="data-export" className="bg-accent data-[state=checked]:bg-primary" defaultChecked />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Storage & Data */}
                            <Card className="border-0 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Download className="w-5 h-5 mr-2" />
                                        Storage & Data
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label className="text-sm text-muted-foreground">Storage Used</Label>
                                            <p className="text-lg font-semibold">2.1 GB / 100 GB</p>
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
                                                <div
                                                    className="bg-gradient-to-r from-yellow-500 to-amber-600 h-2 rounded-full"
                                                    style={{ width: "2.1%" }}
                                                ></div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Danger Zone */}
                            <Card className="border-0 bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800">
                                <CardHeader>
                                    <CardTitle className="flex items-center text-red-700 dark:text-red-400">
                                        <AlertTriangle className="w-5 h-5 mr-2" />
                                        Danger Zone
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <h4 className="font-medium text-red-700 dark:text-red-400">Delete All Recordings</h4>
                                        <p className="text-sm text-red-600 dark:text-red-300">
                                            Permanently delete all your recordings. This action cannot be undone.
                                        </p>
                                        <Button variant="destructive" size="sm" className="bg-red-700 hover:bg-red-600 hover:cursor-pointer">
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete All Recordings
                                        </Button>
                                    </div>

                                    <Separator className="bg-red-200 dark:bg-red-800" />

                                    <div className="space-y-2">
                                        <h4 className="font-medium text-red-700 dark:text-red-400">Delete Account</h4>
                                        <p className="text-sm text-red-600 dark:text-red-300">
                                            Permanently delete your account and all associated data.
                                        </p>
                                        <Button variant="destructive" size="sm" className="bg-red-700 hover:bg-red-600 hover:cursor-pointer">
                                            <Trash2 className="w-4 h-4 mr-2" />
                                            Delete Account
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Save Button */}
                            <div className="flex justify-end">
                                <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer text-white">
                                    Save Settings
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    )
}

export default SettingsPage