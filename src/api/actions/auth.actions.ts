'use server'


import { userDataLogin } from "@/app/(auth)/login/page";
import { userDataRegister } from "@/app/(auth)/register/page";
import { cookies } from "next/headers";


export async function userRegister(data: userDataRegister) {

    try {

        const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {

            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        // if (!res.ok) throw new Error("Api Error")

        const payload = await res.json()

        console.log('payload', payload);

        if(res.ok) {
            const cookie = await cookies()
            cookie.set('userToken', payload.token, {
                httpOnly: true,
                
            })
        }

        return res.ok


    } catch (error) {
        console.log("Register Error:", error)
        // throw error
    }

}


// export async function userLogin(data: userDataLogin) {

//     try {

//         const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {

//             method: 'POST',
//             body: JSON.stringify(data),
//             headers: {
//                 'Content-Type': 'application/json'
//             }

//         })

//         // if (!res.ok) throw new Error("Api Error")

//         const payload = await res.json()

//         console.log('payload', payload);

//         if(res.ok) {
//             const cookie = await cookies()
//             cookie.set('userToken', payload.token, {
//                 httpOnly: true,
                
//             })
//         }

//         return res.ok


//     } catch (error) {
//         console.log("Register Error:", error)
//         // throw error
//     }

// }
