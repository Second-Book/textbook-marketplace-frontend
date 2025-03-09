import { UserDataType } from "@/utils/types";
import { createStore } from "zustand";

export type UserState = {
    isAuthenticated: boolean;
    user: UserDataType | null
}

export type UserActions = {
    setAuthentication: (isAuthenticated: boolean) => void;
    setUser: (user: UserDataType) => void;
    clearUser: () => void
    logout: () => void
}

export type UserStore = UserState & UserActions;

export const defaultInitState: UserState = {
    isAuthenticated: false,
    user: null
}

export const createUserStore = (initState: UserState = defaultInitState) => {
    return createStore<UserStore>()((set) => ({
        ...initState,
        setAuthentication: (isAuthenticated: boolean) => set(() => ({isAuthenticated: isAuthenticated})),
        setUser: (user: UserDataType) => set(() => {
            localStorage.setItem("user_data", JSON.stringify(user))
            return {user: user}
        }),
        clearUser: () => set(() => {
            localStorage.removeItem("user_data")
            return {isAuthenticated: false}
        }),
        logout: () => set((state) => {
            localStorage.removeItem("access_token")
            localStorage.removeItem("refresh_token")
            state.clearUser()
            return {isAuthenticated: false}
        })
    }))
}