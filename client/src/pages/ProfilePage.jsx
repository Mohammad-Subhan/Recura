import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Layout from "../components/Layout"
import { User, Camera, Save, Shield, Video } from "lucide-react"

const ProfilePage = () => {
    return (
        <Layout>
            <div className="flex h-full w-full max-w-6xl mx-auto">
                <div className="h-full w-full p-6 space-y-6 bg-background text-text">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
                        <p className="text-muted-foreground">Manage your account information and preferences</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Profile Overview */}
                        <Card className="border-0 bg-white/60 backdrop-blur-sm h-fit">
                            <CardHeader>
                                <CardTitle>Profile Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Avatar Section */}
                                <div className="text-center">
                                    <div className="relative inline-block">
                                        <Avatar className="w-24 h-24">
                                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white text-2xl">
                                                JD
                                            </AvatarFallback>
                                        </Avatar>
                                        <Button
                                            size="sm"
                                            className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-accent hover:bg-accent-hover hover:cursor-pointer"
                                        >
                                            <Camera className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <h3 className="text-lg font-semibold mt-4">John Doe</h3>
                                    <p className="text-sm text-muted-foreground">john@example.com</p>
                                </div>

                                {/* Quick Stats */}
                                <div className="space-y-3 pt-4 border-t border-accent">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-sm">
                                            <Video className="w-4 h-4 mr-2 text-primary" />
                                            Recordings
                                        </div>
                                        <span className="font-semibold">24</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Profile Form */}
                        <div className="lg:col-span-2 space-y-6">
                            <Card className="border-0 bg-white/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <User className="w-5 h-5 mr-2" />
                                        Personal Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <div>
                                            <Label htmlFor="firstName">First Name</Label>
                                            <Input id="firstName" defaultValue="John" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                        </div>
                                        <div>
                                            <Label htmlFor="lastName">Last Name</Label>
                                            <Input id="lastName" defaultValue="Doe" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                        </div>
                                    </div>

                                    <div>
                                        <Label htmlFor="email">Email Address</Label>
                                        <Input id="email" type="email" defaultValue="john@example.com" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                    </div>

                                    <div>
                                        <Label htmlFor="phone">Phone Number</Label>
                                        <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                    </div>

                                    <div>
                                        <Label htmlFor="location">Location</Label>
                                        <Input id="location" defaultValue="San Francisco, CA" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                    </div>

                                    <div>
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea
                                            id="bio"
                                            placeholder="Tell us about yourself..."
                                            className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary"
                                            rows={4}
                                            defaultValue="Product designer and content creator passionate about creating engaging tutorials and demos."
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-white/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="w-5 h-5 mr-2" />
                                        Account Security
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        <Input id="currentPassword" type="password" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                    </div>

                                    <div>
                                        <Label htmlFor="newPassword">New Password</Label>
                                        <Input id="newPassword" type="password" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                    </div>

                                    <div>
                                        <Label htmlFor="confirmPassword">Confirm New Password</Label>
                                        <Input id="confirmPassword" type="password" className="mt-1 border-accent focus-visible:ring-0 focus-visible:border-primary" />
                                    </div>

                                    <div className="pt-4 border-t">
                                        <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                                        <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                                        <Button variant="outline" className="border-accent hover:cursor-pointer">Enable 2FA</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-white/60 backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle>Account Information</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div>
                                            <Label className="text-muted-foreground">Member Since</Label>
                                            <p className="font-medium">January 15, 2024</p>
                                        </div>
                                        <div>
                                            <Label className="text-muted-foreground">Plan</Label>
                                            <p className="font-medium">Pro Plan</p>
                                        </div>
                                        <div>
                                            <Label className="text-muted-foreground">Storage Used</Label>
                                            <p className="font-medium">2.1 GB / 100 GB</p>
                                        </div>
                                        <div>
                                            <Label className="text-muted-foreground">Next Billing</Label>
                                            <p className="font-medium">February 15, 2024</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Save Button */}
                            <div className="flex justify-end space-x-4">
                                <Button variant="outline" className="border-accent hover:cursor-pointer">Cancel</Button>
                                <Button className="bg-gradient-to-r text-white from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer">
                                    <Save className="w-4 h-4" />
                                    Save Changes
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ProfilePage