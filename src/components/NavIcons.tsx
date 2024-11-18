"use client"

import Image from "next/image"
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useSession } from "next-auth/react";

const NavIcons = () => {
  const { data: session } = useSession();

  const [isCartOpen, setIsCartOpen] = useState(false)

  const router = useRouter()

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <DropdownMenu>
        <DropdownMenuTrigger><Image src="/icons/profile.png" alt="" width={22} height={22} className="cursor-pointer"/></DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]" onCloseAutoFocus={(e) => e.preventDefault()}>
          {session && session.user ? (
            <>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/profile')}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => router.push('/api/auth/signout')}>Logout</DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem onClick={() => router.push('/login')}>Login</DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <Image src="/icons/notification.png" alt="" width={22} height={22} className="cursor-pointer"/>

      <div className='relative cursor-pointer' onClick={() => setIsCartOpen((prev) => !prev)}>
        <Image src="/icons/cart.png" 
          alt="" 
          width={22} 
          height={22} 
          />
        {/* change the color lama later in tailwind css file */}
        <div className='absolute -top-4 -right-4 w-6 h-6 bg-[#f35c7a] rounded-full text-white text-sm flex items-center justify-center'>2</div>
      </div>
      {isCartOpen && <CartModal/>}
    </div>
  )
};

export default NavIcons