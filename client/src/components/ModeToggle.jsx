import { Button } from "@/components/ui/button"
import { Sun, Moon } from "lucide-react"
import { useState } from "react"

const ModeToggle = () => {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");

    document.documentElement.className = theme === "dark" ? "dark" : "";

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        if (newTheme === "dark") {
            document.documentElement.className = "dark";
        } else {
            document.documentElement.className = "";
        }

        localStorage.setItem("theme", newTheme);
    }

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="w-9 h-9 p-0 hover:cursor-pointer hover:bg-transparent"
        >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

export default ModeToggle