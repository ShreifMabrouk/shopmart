"use client"

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { Trash } from 'lucide-react'
import Link from 'next/link'
import { cartResponseType } from '@/api/types/cartType'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import LoadingSpinner from '../loadingSpinner'
import { deleteCartItem } from '@/api/actions/cartActions/deleteCartItem'
import { toast } from '@/components/ui/toast'
import { updateCartItem } from '@/api/actions/cartActions/updateCartItem'
import { clearCartItems } from '@/api/actions/cartActions/clearCartItems'
import { Spinner } from '@/components/ui/spinner'


import CheckoutForm from '../CheckoutForm/CheckoutForm'
import { allOrdersType } from '@/api/types/allOrdersType'


export default function CartComp() {

  const query = useQueryClient()

  const { data: cartData, isLoading } = useQuery<cartResponseType>({
    queryKey: ['getCart'],
    queryFn: async () => {
      const res = await fetch("/api/cart")
      if (!res.ok) throw new Error("Faild To Fetch")

      return res.json()
    }
  })

  console.log(cartData);



  const { data: delCartData, mutate: delCartItem, isPending: delCartPending } = useMutation({
    mutationFn: deleteCartItem,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Product deleted successfully from your cart"
      })
      query.invalidateQueries({ queryKey: ['getCart'] })
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed to delete. Please try again"
      })
    },

  })

  const { data: updCartData, mutate: updCartItem } = useMutation({
    mutationFn: updateCartItem,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Product updated successfully"
      })
      query.invalidateQueries({ queryKey: ['getCart'] })
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Failed to update. Please try again"
      })
    },

  })

  const { data: clCartData, mutate: clCartItem } = useMutation({
    mutationFn: clearCartItems,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "All items cleared successfully"
      })
      query.invalidateQueries({ queryKey: ['getCart'] })
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Clear all failed. Please try again"
      })
    },

  })

  const [deletingId, setdeletingId] = React.useState<string | null>(null)


  function handleUpdateCartItem(prodID: string, count: number) {
    updCartItem({ prodID, count })
  }

  if (isLoading) {
    return <LoadingSpinner />
  }

  return <>

    {cartData?.numOfCartItems ? <div className="min-h-screen bg-white px-4 sm:px-8 py-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
        <p className="text-sm text-gray-500 mt-1">12 items in your cart</p>
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">

        {/* Products List (2 Columns) */}
        <div className="lg:col-span-2 space-y-4">

          {/* Cart Item */}
          {cartData?.data.products.map((product) => <div key={product._id} className="bg-white rounded-xl border border-gray-200 p-4 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex shrink-0">
                <div className="w-full h-full bg-cover bg-center">
                  <Image width={200} height={200} alt={product.product.title} src={product.product.imageCover} ></Image>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">{product.product.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{product.product.brand.name} · {product.product.category.name}</p>
                <div className="flex items-center gap-3 mt-3 border border-gray-200 rounded-lg px-2 py-1 w-max">
                  <Button onClick={() => handleUpdateCartItem(product.product._id, product.count - 1)} className="text-black text-sm cursor-pointer bg-white hover:bg-white">-</Button>
                  <span className="text-sm font-medium text-gray-900">{product.count}</span>
                  <Button onClick={() => handleUpdateCartItem(product.product._id, product.count + 1)} className="text-black text-sm cursor-pointer bg-white hover:bg-white">+</Button>
                </div>
              </div>
            </div>
            <div className="flex sm:flex-col items-end justify-between w-full sm:w-auto mt-2 sm:mt-0">
              <span className="font-bold text-gray-900 text-sm">{(product.count * product.price).toFixed(2)} EGP</span>
              <span className="text-xs text-gray-400">each</span>
              <Button onClick={() => {
                setdeletingId(product.product._id)
                delCartItem(product.product._id)
              }} className="text-xs text-red-500 font-medium mt-2 cursor-pointer bg-white hover:bg-white">{delCartPending && deletingId === product.product._id ? <Spinner className="size-4" /> : "remove"}</Button>
            </div>
          </div>)}

        </div>

        {/* Order Summary Sidebar (1 Column) */}
        <div>

          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-6">
            <h2 className="font-bold text-gray-900 text-base mb-4">Order Summary</h2>

            <div className="space-y-3 text-sm border-b border-gray-100 pb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal ({cartData?.numOfCartItems} items)</span>
                <span className="font-semibold text-gray-900"> {cartData?.data.totalCartPrice.toFixed(2)} EGP</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center py-4 text-base font-bold text-gray-900">
              <span>Total</span>
              <span>{cartData?.data.totalCartPrice.toFixed(2)}</span>
            </div>

            <div className="space-y-3 mt-2">
              <div className="w-full py-3 border border-gray-200 text-center font-medium text-sm rounded-xl text-gray-800 bg-white hover:bg-gray-50 cursor-pointer">
                <Link href="/products">
                  Continue Shopping
                </Link>
              </div>
              <div >
                <CheckoutForm cartId={cartData?.cartId} />
              </div>
            </div>


          </div>

          {/* Clear Cart Button */}
          <div className="mt-4 flex justify-end">
            <Button onClick={() => clCartItem()} className="inline-flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-red-500 font-medium cursor-pointer bg-white hover:bg-white shadow-xs">
              <Trash size={15} />
              clear cart
            </Button>
          </div>
        </div>

      </div>

    </div> : <div className="bg-white px-4 sm:px-8 py-8">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Shopping Cart</h1>
      </div>

      {/* Empty Cart Content (Centered) */}
      <div className="flex flex-col items-center justify-center py-24">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Your Cart Is Empty
        </h2>

        {/* Add Ones / Action Button */}
        <Link href="/products" className="px-4 py-1.5 bg-black hover:bg-black/80 text-white text-sm font-medium rounded-xl shadow-md cursor-pointer">
          Add ones
        </Link>
      </div>

    </div>}






  </>
}
