"use client"

import Image from "next/image"
import { useRouter } from "next/navigation";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



import { signOut, useSession } from "next-auth/react";

const NavIcons = () => {
  const { data: session } = useSession();

  const [isCartOpen, setIsCartOpen] = useState(false)

  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false);

  const router = useRouter()

  const handleLogout = async () => {
    const result = await signOut();
  }

  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <DropdownMenu>
        <DropdownMenuTrigger>
          
            <Avatar>
              {session && session.user ? (
                <>
                  <AvatarImage src={session.user.image!} />
                  <AvatarFallback>{session.user.name?.trim().split(' ').slice(0, 2).map(word => word[0].toUpperCase()).join('')}</AvatarFallback>
                </>
              ) : (
                <AvatarImage src="/icons/profile.png" />
              )}
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mt-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)]" onCloseAutoFocus={(e) => e.preventDefault()}>
          {session && session.user ? (
            <>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => router.push('/profile')}>Profile</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setIsLogoutDialogOpen(true)}>
                Logout
              </DropdownMenuItem>
            </>
          ) : (
            <DropdownMenuItem onClick={() => router.push('/login')}>Login</DropdownMenuItem>
          )}
        </DropdownMenuContent>

        <AlertDialog open={isLogoutDialogOpen} onOpenChange={setIsLogoutDialogOpen}>
          {/* <AlertDialogTrigger>Open</AlertDialogTrigger> */}
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Logout</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to logout?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => setIsLogoutDialogOpen(false)}>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => handleLogout()}>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
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