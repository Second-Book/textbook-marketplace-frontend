"use server"

import apiClient from "@/services/api"
import { CredentialsType } from "./types"

export async function signup(credentials: CredentialsType) {
    try {
        const response = await apiClient.post('/signup/', credentials);
        return response.data;
    } catch (error) {
        console.error('Signup failed:', error);
        throw error;
    }
}