'use client'

import Link from 'next/link'
import React from 'react'

import {
  BadgeCheckIcon,
  BellIcon,
  CreditCardIcon,
  LogOutIcon,
  ShoppingCart,
  User,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { signOut, useSession } from 'next-auth/react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { cartResponseType } from '@/api/types/cartType'
import { Spinner } from '@/components/ui/spinner'


export default function Navbar() {

  function handleLogout() {
    signOut({redirect:true, callbackUrl:"/login"})
  }

  const {data:sessionData, status} = useSession()

    const { data: cartData, isLoading, isFetching } = useQuery<cartResponseType>({
      queryKey: ['getCart'],
      queryFn: async () => {
        const res = await fetch("/api/cart")
        if (!res.ok) throw new Error("Faild To Fetch") 

        return res.json()
      },
      enabled: status === "authenticated",
    })

  return <>

    <div className="bg-gray-100/90 text-gray-900 flex flex-col sticky top-0">
      {/* Navbar */}
      <div className="w-full shadow px-4 sm:px-8 py-1 flex flex-col md:flex-row md:items-center justify-around">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-black text-white font-bold w-2.5 h-2.5 p-4 rounded-lg text-lg flex justify-center items-center">
            S
          </div>
          <span className="font-bold text-xl">ShopMart</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex flex-col md:flex-row md:items-center pt-2 md:gap-4 text-sm font-semibold text-gray-800">
          <Link href="/products" className="hover:bg-black rounded-lg py-2 px-3 hover:text-white transition-colors">Products</Link>
          <Link href="/brands" className="hover:bg-black rounded-lg py-2 px-3 hover:text-white transition-colors">Brands</Link>
          <Link href="/categories" className="hover:bg-black rounded-lg py-2 px-3 hover:text-white transition-colors">Categories</Link>
        </nav>


        {/* User Icon desktop */}
        <div className="hidden md:flex items-center">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full"><User style={{ width: '20px', height: '20px' }} className="w-5 h-5 text-gray-800" /></Button>} />
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  

                  {status==="authenticated" ? <>
                  <Link href="/allorders"> <DropdownMenuItem className="cursor-pointer"> Your Orders </DropdownMenuItem></Link>

                  <span onClick={handleLogout}> <DropdownMenuItem variant="destructive" className="cursor-pointer"> Logout </DropdownMenuItem></span>
                  </> : <>
                  <Link href="/login"> <DropdownMenuItem className="cursor-pointer">Login </DropdownMenuItem></Link>
                  <Link href="/register"> <DropdownMenuItem className="cursor-pointer"> Register </DropdownMenuItem></Link>
                  </>}

                  

                </DropdownMenuGroup>
                {/* <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {status==="authenticated" ? <div className="relative ">
            <Link href='/cart'>
              <ShoppingCart size={18} />
            </Link>
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {isFetching ? <Spinner className="size-2" /> : cartData?.numOfCartItems } 
            </span>
          </div> : ""}

          
        </div>

        

        {/* User Icon mobile */}

        <div className="md:hidden flex items-center">
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer transition-colors">
            <DropdownMenu>
              <DropdownMenuTrigger render={<Button variant="ghost" size="icon" className="rounded-full">
                <User style={{ width: '20px', height: '20px' }} className="w-5 h-5 text-gray-800" />
</Button>} />
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>
                    My Account
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  

                  {status==="authenticated" ? <>
                  <Link href="/allorders"> <DropdownMenuItem className="cursor-pointer"> Your Orders </DropdownMenuItem></Link>

                  <Link href="/login"> <DropdownMenuItem variant="destructive" className="cursor-pointer"> Logout </DropdownMenuItem></Link>
                  </> : <>
                  <Link href="/login"> <DropdownMenuItem className="cursor-pointer">Login </DropdownMenuItem></Link>
                  <Link href="/register"> <DropdownMenuItem className="cursor-pointer"> Register </DropdownMenuItem></Link>
                  </>}

                  

                </DropdownMenuGroup>
                {/* <DropdownMenuSeparator />
        <DropdownMenuItem>
          <LogOutIcon />
          Sign Out
        </DropdownMenuItem> */}
              </DropdownMenuContent>
            </DropdownMenu>

          </div>

          {status==="authenticated" ? <div className="relative ">
            <Link href='/cart'>
              <ShoppingCart size={18} />
            </Link>
            <span className="absolute -top-2 -right-2 bg-black text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
              {isFetching ? <Spinner className="size-2" /> : cartData?.numOfCartItems } 
            </span>
          </div> : ""}
        </div>


      </div>


    </div>



  </>
}