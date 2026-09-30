import { brandsType } from '@/api/types/brandsType'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BrandCard({brand}: {brand:brandsType}) {

    
    return <>


        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center h-56 hover:shadow-md transition-shadow">
            <div className="flex-1 flex items-center justify-center">
                {/* <span className="text-2xl font-serif font-black tracking-wider text-gray-900"></span> */}

                <Link href={`/brands/${brand._id}`}>
                
                <Image width={250} height={250} src={brand.image} alt={brand.name}/>

                </Link>

            </div>
            <p className="text-xs font-semibold text-gray-900 mt-4"> {brand.name} </p>
        </div>



    </>
}
