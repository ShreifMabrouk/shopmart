import { getAllBrands } from '@/api/serivces/brandsApi'
import React from 'react'
import BrandCard from '../_components/brandCard/BrandCard';
import LoadingSpinner from '@/app/_components/loadingSpinner';

export default async function Brands() {


  const data = await getAllBrands()

  console.log(data);

  return <>

    

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-7xl">

        {/* Section Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Brands
        </h1>

        {/* Brands Grid Container (4 columns) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {data.map((brand)=> <BrandCard brand={brand} key={brand._id} />)}

        </div>

      </div>

    </div>



  </>
}
