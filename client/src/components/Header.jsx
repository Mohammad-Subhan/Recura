import { Button } from "../components/ui/button"
import { useState, useEffect } from "react"
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
    const { toggleSidebar } = useSidebar();
    const [showHeader, setShowHeader] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    useEffect(() => {
        const handleScroll = () => {
            const currentY = window.scrollY;

            if (Math.abs(currentY - lastScrollY) < 10) return;

            if (currentY > lastScrollY) {
                setShowHeader(false); // moving down
            } else {
                setShowHeader(true); // moving up
            }

            setLastScrollY(currentY);
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <header className={`${!showHeader && "top-[-64px]"} transition-all duration-200 ease-linear fixed top-0 z-50 dark:shadow-border-dark/30 dark:bg-bg-dark/80 bg-bg/80 text-text dark:text-text-dark backdrop-blur-md shadow-md ${isOpen ? 'left-64 right-0' : 'left-0 right-0'}`}>
            <div className="flex h-16 items-center justify-between px-4 sm:px-6 w-full">
                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                    <Button onClick={toggleSidebar} variant="ghost" size="icon" className="hover:cursor-pointer hover:bg-transparent">
                        {isOpen ? <PanelRightOpen /> : <PanelRightClose />}
                    </Button>
                </div>

                <div className="flex-1 flex items-center justify-center min-w-0">
                    <h1 className="text-base sm:text-lg font-semibold text-muted-foreground truncate">Recordit</h1>
                </div>

                <div className="flex items-center space-x-2 sm:space-x-4 flex-shrink-0">
                    <ModeToggle />

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="relative h-8 w-8 sm:h-10 sm:w-10 rounded-full hover:cursor-pointer">
                                <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
                                    <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
                                    <AvatarFallback className="bg-gradient-to-br from-primary to-secondary dark:text-text text-text-dark text-xs sm:text-sm">
                                        JD
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 bg-bg-secondary dark:bg-bg-secondary-dark text-text dark:text-text-dark border-border dark:border-border-dark" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col space-y-1">
                                    <p className="text-sm font-medium leading-none">John Doe</p>
                                    <p className="text-xs leading-none text-muted-foreground">john@example.com</p>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator className="bg-border dark:bg-border-dark h-[0.1px]" />
                            {dropdownMenuItems.map((item, index) => (
                                <DropdownMenuItem key={index} className="hover:cursor-pointer hover:bg-border/20 dark:hover:bg-border-dark/20">
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