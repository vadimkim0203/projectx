'use client';

import { useToast } from '@/hooks/use-toast';
// import { activateUser } from '@/app/lib/actions/authActions'
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface Props {
    params: {
        id: string,
    }
}
const ActivationPage = ({params}: Props) => {
    // const result = await activateUser(params.id);
    // const result = null;

    const { toast } = useToast();
    const router = useRouter();

    const userId = params.id;

    useEffect(() => {
        const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

        const fetchProductData = async () => {
            await axios.post(`${BACKEND_URL}/api/user/verify/${userId}`).then(function (response) {
            toast({
                title: "Success",
                description: response.data,
            })
            }).catch((e) => {
            toast({
                variant: "destructive",
                title: "Error",
                description: e.response.data,
            })
            })
            router.push('/login')
        }
      
        fetchProductData();
    }, [])

    return (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
        </div>
    )
}

export default ActivationPage