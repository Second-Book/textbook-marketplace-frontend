"use client"

import useUserStore from '@/hooks/useUserStore'
import Link from 'next/link'

const Navbar = () => {
    const { isAuthenticated, logout } = useUserStore((state) => state)

    return (
        <header className="flex sticky top-0 z-2 justify-between items-center w-full text-white bg-rose-800">
            <div className="flex items-center justify-start">
                <Link href="/textbooks" className="text-xl sm:text-2xl font-bold px-4 leading-none">EduMarket</Link>
            </div>
            <nav className="flex text-lg sm:text-xl leading-tight justify-center">
                {!isAuthenticated && <Link href="/login" className="focus:outline-none px-5 py-3 focus:ring-2 focus:ring-white hover:bg-rose-900">Sign In</Link>}
                {!isAuthenticated && <Link href="/signup" className="focus:outline-none px-5 py-3 focus:ring-2 focus:ring-white hover:bg-rose-900">Sign Up</Link>}
                {isAuthenticated && <Link href="/profile" className="focus:outline-none px-5 py-3 focus:ring-2 focus:ring-white hover:bg-rose-900">Profile</Link>}
                {isAuthenticated && <button onClick={() => logout()} className="focus:outline-none px-5 py-3 focus:ring-2 focus:ring-white cursor-pointer hover:bg-rose-900">Logout</button>}
            </nav>
        </header>
    )
}

export default Navbar