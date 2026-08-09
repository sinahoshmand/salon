import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : AuthOptions = {
  debug:true,
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {},
        remember : {},
        password: {},
      },

      async authorize(credentials) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/auth/login`,
          {
            method: "POST",
            headers: {
               "Content-Type":"application/json",
              "Accept":"application/json"
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
              remember : credentials?.remember
            }),
          }
        );

        const data = await response.json();

        if (response.status === 422) {
          throw new Error(
            JSON.stringify({
              type: "validation",
              errors: data.errors,
            })
          );
        }
        if (response.status === 403) {
          throw new Error(
            JSON.stringify({
              type: "Invalid",
              message: data.error,
            })
          );
        }
        if (response.status === 429) {
          throw new Error(
            JSON.stringify({
              type: "tooManyRequest",
              message: data.message,
            })
          );
        }
        if (response.status === 500 || response.status === 401) {
          throw new Error(
            JSON.stringify({
              type: "ServerProblem",
              message: 'خطا در سرور',
            })
          );
        }

        return {
          id: data.user.id,
          role : data.user.role,
          name: data.user.name,
          email: data.user.email,
          accessToken: data.token,
        };
      },
    }),
    GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID!,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      })
  ],

  session: {
    strategy: "jwt",
  },

  callbacks: {

    async signIn({ user, account }) {
      
      if(account?.provider === "google") {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/auth/google-login`,
          {
            method:"POST",
            headers: {
              "Content-Type":"application/json",
             "Accept":"application/json"
           },
            body:JSON.stringify({
              email:user.email,
              name:user.name,
              avatar:user.image,
              provider_id:account.providerAccountId
            })
          }
        );
  
        const data = await response.json();
      
        if(!response.ok){
          console.log("GOOGLE LOGIN ERROR:", data);
          return false;
        }
        // اطلاعات لاراول را روی user نگه میداریم
        user.id = data.user.id;
        user.role = data.user.role;
        user.accessToken = data.token;
        user.email = data.user.email
  
      }
  
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.accessToken = user.accessToken;
        token.role = user.role
      }

      return token;
    },

    async session({ session, token }) {
      session.user.id = token.id;
      session.user.email = token.email;
      session.accessToken = token.accessToken;
      session.role = token.role
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

console.log("AUTH ROUTE LOADED");

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };