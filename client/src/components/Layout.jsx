import React, { useState } from 'react'
import { SidebarProvider } from '../components/ui/sidebar'
import AppSidebar from '../components/Sidebar'
import Header from '../components/Header'

const Layout = ({ children }) => {

    const [isOpen, setIsOpen] = useState(false)
    return (
        <SidebarProvider open={isOpen} onOpenChange={setIsOpen}>
            <div className="flex min-h-screen w-full bg-gray-50">
                <AppSidebar />
                <div className="flex flex-col flex-1 h-full w-full">
                    <Header isOpen={isOpen} />
                    <main className="flex w-full h-full">{children}</main>
                </div>
            </div>
        </SidebarProvider>
    )
}

export default Layout