import { productsType } from '@/api/types/productsType'
import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import AddCardBtn from '../AddCardBtn/AddCardBtn'
import AddWishlistBtn from '../AddWishlistBtn/AddWishlistBtn'

export default function ProductCard({prod}: {prod:productsType}) {
  return <>
  
  
  {/* Product Card 1 */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col justify-between hover:shadow-md transition-shadow">
          <div>
            {/* Product Image Area */}
            <div className="w-full h-60 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
              {/* <span className="text-xs text-gray-400 font-medium">Product Image</span> */}
              <Image width={250} height={250} src={prod.imageCover} alt={prod.title}/>
            </div>

            {/* Brand / Category */}
            <p className="text-xs text-gray-400 mb-1"> {prod.brand.name} </p>

            {/* Product Title */}
            <h3 className="text-sm font-bold text-gray-900 mb-2">
              {prod.title}
            </h3>

            {/* Rating & Reviews */}
            <div className="flex items-center gap-1.5 mb-3">
              {/* <div className="flex text-amber-400 text-xs">
                ★★★★★
              </div> */}

              {prod.ratingsAverage >= 0 && prod.ratingsAverage < 1 && (
                  <div className="flex text-amber-400">
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                  </div>
                )}

                {prod.ratingsAverage >= 1 && prod.ratingsAverage < 2 && (
                  <div className="flex text-amber-400">
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                  </div>
                )}

                {prod.ratingsAverage >= 2 && prod.ratingsAverage < 3 && (
                  <div className="flex text-amber-400">
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                  </div>
                )}

                {prod.ratingsAverage >= 3 && prod.ratingsAverage < 4 && (
                  <div className="flex text-amber-400">
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-300" />
                    <Star className="size-3 text-gray-300" />
                    <Star className="size-3 text-gray-300" />
                  </div>
                )}

                {prod.ratingsAverage >= 4 && prod.ratingsAverage < 5 && (
                  <div className="flex text-amber-400">
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 text-gray-300" />
                  </div>
                )}

                {prod.ratingsAverage >= 5 && prod.ratingsAverage < 6 && (
                  <div className="flex text-amber-400">
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                    <Star className="size-3 fill-amber-400" />
                  </div>
                )}
              <span className="text-xs text-gray-500">({prod.ratingsQuantity})</span>
            </div>

            {/* Price */}
            <div className="text-sm font-extrabold text-gray-900 mb-4">
              {prod.price.toFixed(2)} EGP
            </div>
          </div>

          {/* Action Button & Wishlist */}
          <div className="flex items-center gap-2">
            <AddCardBtn prodId={prod._id}/>
            
            <AddWishlistBtn/>
          </div>
        </div>
  
  
  </>
}
