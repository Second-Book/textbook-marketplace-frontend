"use client"

import useUserStore from '@/hooks/useUserStore'
import Link from 'next/link'

const Navbar = () => {
    const { isAuthenticated, logout } = useUserStore((state) => state)

    return (
        <header className="flex justify-between items-center px-6 py-4 w-full text-white bg-rose-800">
            <div className="flex items-center justify-start w-full max-w-2xl">
                <Link href="/textbooks" className="text-2xl font-bold leading-none mr-4">EduMarket</Link>
            </div>
            <nav className="flex gap-10 text-xl leading-tight justify-center w-full max-w-2xl">
            {!isAuthenticated && <Link href="/login" className="focus:outline-none focus:ring-2 focus:ring-white">Sign In</Link>}
            {!isAuthenticated && <Link href="/signup" className="focus:outline-none focus:ring-2 focus:ring-white">Sign Up</Link>}
            {isAuthenticated && <Link v-if="isAuthenticated" href="/profile" className="focus:outline-none focus:ring-2 focus:ring-white">Profile</Link>}
            {isAuthenticated && <a onClick={() => logout()} className="focus:outline-none focus:ring-2 focus:ring-white">Logout</a>}
            </nav>
        </header>
    )
}

export default Navbar