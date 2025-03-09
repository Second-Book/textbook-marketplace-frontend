"use server"

import { redirect } from "next/navigation"
import apiClient from "@/services/api"

export async function signup(prevState: unknown, formData: FormData)  {
    const data = {
        username: formData.get("username") ? formData.get("username") as string : "",
        email: formData.get("email") ? formData.get("email") as string : "",
        password: formData.get("password") ? formData.get("password") as string : "",
        confirmPassword: formData.get("confirmPassword") ? formData.get("confirmPassword") as string : ""
    }

    if (data.username.trim() === "" || data.email.trim() === "" ||
        data.password.trim() === "" || data.confirmPassword.trim() === "") {
        return { error: "Please fill in all fields." };
    }
    if (data.password !== data.confirmPassword) {
        return { error: "Passwords do not match." as string | undefined };
    }
    try {
        await apiClient.post('signup/', data);
        redirect("/login")
    } catch (error) {
        console.error('Sign up failed:', error);
        return { error: "Sign up failed. Please try again." };
    }
}