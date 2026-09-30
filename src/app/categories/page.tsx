import React from 'react'
import { getAllCategories } from '@/api/serivces/categoriesApi';
import CategoryCard from '../_components/caregoryCard/CategoryCard';

export default async function Categories() {

  const data = await getAllCategories()

  // const productData = await getAllProducts()

  // const categoryProduct = productData.filter((product)=> product.category._id === categoryId)


  return <>

    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 py-12">
      <div className="w-full max-w-7xl">

        {/* Section Title */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-8 tracking-tight">
          Categories
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map ((category) => <CategoryCard category={category} key={category._id} />)}
        </div>
      </div>
    </div>



  </>
}
