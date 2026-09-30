"use client"

import { allOrdersType, ShippingAddress, User, CartItem, Product, Category, Brand, } from '@/api/types/allOrdersType'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import LoadingSpinner from '../loadingSpinner'



export default function AllOrdersComp() {

  const query = useQueryClient()
  
    const { data: orderData, isLoading } = useQuery<allOrdersType>({
      queryKey: ['allOrders'],
      queryFn: async () => {
        const res = await fetch("/api/allorders")
        if (!res.ok) throw new Error("Faild To Fetch")
  
        return res.json()
      }
    })

    if (isLoading) {
        return <LoadingSpinner />
      }
  
    console.log(orderData);

  return <>
  
  
  <div className="min-h-screen bg-white flex flex-col justify-between">
      
      {/* Main Content Area */}
      <div className="px-4 sm:px-8 py-8 max-w-7xl mx-auto w-full">
        
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">
          All Orders
        </h1>

        {/* Orders List Container */}
        <div className="space-y-6">
          
          {/* Order Cards */}
          

          {orderData?.data?.map((order)=> <div key={order._id} className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-gray-100 gap-2">
              <div>
                <span className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Order ID</span>
                <h3 className="font-bold text-gray-900 text-sm">#{order.id}</h3>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 text-xs font-medium rounded-full border ${
                    order.isDelivered 
                      ? 'bg-green-50 text-green-700 border-green-200' 
                      : 'bg-yellow-50 text-yellow-700 border-yellow-200'
                  }`}>
                    {order.isDelivered ? 'Delivered' : 'Processing'}
                  </span>
                <span className="text-xs text-gray-500">Placed on: {new Date(order.createdAt).toLocaleDateString("en-US",{
                    month:"short",
                    day:"numeric",
                    year:"numeric",
                })}</span>
              </div>
            </div>

            {/* Order Items Preview */}
            {order.cartItems.map((item)=> <div key={item._id} className="py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 w-full">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex shrink-0">
                  <div className="w-full h-full bg-cover bg-center">
                    <Image src={item.product.imageCover} width={200} height={200} alt={item.product.title} />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-sm"> {item.product.title} </h4>
                  <p className="text-xs text-gray-500 mt-0.5">Total Items: {item.count} · {item.product.brand.name} </p>
                </div>
              </div>
              <div className="text-right w-full sm:w-auto flex sm:flex-col justify-between items-center sm:items-end">
                <span className="text-xs text-gray-500">Total Amount</span>
                <span className="font-bold text-gray-900 text-base">{item.price} EGP</span>
              </div>
            </div>)}

            <div className="pt-3 border-t border-gray-100 flex justify-end">
              <div className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 bg-white cursor-pointer">
                View Details
              </div>
            </div>
          </div> )}

        </div>

      </div>

    </div>
  
  
  
  </>
}
