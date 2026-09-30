import NextAuth, { User } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */

  interface User {
    id: string,
    name: string,
    email: string,
    token: string
  }
  interface Session {
    user: {
      /** The user's postal address. */
      name: string,
      email: string,
      id: string,
      address: string
    }
  }
}


declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    name: string,
    id: string,
    token: string
  }
}