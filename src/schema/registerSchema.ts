import *  as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export const registerSchema = zod.object({
  name:zod.string().nonempty("Name is Req").min(3, "min 3 letters").max(20, "max 20 letterscd"),
  email:zod.string().nonempty("Email is Req").email("Invalid email address"),
  password:zod.string().nonempty("Password is Req").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , "Password must be 3-10 characters"),
  rePassword:zod.string(),
  phone: zod.string().regex(/^01[0125][0-9]{8}$/, "Please enter a phone number"),
}).refine((obj)=> obj.password === obj.rePassword, {
  path: ["rePassword"],
  message: "Passwords do not match"
})