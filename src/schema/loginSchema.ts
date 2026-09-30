import *  as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

export const loginSchema = zod.object({

  email:zod.string().nonempty("Email is Req").email("Invalid email address"),
  password:zod.string().nonempty("Password is Req").regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/ , "Password must be 3-10 characters"),

})