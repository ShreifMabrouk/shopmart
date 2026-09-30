import { brandsType } from "../types/brandsType"
import { getAllBrands } from "./brandsApi"

export async function getSpecificBrand(brandId:string): Promise<brandsType> {

    // const data = await getAllBrands()

    // const brandId = data.map((brandId)=> brandId._id)

    // console.log(brandId);
    

    try {

        const res = await fetch(`${process.env.API}brands/${brandId}`)

        if (!res.ok) throw new Error('Api Error')

        const payload = await res.json()

        return payload.data

    } catch (error) {

        throw new Error('Api Error')

    }
}