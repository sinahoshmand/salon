import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions : AuthOptions = {
  debug:true,
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
          role : data.user.role,
          name: data.user.name,
          mobile: data.user.mobile,
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

  // callbacks: {

  //   async signIn({ user, account }) {


  //     if(account?.provider === "google") {
  //       const response = await fetch(
  //         `${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/auth/google-login`,
  //         {
  //           method:"POST",
  //           headers:{
  //             "Content-Type":"application/json"
  //           },
  //           body:JSON.stringify({
  //             email:user.email,
  //             name:user.name,
  //             avatar:user.image,
  //             provider_id:account.providerAccountId
  //           })
  //         }
  //       );
  
  //       console.log("LARAVEL STATUS", response.status);


  //       const data = await response.json();
    
  //       console.log("LARAVEL DATA", data);
    
    
  //       if(!response.ok){
  //         throw new Error(JSON.stringify(data));
  //       }
    
  
  //       // اطلاعات لاراول را روی user نگه میداریم
  //       user.id = data.user.id;
  //       user.role = data.user.role;
  //       user.accessToken = data.token;
  //       user.email = data.user.email
  
  //     }
  
  
  //     return true;
  //   },


  //   async jwt({ token, user }) {
  //     if (user) {
  //       token.id = user.id;
  //       token.mobile = user.mobile;
  //       token.accessToken = user.accessToken;
  //       token.role = user.role
  //     }

  //     return token;
  //   },

  //   async session({ session, token }) {
  //     session.user.id = token.id;
  //     session.user.mobile = token.mobile;
  //     session.accessToken = token.accessToken;
  //     session.role = token.role
  //     return session;
  //   },
  // },

  
  callbacks: {
    async signIn({ user, account }) {
      console.log("SIGNIN CALLBACK");
      console.log(user);
      console.log(account);
  
      return true;
    },
  
    async jwt({ token, user }) {
      console.log("JWT CALLBACK");
  
      if (user) {
        token.id = user.id;
      }
  
      return token;
    },
  
    async session({ session, token }) {
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