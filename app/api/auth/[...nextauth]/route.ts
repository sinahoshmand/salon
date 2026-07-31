import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions : AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        mobile: {},
        password: {},
      },

      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/login`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              mobile: credentials?.mobile,
              password: credentials?.password,
            }),
          }
        );

        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            JSON.stringify({
              status: response.status,
              ...data,
            })
          );
        }

        return {
          id: data.user.id,
          name: data.user.name,
          mobile: data.user.mobile,
          accessToken: data.token,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.mobile = user.mobile;
        token.accessToken = user.accessToken;
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.mobile = token.mobile;
      session.accessToken = token.accessToken;

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };