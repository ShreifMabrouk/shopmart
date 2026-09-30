import { getAllProducts } from '@/api/serivces/productsApi'
import { getSpecificCategory } from '@/api/serivces/specificCategory'
import React from 'react'
import ProductCard from '../productCard/ProductCard'

export default async function CategoryDetails({ categoryId }: { categoryId: string }) {



    const productsData = await getAllProducts()

    const spesificCategory = await getSpecificCategory(categoryId)

    const categoryProducts = productsData.filter((product) => product.category._id === categoryId)



    return <>


        <div className="flex items-center px-4 sm:px-12 pt-12">
            <div className="w-full max-w-7xl">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        {spesificCategory.name}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Products from this brand
                    </p>
                </div>


            </div>
        </div>


        {/* Products Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-12 pb-12">

            {categoryProducts.map((product) => <ProductCard prod={product} key={product._id} />)}

        </div>



    </>
}
