"use client";

import { signIn} from 'next-auth/react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from 'next/navigation';
import { useToast } from '@/hooks/use-toast';
import Image from 'next/image';

const formLoginSchema = z.object({
    email: z
      .string()
      .min(1, { message: 'This field has to be filled' })
      .email('Please enter a valid email'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be less than 50 characters')
})

export const LoginForm = () => {
    const router = useRouter();
    const { toast } = useToast();

    const formLogin = useForm<z.infer<typeof formLoginSchema>>({
        resolver: zodResolver(formLoginSchema),
        defaultValues: {
          email: '',
          password: '',
        },
    })

    async function onLoginSubmit(values: z.infer<typeof formLoginSchema>) {
        const result = await signIn('credentials', {
          redirect: false,
          username: values.email,
          password: values.password
        })

        if (!result?.ok) {
            toast({
                variant: "destructive",
                title: "Error",
                description: result?.error,
            })
            return
        }

        router.replace('/');
    }

    const handleGoogleSignIn = async () => {
        await signIn('google', {
            callbackUrl: 'http://localhost:3000'
        })
    }

    const handleAppleSignIn = async () => {
        toast({
            description: "Coming soon!"
        })
    }

    return (
        <Card>
            <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
                Enter your credentials to access your account
            </CardDescription>
            </CardHeader>
            <Form {...formLogin}>
                <form onSubmit={formLogin.handleSubmit(onLoginSubmit)} className="space-y-2">
                    <CardContent className="space-y-2">
                        <FormField
                            control={formLogin.control}
                            name="email"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                <Input placeholder="name@example.com" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                        <FormField
                            control={formLogin.control}
                            name="password"
                            render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                <Input type="password" placeholder="Enter Password" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                            )}
                        />
                    </CardContent>
                    <CardFooter>
                        <Button type="submit" className="w-full">Submit</Button>
                    </CardFooter>
                </form>
            </Form>
            <CardContent className='space-y-2'>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                        Or continue with
                    </span>
                    </div>
                </div>

            </CardContent>
            <CardFooter className='gap-2'>
                <Button variant="outline" onClick={() => handleGoogleSignIn()} className="w-full">
                    <Image src="/icons/google-icon.svg" alt="" width={22} height={22} className="cursor-pointer"/> Google
                </Button>
                <Button variant="outline" onClick={() => handleAppleSignIn()} className="w-full">
                    <Image src="/icons/apple-icon.svg" alt="" width={22} height={22} className="cursor-pointer"/> Apple
                </Button>
            </CardFooter>
        </Card>
    )
}