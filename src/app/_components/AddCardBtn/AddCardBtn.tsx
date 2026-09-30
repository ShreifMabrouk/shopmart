"use client"

import { addToCart } from '@/api/actions/cartActions/addToCart'
import { toast } from '@/components/ui/toast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'

export default function AddCardBtn({ prodId }: { prodId: string }) {

  const query = useQueryClient()

  async function handleAddToCart() {

    mutate(prodId)

    // console.log(data);

    // try {

    //   const data = await addToCart(prodId)
    //   if (data.message === "Product added successfully to your cart") {
    //     toast.add({
    //       type: "success",
    //       description: data.message
    //     })
    //   }
    //   else {
    //     toast.add({
    //       type: "error",
    //       description: "Login First"
    //     })
    //   }
    // } catch (error) {
    //   toast.add({
    //     type: "error",
    //     description: "Login First"
    //   })
    // }

  }

  const { data, mutate } = useMutation({

    mutationFn: addToCart,
    onSuccess: () => {
      toast.add({
        type: "success",
        description: "Product added successfully to your cart"
      })
      
        query.invalidateQueries({queryKey:['getCart']})
    },
    onError: () => {
      toast.add({
        type: "error",
        description: "Login First"
      })
    },

  })

  return <>

    <button onClick={handleAddToCart}
      type="button"
      className="flex-1 bg-black hover:bg-black/80 text-white text-xs font-medium py-2.5 px-4 rounded-xl transition-colors cursor-pointer text-center"
    >
      Add To Cart
    </button>


  </>
}
