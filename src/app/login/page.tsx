"use client"

import { useState } from "react";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
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
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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


enum MODE {
  LOGIN="LOGIN",
  REGISTER="REGISTER",
  RESET_PASSWORD="RESET_PASSWORD",
  EMAIL_VERIFICATION="EMAIL_VERIFICATION"

}

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { data: session } = useSession();
  const router = useRouter();

  const formLogin = useForm<z.infer<typeof formLoginSchema>>({
    resolver: zodResolver(formLoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

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
    const result = await axios.post('https://projectx-backend-supabase.vercel.app/api/user/signup', {
      name: values.name,
      email: values.email,
      password: values.password
    })

    formRegister.reset({ name: '', email: '', password: '', confirmPassword: ''})
  }

  async function onLoginSubmit(values: z.infer<typeof formLoginSchema>) {
    const result = await signIn('credentials', {
      redirect: false,
      username: values.email,
      password: values.password
    })

    console.log('sss', result)

    formLogin.reset({ email: '', password: '' })
  }

  return isLoading ? (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
    </div>
  ) : (
    <div className="h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 flex mt-28 justify-center">
      {session && session.user ? (
        <div>
          <div>Hello, {session.user.name}</div>
          <button
            className="bg-black text-white p-2 rounded-md disabled:bg-white disabled:cursor-not-allowed"
            onClick={() => router.push('/api/auth/signout')}
          >
            Logout
          </button>
      </div>
      ) : (
        <Tabs defaultValue="login" className="w-[400px]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="register">Register</TabsTrigger>
          </TabsList>
          <TabsContent value="login">
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
          </TabsContent>
          <TabsContent value="register">
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
          </TabsContent>
        </Tabs>
      )}
    </div>
  )
};

export default LoginPage