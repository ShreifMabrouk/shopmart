import { categoriesType } from '@/api/types/categoriesType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default async function CategoryCard({category}: {category:categoriesType}) {
    
  return <>
  
  {/* Categories Grid Container (4 columns) */}
        
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex flex-col items-center justify-between h-72 hover:shadow-md transition-shadow">
            <div className="w-full h-48 relative rounded-xl overflow-hidden bg-gray-50 flex items-center justify-center">
              <Link href={`/categories/${category._id}`} className="w-full h-full relative block">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-contain p-2"
                />
              </Link>
            </div>
            <p className="text-sm font-semibold text-gray-900 mt-4 text-center truncate w-full">
              {category.name}
            </p>
          </div>

        
  
  
  
  </>
}
