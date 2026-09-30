import { brandsType } from "../types/brandsType";

export async function getAllBrands(): Promise<brandsType[]> {

    try {

        const res = await fetch(`${process.env.API}brands`)

        if (!res.ok) throw new Error('Api Error')

        const payload = await res.json()

        return payload.data

        console.log(payload.data);

        

    } catch (error) {

        throw new Error('Api Error')

    }

}