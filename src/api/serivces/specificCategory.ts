import { categoriesType } from "../types/categoriesType"

export async function getSpecificCategory(categoryId:string): Promise<categoriesType> {  

    try {

        const res = await fetch(`${process.env.API}categories/${categoryId}`)

        if (!res.ok){
            const errorData = await res.json()
      console.log("API ERROR:", errorData)

      throw new Error(`API Error: ${res.status}`)
        }

        const payload = await res.json()

        return payload.data

    } catch (error) {

        console.log("REAL ERROR:", error)
    throw error

    }
}