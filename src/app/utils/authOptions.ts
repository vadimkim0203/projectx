import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import axios from 'axios';

export const authOptions : AuthOptions = {
    pages: {
        signIn: '/login',
        signOut: '/login'
    },
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'username'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },
            async authorize(credentials) {
                const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL

                const result = await axios.post(`${BACKEND_URL}/api/user/login`, {
                    email: credentials?.username,
                    password: credentials?.password
                }).catch((e) => {
                    throw new Error(e.response.data)
                })

                if (!result.data.emailVerified) throw new Error('Please verify your email');

                return result.data;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }) {
            if (account?.provider === 'google') {
                const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

                try {
                    // Send a request to your backend to store user data
                    await axios.post(`${BACKEND_URL}/api/user/signup-google`, {
                        email: user.email,
                        name: user.name,
                        image: user.image,
                    });
                } catch (error) {
                    console.error('Error storing Google user in DB:', error);
                    return false; // Reject sign-in on failure
                }
            }
            return true;
        }
    }
}