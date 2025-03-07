import { UserStoreContext } from "@/providers/UserStoreProvider"
import { UserStore } from "@/stores/userStore"
import { useContext } from "react"
import { useStore } from "zustand"

const useUserStore = <T,>(selector: (store: UserStore) => T): T => {
    const userStoreContext = useContext(UserStoreContext)
    if (!userStoreContext) {
        console.log("read user store")
        throw new Error("userStore must be used within a userStoreProvider")
    }
    return useStore(userStoreContext, selector)
}

export default useUserStore
