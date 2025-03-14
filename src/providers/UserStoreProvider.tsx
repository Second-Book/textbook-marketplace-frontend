"use client"

import { createContext, ReactNode, useEffect, useRef } from "react";
import { createUserStore } from "@/stores/userStore";
import { UserDataType } from "@/utils/types";

export type UserStoreApi = ReturnType<typeof createUserStore>

export const UserStoreContext = createContext<UserStoreApi | undefined>(undefined)

interface userStoreProviderProps {
    children: ReactNode
}

const UserStoreProvider = ({children, }: userStoreProviderProps) => {
    const userRef = useRef<UserStoreApi>(null)
    if (!userRef.current) {
        userRef.current = createUserStore()
    }

    useEffect(() => {
      userRef.current?.setState({
        isAuthenticated: !!localStorage.getItem("access_token"),
        user: localStorage.getItem('user_data') ? JSON.parse(localStorage.getItem('user_data')!) as UserDataType : null
    })
    }, [])
    
    return (
        <UserStoreContext.Provider value={userRef.current}>
            {children}
        </UserStoreContext.Provider>
    )
}

export default UserStoreProvider