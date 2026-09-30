import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {


    const token = await getToken({ req: req })

    if (!token) return NextResponse.json({ message: "Unauthorized", status: 401 })

    try {
        const res = await fetch("https://ecommerce.routemisr.com/api/v1/orders/", {
            headers: {
                token: token.token,
                'Content-Type': 'application/json'
            }

        })

        if (!res.ok) return NextResponse.json({ message: "Unauthorized", status: 401 })

        const payload = await res.json()

        console.log(payload);

        return NextResponse.json(payload)

    } catch (error) {
        throw new Error("Unauthorized")
    }


}