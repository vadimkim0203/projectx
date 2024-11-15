import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from 'axios';

const authOptions : AuthOptions = {
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

                if (!user.data.emailVerified) {
                    return null;
                }

                return user.data;
            }
        })
    ]
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};