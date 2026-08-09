import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    role? : string
    accessToken: string;
    user: DefaultSession["user"] & {
      id: string;
      mobile?: string;
      email?: string;
      role? : string
    };
  }

  interface User {
    id: string;
    mobile?: string;
    accessToken: string;
    role? : string,
    email?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    mobile?: string;
    email?: string;
    accessToken: string;
    role? : string
  }
}