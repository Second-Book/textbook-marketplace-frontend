"use client"

import Form from 'next/form'
import { redirect } from 'next/navigation'
import useUserStore from '@/hooks/useUserStore'
import authService from '@/services/authService'

const LoginForm = () => {

    const store = useUserStore((state) => state)

    const handleLogin = (formData: FormData) => {
        const credentials = {
            username: formData.get("username") ? formData.get("username") as string : "",
            password: formData.get("password") ? formData.get("password") as string : "",
        }
        const result = authService.login(credentials, store)
        console.log(result)
        redirect("/textbooks")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <div className="bg-white shadow-md rounded p-8 max-w-md w-full mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-blue-900">Login</h2>
                <Form action={handleLogin} className="space-y-4">
                    <div>
                        <label htmlFor="username" className="block text-zinc-400 font-bold mb-2">Username:</label>
                        <input name="username" required className="w-full border border-zinc-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-zinc-500" />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-zinc-400 font-bold mb-2">Password:</label>
                        <input name="password" type="password" required className="w-full border border-zinc-300 rounded py-2 px-4 leading-tight focus:outline-none focus:border-zinc-500" />
                    </div>
                    <button type="submit" className="bg-red-800 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700">Login</button>
                </Form>
                <p v-if="errorMessage" className="text-red-500 mt-2">{"test"}</p>
            </div>
        </div>
    )
}

export default LoginForm