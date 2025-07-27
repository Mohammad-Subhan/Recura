import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { Separator } from "../components/ui/separator"
import Layout from "../components/Layout"
import { User, Camera, Save, Shield, Video, Edit, KeyRound, Download, AlertTriangle, Trash2 } from "lucide-react"
import { useState } from "react"

const ProfileSettingsPage = () => {

    const [isEditing, setIsEditing] = useState(false);
    const [isPasswordEditing, setIsPasswordEditing] = useState(false);
    const [passMatch, setPassMatch] = useState(true);
    const [profileData, setProfileData] = useState({
        fullName: "",
        email: "",
        location: "",
    });
    const [newProfileData, setNewProfileData] = useState({
        fullName: "",
        location: "",
    });
    const [password, setPassword] = useState({
        current: "",
        new: "",
        confirm: "",
    });

    const handleProfileSave = () => {
        setIsEditing(false);
        setProfileData({
            ...profileData,
            ...newProfileData
        });
        setNewProfileData({
            fullName: "",
            email: "",
            location: "",
        });
        return;
    }

    const handlePasswordChange = () => {
        setIsPasswordEditing(false);
        setPassword({
            current: "",
            new: "",
            confirm: ""
        })
        return;
    }

    const handleConfirmPassChange = (e) => {
        if (e.target.value === password.new) {
            setPassMatch(true);
        } else {
            setPassMatch(false);
        }
        setPassword({ ...password, confirm: e.target.value });
    }

    return (
        <Layout>
            <div className="flex h-full w-full max-w-6xl mx-auto text-text dark:text-text-dark">
                <div className="h-full w-full p-6 space-y-6 bg-background">
                    {/* Header */}
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Profile Settings</h1>
                        <p className="text-muted-foreground">Manage your account information and preferences</p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-6">
                        {/* Profile Overview */}
                        <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm h-fit">
                            <CardHeader>
                                <CardTitle>Profile Overview</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {/* Avatar Section */}
                                <div className="text-center">
                                    <div className="relative inline-block">
                                        <Avatar className="w-24 h-24">
                                            <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
                                            <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-text-dark dark:text-text text-2xl">
                                                JD
                                            </AvatarFallback>
                                        </Avatar>
                                        <Button
                                            size="sm"
                                            className="absolute -bottom-2 -right-2 rounded-full w-8 h-8 p-0 bg-bg-secondary dark:bg-border-dark hover:bg-accent-hover hover:cursor-pointer"
                                        >
                                            <Camera className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    <h3 className="text-lg font-semibold mt-4">{profileData.fullName === "" ? "-" : profileData.fullName}</h3>
                                    <p className="text-sm text-text/80 dark:text-text-placeholder-dark">{profileData.email === "" ? "-" : profileData.email}</p>
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
                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <User className="w-5 h-5 mr-2" />
                                        Personal Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="fullName">Full Name</Label>
                                        {isEditing ?
                                            <Input id="fullName" value={newProfileData.fullName} onChange={(e) => setNewProfileData({ ...newProfileData, fullName: e.target.value })} placeholder="e.g. John Doe" className="mt-1 border-border dark:border-border-dark focus-visible:ring-0 focus-visible:border-primary" />
                                            : <p className="text-sm text-text/90 dark:text-text-placeholder-dark">{profileData.fullName === "" ? "-" : profileData.fullName}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="location">Location</Label>
                                        {isEditing ? <Input id="location" value={newProfileData.location} onChange={(e) => setNewProfileData({ ...newProfileData, location: e.target.value })} placeholder="e.g. New York, USA" className="mt-1 border-border dark:border-border-dark focus-visible:ring-0 focus-visible:border-primary" /> : <p className="text-sm text-text/90 dark:text-text-placeholder-dark">{profileData.location === "" ? "-" : profileData.location}</p>}
                                    </div>

                                    {/* Save Button */}
                                    <div className="flex justify-end space-x-4">
                                        {isEditing ?
                                            <>
                                                <Button variant="outline" onClick={() => { setIsEditing(false); setNewProfileData({ ...profileData }) }} className="border-border dark:border-border-dark rounded-full hover:cursor-pointer">Cancel</Button>
                                                <Button className="bg-gradient-to-r text-text-dark dark:text-text from-primary to-secondary rounded-full hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer" onClick={handleProfileSave}>
                                                    <Save className="w-4 h-4" />
                                                    Save Changes
                                                </Button>
                                            </> :
                                            <Button onClick={() => {
                                                setIsEditing(true);
                                                setNewProfileData({
                                                    ...profileData
                                                });
                                            }} className="bg-gradient-to-r text-text-dark dark:text-text rounded-full from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer">
                                                <Edit className="w-4 h-4" />
                                                Edit Profile
                                            </Button>
                                        }
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        <Shield className="w-5 h-5 mr-2" />
                                        Account Security
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="currentPassword">Current Password</Label>
                                        {isPasswordEditing ?
                                            <Input id="currentPassword" type="password" className="mt-1 border-border dark:border-border-dark focus-visible:ring-0 focus-visible:border-primary" value={password.current} onChange={(e) => setPassword({ ...password, current: e.target.value })} />
                                            : <Input id="currentPassword" type="password" value="" className="mt-1 border-none dark:placeholder:text-text-dark shadow-none placeholder:text-text  focus-visible:ring-0 focus-visible:border-primary p-0" placeholder="********" disabled />}
                                    </div>

                                    {isPasswordEditing &&
                                        <>
                                            <div className="space-y-2">
                                                <Label htmlFor="newPassword">New Password</Label>
                                                <Input id="newPassword" type="password" className="mt-1 border-border dark:border-border-dark focus-visible:ring-0 focus-visible:border-primary" value={password.new} onChange={(e) => setPassword({ ...password, new: e.target.value })} />
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="confirmPassword">Confirm New Password {!passMatch && <p className="text-red-500 text-xs">Password do not match</p>}</Label>
                                                <Input id="confirmPassword" type="password" className={`mt-1 focus-visible:ring-0 ${!passMatch ? "border-red-500 focus-visible:border-red-500" : "border-border dark:border-border-dark focus-visible:border-primary"}`} value={password.confirm} onChange={handleConfirmPassChange} />
                                            </div>
                                        </>
                                    }

                                    {/* Save Button */}
                                    <div className="flex justify-end space-x-4">
                                        {isPasswordEditing ?
                                            <>
                                                <Button variant="outline" onClick={() => {
                                                    setIsPasswordEditing(false);
                                                    setPassword({
                                                        current: "",
                                                        new: "",
                                                        confirm: ""
                                                    });
                                                    setPassMatch(true);
                                                }} className="border-border dark:border-border-dark rounded-full hover:cursor-pointer">Cancel</Button>
                                                <Button className="bg-gradient-to-r text-text-dark dark:text-text from-primary to-secondary rounded-full hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer" onClick={handlePasswordChange}>
                                                    <Save className="w-4 h-4" />
                                                    Save Password
                                                </Button>
                                            </> :
                                            <Button onClick={() => setIsPasswordEditing(true)} className="bg-gradient-to-r text-text-dark dark:text-text rounded-full from-primary to-secondary hover:from-primary-hover hover:to-secondary-hover hover:cursor-pointer">
                                                <KeyRound className="w-4 h-4" />
                                                Change Password
                                            </Button>
                                        }
                                    </div>

                                    <div className="pt-4 mt-4 flex items-center justify-between border-t border-border dark:border-border-dark">
                                        <div>
                                            <h4 className="font-medium mb-2">Two-Factor Authentication</h4>
                                            <p className="text-sm text-muted-foreground mb-3">Add an extra layer of security to your account</p>
                                        </div>
                                        <Button variant="outline" className="border-none bg-primary text-text-dark dark:text-text dark:border-border-dark rounded-full hover:cursor-pointer">Enable 2FA</Button>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
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
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Storage & Data */}
                            <Card className="border-0 bg-bg dark:bg-bg-secondary-dark backdrop-blur-sm">
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
                                        <Button variant="destructive" size="sm" className="bg-red-700 hover:bg-red-600 hover:cursor-pointer rounded-full">
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            Delete All Recordings
                                        </Button>
                                    </div>

                                    <Separator className="bg-red-200 dark:bg-red-800" />

                                    <div className="space-y-2">
                                        <h4 className="font-medium text-red-700 dark:text-red-400">Delete Account</h4>
                                        <p className="text-sm text-red-600 dark:text-red-300">
                                            Permanently delete your account and all associated data.
                                        </p>
                                        <Button variant="destructive" size="sm" className="rounded-full bg-red-700 hover:bg-red-600 hover:cursor-pointer">
                                            <Trash2 className="w-4 h-4 mr-1" />
                                            Delete Account
                                        </Button>
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

export default ProfileSettingsPage;