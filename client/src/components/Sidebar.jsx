import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "../components/ui/sidebar"
import { Link } from "react-router-dom"
import { House, Plus, FolderOpen, Captions, User, Settings } from "lucide-react"

const mainNavItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: House,
    },
    {
        title: "New Recording",
        url: "/dashboard/record",
        icon: Plus,
    },
    {
        title: "My Recordings",
        url: "/dashboard/recordings",
        icon: FolderOpen,
    },
    {
        title: "AI Transcription",
        url: "/dashboard/analytics",
        icon: Captions,
    }
]

const accountItems = [
    {
        title: "Profile",
        url: "/dashboard/profile",
        icon: User,
    },
    {
        title: "Settings",
        url: "/dashboard/settings",
        icon: Settings,
    },
]

const AppSidebar = () => {
    return (
        <Sidebar className="border-r border-accent bg-background text-text p-1">
            <SidebarHeader className="p-6">
                <Link href="/dashboard" className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                        {/* <Video className="h-5 w-5 text-white" /> */}
                    </div>
                    <div>
                        <h2 className="text-lg font-bold gradient-text">Recordit</h2>
                        <p className="text-xs text-muted-foreground">Professional Recording</p>
                    </div>
                </Link>
            </SidebarHeader>

            <SidebarContent className="flex flex-col items-center">
                <SidebarGroup >
                    <SidebarGroupLabel className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent >
                        <SidebarMenu>
                            {mainNavItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="h-11 px-3 font-medium hover:bg-accent/50">
                                        <Link to={item.url}>
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <div className="w-full px-2">
                    <SidebarSeparator className="bg-accent w-full mx-0" />
                </div>
                <SidebarGroup>
                    <SidebarGroupLabel className="text-xs font-semibold text-text-secondary uppercase tracking-wider">
                        Account
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {accountItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="h-11 px-3 font-medium hover:bg-accent/50">
                                        <Link to={item.url}>
                                            <item.icon className="h-5 w-5" />
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar >
    )
}

export default AppSidebar