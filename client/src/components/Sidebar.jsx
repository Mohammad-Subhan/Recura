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
import { Link, useLocation } from "react-router-dom"
import { House, Plus, FolderOpen, Captions, User, Globe, Settings } from "lucide-react"

const mainNavItems = [
    {
        title: "Dashboard",
        url: "/dashboard",
        icon: House,
    },
    {
        title: "New Recording",
        url: "/recording/new",
        icon: Plus,
    },
    {
        title: "My Recordings",
        url: "/recordings/my",
        icon: FolderOpen,
    },
    {
        title: "Community Recordings",
        url: "/recordings",
        icon: Globe,
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

    const location = useLocation();
    const isActive = (path) => location.pathname.endsWith(path);

    return (
        <Sidebar className="border-r border-border dark:border-border-dark bg-bg-secondary dark:bg-bg-secondary-dark dark:text-text-dark text-text p-1">
            <SidebarHeader className="p-6">
                <Link href="/dashboard" className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary dark:from-primary-dark dark:to-secondary-dark rounded-xl flex items-center justify-center">
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
                    <SidebarGroupLabel className="text-xs font-semibold text-text-placeholder dark:text-text-placeholder-dark uppercase tracking-wider">
                        Main
                    </SidebarGroupLabel>
                    <SidebarGroupContent >
                        <SidebarMenu>
                            {mainNavItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className={`h-11 px-3 font-medium rounded-full hover:bg-border/50 dark:hover:bg-border-dark/50 ${isActive(item.url) && "bg-border/20 dark:bg-border-dark/20"}`}>
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
                    <SidebarGroupLabel className="text-xs font-semibold text-text-placeholder dark:text-text-placeholder uppercase tracking-wider">
                        Account
                    </SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {accountItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild className="h-11 px-3 font-medium rounded-full hover:bg-border/50 dark:hover:bg-border-dark/50">
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