import React, { useState } from 'react'
import { SidebarProvider } from '../components/ui/sidebar'
import AppSidebar from '../components/Sidebar'
import Header from '../components/Header'

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(true)
    return (
        <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex min-h-screen w-full bg-bg dark:bg-bg-dark text-text dark:text-text-dark">
                <AppSidebar />
                <div className="flex flex-col flex-1 h-full w-full bg-bg dark:bg-bg-dark">
                    <Header isOpen={isOpen} />
                    <main className="flex w-full h-full mt-16">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Layout