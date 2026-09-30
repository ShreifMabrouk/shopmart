'use client'

import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from '@/components/ui/input'

import { toast } from '@/components/ui/toast'

import { zodResolver } from '@hookform/resolvers/zod'
import { loginSchema } from '@/schema/loginSchema'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import loading from '@/app/loading'
// import { userLogin } from '@/api/actions/auth.actions'

export type userDataLogin = z.infer<typeof loginSchema>


export default function Login() {

    const router = useRouter()

    const {status} = useSession()

    // useEffect(()=> {
    //   if(status === "authenticated") {
    //     router.replace("/")
    //   }
    // }, [status, router])

    // if(status==="loading" || status==="authenticated") {
    //   return null
    // }

  const { control, handleSubmit } = useForm<userDataLogin>({
    defaultValues: {  
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema)
  })

  async function submitForm(data: userDataLogin) {
    // console.log(data);

    // const isLogin = await userLogin(data)

    const isLogin = await signIn('credentials', {...data, redirect:false})

    // const isLogin = await userLogin(data)

    if (isLogin?.ok) {

      toast.add({
        type: "success",
        description: "Success Login"
      })

      router.push('/')

    }
    else {
      toast.add({
        type: "error",
        description: "Cannot Login Now..."
      })
    }


  }

  return <>


    <div className="bg-white flex flex-col items-center justify-center px-4 py-10">

      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        Login now
      </h1>

      {/* Form Card Container */}


      <form onSubmit={handleSubmit(submitForm)} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full max-w-sm">

        <div className="space-y-4">

          {/* Email Field */}
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>Email</FieldLabel>
                <Input
                  type='email'
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="ahmed@gmail.com..."
                  autoComplete="on"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none bg-white"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

          {/* Password Field */}
          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>Password</FieldLabel>
                <Input
                  type='password'
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Ahmed@123"
                  autoComplete="on"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none bg-white"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

            {/* Submit Button */}
          <Button type='submit' className="w-full py-4 mt-1 bg-black text-white text-sm text-center font-medium rounded-xl shadow-md cursor-pointer">
            Submit
          </Button>

        </div>

      </form>

    </div>


  </>
}
