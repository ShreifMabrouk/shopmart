"use server"

import { getTokenFun } from "@/utilities/getTokenData"



export async function clearCartItems() {


    const token = await getTokenFun()

    if(!token) throw new Error("Unauthorized")


    try {
        const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart", {

        method: "DELETE",

        headers: {
            token: token,
            'Content-Type': 'application/json'
        }

    })

    if(!res.ok) throw new Error("Unauthorized")

        const payload = await res.json()

        console.log(payload);

        return payload

    } catch (error) {
        throw new Error("Unauthorized")
    }


}