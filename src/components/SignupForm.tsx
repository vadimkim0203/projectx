"use client";

import axios from 'axios';
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useToast } from '@/hooks/use-toast';

const formRegisterSchema = z.object({
    name: z
      .string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .regex(/^[a-zA-Z ]+$/, 'No special character allowed'),
    email: z
      .string()
      .min(1, { message: 'This field has to be filled' })
      .email('Please enter a valid email'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be less than 50 characters'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(50, 'Password must be less than 50 characters'),
}).refine((data) => data.password === data.confirmPassword, {
    message: 'Password and confirm password does not match',
    path: ['confirmPassword']
})


export const SignupForm = () => {
    const { toast } = useToast();

    const formRegister = useForm<z.infer<typeof formRegisterSchema>>({
        resolver: zodResolver(formRegisterSchema),
        defaultValues: {
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        },
    })

    async function onRegisterSubmit(values: z.infer<typeof formRegisterSchema>) {
        const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL
        const result = await axios.post(`${BACKEND_URL}/api/user/signup`, {
            name: values.name,
            email: values.email.toLowerCase(),
            password: values.password
        }).catch((e) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: e.response.data,
            })
        })

        if (result) {
            toast({
                title: "Success",
                description: "Please verify your email",
            })
        }

        formRegister.reset({ name: '', email: '', password: '', confirmPassword: ''})
    }

    return (
        <Card>
            <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>
                Enter your email below to create your account
            </CardDescription>
            </CardHeader>
            <Form {...formRegister}>
            <form onSubmit={formRegister.handleSubmit(onRegisterSubmit)} className="space-y-2">
                <CardContent className="space-y-2">
                <FormField
                    control={formRegister.control}
                    name="name"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                        <Input placeholder="John Smith" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                    )}
                />
                <FormField
                    control={formRegister.control}
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
                    control={formRegister.control}
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
                <FormField
                    control={formRegister.control}
                    name="confirmPassword"
                    render={({ field }) => (
                    <FormItem>
                        <FormLabel>Confirm Password</FormLabel>
                        <FormControl>
                        <Input type="password" placeholder="Confirm Password" {...field} />
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
    );
}