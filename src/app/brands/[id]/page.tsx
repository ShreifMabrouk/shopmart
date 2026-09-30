import BrandDetails from '@/app/_components/brandDetails/BrandDetails'
import React from 'react'

export default async function brandDetailaPage({params}:{params:Promise<{id:string}>}) {

    const { id } = await params
    
    return <BrandDetails brandId={id} />
}
