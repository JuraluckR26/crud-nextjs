'use client'
import React, { createContext, useState, ReactNode } from "react";

const InitialValue = { 
    isCollaps: false,
    toggleSiderCollapsProvider: () => {},
}

export const SidebarContext = createContext(InitialValue)

interface Props {
    children: ReactNode | ReactNode[]
}

const SidebarProvider = ({children: Props}) => {
    const [isCollapsSidebar, setIsCollapsSidebar] = useState(false)

    const toggleSiderCollapsProvider = () => {
        setIsCollapsSidebar((prev)  => !prev)
    }

    return (
        <SidebarContext.Provider 
            value={{ isCollapsSidebar, toggleSiderCollapsProvider }}
        >{children}</SidebarContext.Provider>
    )

}

export default SidebarProvider