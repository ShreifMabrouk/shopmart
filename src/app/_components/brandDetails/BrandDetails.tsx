
import { getAllProducts } from '@/api/serivces/productsApi'
import React from 'react'
import ProductCard from '../productCard/ProductCard'
import { getSpecificBrand } from '@/api/serivces/specificBrand'

// export default async function BrandDetails({ brandId }: { brandId: string })

export default async function BrandDetails({brandId}: {brandId:string}) {

    const productsData = await getAllProducts()

    console.log(productsData);

    const specificBrand = await getSpecificBrand(brandId)

    console.log(specificBrand);

    const brandProducts = productsData.filter((product)=> product.brand._id === brandId)
    

    // const brandProducts = data.filter((product) => product.brand._id === brandId)


    return <>

        <div className="flex items-center px-4 sm:px-12 pt-12">
            <div className="w-full max-w-7xl">

                {/* Page Header */}
                <div className="mb-8">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                        {specificBrand.name}
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Products from this brand
                    </p>
                </div>


            </div>
        </div>


        {/* Products Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 sm:px-12 pb-12">

            {brandProducts.map((product) => <ProductCard prod={product} key={product._id} />)}

        </div>







    </>
}
