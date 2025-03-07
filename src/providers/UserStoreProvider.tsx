"use client"

import { createContext, ReactNode, useRef } from "react";
import { createUserStore } from "@/stores/userStore";

export type UserStoreApi = ReturnType<typeof createUserStore>

export const UserStoreContext = createContext<UserStoreApi | undefined>(undefined)

interface userStoreProviderProps {
    children: ReactNode
}

const UserStoreProvider = ({children, }: userStoreProviderProps) => {
    const userRef = useRef<UserStoreApi>(null)
    if (!userRef.current) {
        userRef.current = createUserStore()
        console.log("created user store")
    }
    return (
        <UserStoreContext.Provider value={userRef.current}>
            {children}
        </UserStoreContext.Provider>
    )
}

export default UserStoreProvider