"use server"

import { userDataCheckout } from "@/app/_components/CheckoutForm/CheckoutForm"
import { getTokenFun } from "@/utilities/getTokenData"



export async function payCach(cartId: string, shippingAddress: userDataCheckout) {


    const token = await getTokenFun()

    if(!token) throw new Error("Unauthorized")


    try {
        const res = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=${process.env.NEXTAUTH_URL}`, {

        method: "POST",
        body: JSON.stringify({
            shippingAddress: shippingAddress
        }),

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