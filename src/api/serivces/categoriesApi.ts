import { categoriesType } from "../types/categoriesType";

export async function getAllCategories(): Promise<categoriesType[]> {

    try {

        const res = await fetch(`${process.env.API}categories`)

        if (!res.ok) throw new Error('Api Error')

        const payload = await res.json()

        // console.log(payload.data);

        return payload.data
        

    } catch (error) {

        throw new Error('Api Error')

    }

}