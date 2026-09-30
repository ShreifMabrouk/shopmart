import { jwtDecode } from "jwt-decode";
import { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers:[
        Credentials({
            name:'Login',
            credentials: {
                email:{label:"Email", type:"email", placeholder:"Enter your email"},
                password:{label:"Password", type:"password", placeholder:"Enter your password"}
            },
            async authorize(credentials){


                const res = await fetch(`${process.env.API}auth/signin`, {

            method: 'POST',
            body: JSON.stringify({
                email:credentials?.email,
                password:credentials?.password
            }),
            headers: {
                'Content-Type': 'application/json'
            }

        })

        if (!res.ok) throw new Error(res.statusText)

        const payload = await res.json()

        const userData:{id:string} = jwtDecode(payload.token)

        console.log('payload...', payload);
        console.log('myToken...', userData);
        

                return {
                    id:userData.id,
                    name:payload.user.name,
                    email:payload.user.email,
                    password:payload.user.password,
                    token:payload.token
                }
            }
        })
    ],

    callbacks:{
        jwt({token , user}) {
            if(user) {
                token.id =user.id
                token.token =user.token
                token.name =user.name
            }

            return token
        },

        session({session, token}) {
            if(token) {
                session.user.id = token.id
                session.user.name = token.name
            }

            console.log(session);
            

            return session
        }
    },
    
    pages:{
        signIn:'/login'
    }
}