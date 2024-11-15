import prisma from "@/lib/prisma";
import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as bcrypt from "bcrypt";
import { User } from "@prisma/client";
import axios from 'axios';

export const authOptions : AuthOptions = {
    pages: {
        signIn: '/login'
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

                const user = await axios.post('https://projectx-backend-supabase.vercel.app/api/user/login', {
                    email: credentials?.username,
                    password: credentials?.password
                })

                console.log('ssssss',user)

                if (!user.data.emailVerified) {
                    console.log('please verify email')
                    return null;
                }

                return user.data;
            }
        })
    ],
    callbacks: {
        async jwt({token, user}) {
            if (user) token.user = user as User;
            return token;
        },
        async session({token, session}) {
            session.user = token.user;
            return session;
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};