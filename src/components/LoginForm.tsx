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
        router.push('/')
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
                <Button type="submit">Submit</Button>
                </CardFooter>
            </form>
            </Form>
        </Card>
    )
}