"use client"

import React from 'react'
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import * as z from "zod"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group"
import { checkoutSchema } from '@/schema/checkoutSchema'
import { payCach } from '@/api/actions/payment/paycach.action'
import Link from 'next/link'

export type userDataCheckout = z.infer<typeof checkoutSchema>

export default function CheckoutForm({cartId}: {cartId:string}) {

    const { handleSubmit, control } = useForm<userDataCheckout>({
        defaultValues: {
            details: '',
            phone: '',
            city: '',
        },
        resolver: zodResolver(checkoutSchema)
    })

    async function submitForm(data: userDataCheckout) {
        console.log(data);

        console.log("Address:", data)

        const payload = await payCach(cartId, data)

        window.location.href = payload.session.url

         console.log("Payment response:", payload)

    }

    return <>


    

                
                <Dialog>
            
                <DialogTrigger render={<Button className="w-full py-5 text-white text-center font-medium text-sm rounded-xl shadow-md cursor-pointer">Proceed to Checkout</Button>} />
                <DialogContent className="sm:max-w-sm">
                    <form onSubmit={handleSubmit(submitForm)}>
                    <DialogHeader>
                        <DialogTitle>Add Address</DialogTitle>
                        <DialogDescription>
                            Add a shipping address for your deliveries.
                        </DialogDescription>
                    </DialogHeader>

                    {/* City Field */}
                    <Controller
                        name="city"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>City</FieldLabel>
                                <Input
                                    type='text'
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="Cairo"
                                    autoComplete="on"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none bg-white"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    {/* Details Field */}
                    <Controller
                        name="details"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>Details</FieldLabel>
                                <Input
                                    type='text'
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="90th North St., Building 45, 3rd Floor, Apt. 12"
                                    autoComplete="on"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none bg-white"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />

                    {/* Phone Number Field */}
                    <Controller
                        name="phone"
                        control={control}
                        render={({ field, fieldState }) => (
                            <Field data-invalid={fieldState.invalid}>
                                <FieldLabel className="block text-xs font-medium text-gray-900 mb-1" htmlFor={field.name}>Phone Number</FieldLabel>
                                <Input
                                    type='text'
                                    {...field}
                                    id={field.name}
                                    aria-invalid={fieldState.invalid}
                                    placeholder="01012345678"
                                    autoComplete="on"
                                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm text-gray-900 focus:outline-none bg-white"
                                />
                                {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                            </Field>
                        )}
                    />
                    <DialogFooter>
                        <DialogClose render={<Button variant="outline" className="cursor-pointer">Cancel</Button>} />
                        <Button type="submit" className="cursor-pointer">Checkout</Button>
                    </DialogFooter>
                    </form>
                </DialogContent>
           
        </Dialog>
                
              
          
        

    </>
}

{/* <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">City :</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </Field>
                        <Field>
                            <Label htmlFor="username-1">Details :</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </Field>
                        <Field>
                            <Label htmlFor="username-1">Phone Number :</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </Field>
                    </FieldGroup> */}
// type ShippingAddress