import { getAllProducts } from '@/api/serivces/productsApi'
import React from 'react'
import ProductCard from '../_components/productCard/ProductCard';

export default async function Products() {


  const data = await getAllProducts()

  console.log(data);
  

  return <>
  
  
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">
      {/* Grid Container for 4 columns */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {data.map((product)=> <ProductCard prod={product} key={product._id} /> )}

      </div>
    </div>
  
  
  </>
}
