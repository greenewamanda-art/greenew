'use client'

import Sidebar from "@/components/sidebar"
import { useState } from "react"
import Header from "./header"

export default function ContentHeader() {
    const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
        <>
            <Header onMenuClick={() => setSidebarOpen(true)} />
            <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
    )
}