import *  as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export const checkoutSchema = zod.object({

    city: zod
    .string()
    .trim()
    .min(3, { message: 'City name must be at least 3 characters long' })
    .max(50, { message: 'City name cannot exceed 50 characters' }),

    details: zod
    .string()
    .trim()
    .min(10, { message: 'Please provide more details (e.g., street name, building number)' })
    .max(300, { message: 'Address details cannot exceed 300 characters' }),

    phone: zod
    .string()
    .trim()
    .regex(/^01[0125][0-9]{8}$/, {
      message: 'Invalid Egyptian mobile number. Must be 11 digits starting with 010, 011, 012, or 015',
    }),

})

// zod.string().regex(/^01[0125][0-9]{8}$/, "Please enter a phone number"),