import { productsType } from "../types/productsType"

export async function getAllProducts(): Promise<productsType[]> {

    const params = new URLSearchParams({

        limit:"40",
        // sort:"-price",
        // fields:"title,price",    
        // "price[gte]":"100",
        // page:"2",
        // keyword:"new",
        // brand:"6212b6b488f2cee15c5db3c8",
        // "price[lte]":"13",
        // "category[in]":"6212b67488f2cee15c5db3ba",
    })

    try {

        const res = await fetch(`${process.env.API}products?${params}`)

        if (!res.ok) throw new Error("APi Error")

        const payload = await res.json()

        // console.log(payload.data.length);

        return payload.data

        
        

    } catch (error) {

        throw new Error("APi Error")

    }

}