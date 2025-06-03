import React from 'react'
import { Button } from "@/components/ui/button";

const App = () => {

    const setTheme = (theme) => {
        document.documentElement.classList.toggle('dark');
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background">
            <Button className="bg-primary text-text dark:text-background hover:cursor-pointer" onClick={() => setTheme('dark')}>
                Click Me
            </Button>
            <div className="w-full justify-center text-center h-screen text-text">App</div>
        </div>
    )
}

export default App;