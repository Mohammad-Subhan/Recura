import { Button } from "../components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar"
import { useSidebar } from "../components/ui/sidebar"
import ModeToggle from "./ModeToggle"
import { PanelRightClose, PanelRightOpen, User, CreditCard, Settings, HelpCircle, LogOut } from "lucide-react"

const dropdownMenuItems = [
    {
        icon: User,
        label: "Profile",
    },
    // {
    //     icon: CreditCard,
    //     label: "Billing",
    // },
    {
        icon: Settings,
        label: "Settings",
    },
    // {
    //     icon: HelpCircle,
    //     label: "Support",
    // },
    {
        icon: LogOut,
        label: "Log out",
    },
]

const Header = ({ isOpen }) => {
    const { toggleSidebar } = useSidebar()

    return (
        <header className="fixed top-0 z-50 w-full border-b border-accent bg-background/80 backdrop-blur-md shadow-md">
            <div className="flex h-16 items-center justify-between px-6">
                <div className="flex items-center space-x-4">
                    <Button onClick={toggleSidebar} variant="ghost" size="icon" className="hover:cursor-pointer hover:bg-transparent">
                        {isOpen ? <PanelRightOpen /> : <PanelRightClose />}
                    </Button>
                </div>

                <div className="flex-1 flex items-center justify-center">
                    <h1 className="text-lg font-semibold text-muted-foreground">Recordit</h1>
                </div>

                <div className="flex items-center space-x-4">
                    <ModeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-10 w-10 rounded-full hover:cursor-pointer">
                                <Avatar className="h-10 w-10">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary text-white">
                                        JD
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-background border-accent" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">John Doe</p>
                                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {dropdownMenuItems.map((item, index) => (
                                <DropdownMenuItem key={index} className="hover:cursor-pointer">
                                    <item.icon className="mr-2 h-4 w-4" />
                                    <span>{item.label}</span>
                                </DropdownMenuItem>
                            ))}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    )
}

export default Header