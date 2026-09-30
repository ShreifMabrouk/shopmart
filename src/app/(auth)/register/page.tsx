'use client'

import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from '@/components/ui/input'
import { registerSchema } from '@/schema/registerSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { userRegister } from '@/api/actions/auth.actions'

import { useRouter } from 'next/navigation'
import { toast } from '@/components/ui/toast'


export type userDataRegister = z.infer<typeof registerSchema>

export default function Register() {

  const router = useRouter()

  const { control, handleSubmit } = useForm<userDataRegister>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    resolver: zodResolver(registerSchema)
  })



  async function submitForm(data: userDataRegister) {
    // console.log(data);

    // const res = await fetch("http://localhost:3000/api/brands")

    // const payload = await res.json()

    // console.log(payload);

    const isRegister = await userRegister(data)

    if (isRegister) {

      toast.add({
        type: "success",
        description: "Success Register"
      })

      router.push('/login')

    }
    else {
      toast.add({
        type: "error",
        description: "Cannot Register Now..."
      })
    }


  }

  return <>


    <div className="bg-white flex flex-col items-center justify-center px-4 py-10">

      {/* Page Title */}
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 tracking-tight">
        Register now and Join US
      </h1>

      {/* Form Card Container */}


      <form onSubmit={handleSubmit(submitForm)} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 w-full max-w-sm">

        <div className="space-y-4">


          {/* Name Field */}
          <Controller
            name="name"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>Name</FieldLabel>
                <Input
                  type='text'
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="Ahmed"
                  autoComplete="on"
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none bg-white"
                />
                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
              </Field>
            )}
          />

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

          {/* rePassword Field */}
          <Controller
            name="rePassword"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>rePassword</FieldLabel>
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

          {/* phone Field */}
          <Controller
            name="phone"
            control={control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>Phone</FieldLabel>
                <Input
                  type='text'
                  {...field}
                  id={field.name}
                  aria-invalid={fieldState.invalid}
                  placeholder="01009000900"
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
