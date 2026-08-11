"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getSession, signIn } from "next-auth/react";
import { MouseEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import Alert from "../../admin/ui/Alert";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
import { FaArrowRight } from "react-icons/fa";
import { header } from "motion/react-m";
 

type LoginData = {
  email: string;
  password: string;
  role : number|null,
  name : string,
  password_confirmation : string
};

type Errors = {
  email: string;
  name : string
  password: string;
  role : string
};

interface Error {
  email: string;
  name : string
  password: string;
  role : string
}

interface ErrRes {
  response : {
    status : number,
     data : {
       errors : Error,
       message : string
     }
  }
}


 
export default function Form({slug} : {slug : "salon-owner" | "customer"}) {
  const [error, setError] = useState<Errors | null>(null);
  const [message, setMessage] = useState<string>("");
  const [role, setRole] = useState<number|null>(null);
  const [email, setEmail] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [password_confirmation, setConfirmPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const router = useRouter();


  useEffect(() => {
     
    if(slug === "salon-owner"){
      setRole(1)
    }

    if(slug === "customer"){
      setRole(2)
    }
     
  } , [slug])

  const registerData = useMutation({
      mutationFn : (data : LoginData) => axios.post(`${process.env.NEXT_PUBLIC_BACKEND_ADDRESS}/auth/register` , data , {
        headers : {
          Accept: "application/json",
          "Content-Type" : "application/json",
        }
      }),
      onSuccess: async (success : any)  => {   
         if(success.status === 201){
          const result =  await signIn("credentials", {
              email : success.data.email,
              password : password,
              remember: true,
              redirect: false,
            });  

            if (result?.ok) {
             
              const session = await getSession();
            
              if (session?.role === "customer") {
                router.push("/user-dashboard");
              }
            
              if (session?.role === "salon_owner") {
                router.push("/owner-dashboard");
              }
            
            }
         }
        
      },
      onError: (error : ErrRes) => {
        const status = error?.response?.status
        if(status === 422){
          setError(error?.response.data?.errors)
          setMessage('')
        }
        if(status === 429){
          setMessage(error?.response.data?.message)
          setError(null)
        }

        
        
      },
      
  })
 

  const handleGoogleLogin = async () => {

    const role_name = role === 1 ? "salon" : "customer"

    document.cookie =
    `google_role=${role_name}; path=/; max-age=600; samesite=lax`;
   await signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    registerData.mutate({name , password , role , email , password_confirmation})
    

    // const result = await signIn("credentials", {
    //   email,
    //   password,
    //   remember: remember ?? false,
    //   redirect: false,
    // });
  };

  return (
    <div className="w-full max-w-md mt-10">
      {/* Form */}

      <form className="space-y-4">
          {/* name */}
          <label className="text-[var(--text)]  font-bold text-[14px]">
          Full Name
        </label>
        <div className="relative mt-3">
          <FiUser
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--secondary-text)]
              "
          />

          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter Your Full name"
            className="
              w-full
              py-4
              pl-11
              pr-4
              rounded-xl
              bg-[var(--surface)]
              border
              border-[var(--border)]
              text-[var(--secondary-text)]
              placeholder:text-[var(--muted)]
              outline-none
              focus:border-[var(--primary)]
              transition
              "
          />
        </div>
        {error && error.name && <Alert mesg={error.name} />}
        {/* Email */}
        <label className="text-[var(--text)]  font-bold text-[14px]">
          Email Address
        </label>
        <div className="relative mt-3">
          <FiMail
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--secondary-text)]
              "
          />

          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email address"
            className="
              w-full
              py-4
              pl-11
              pr-4
              rounded-xl
              bg-[var(--surface)]
              border
              border-[var(--border)]
              text-[var(--secondary-text)]
              placeholder:text-[var(--muted)]
              outline-none
              focus:border-[var(--primary)]
              transition
              "
          />
        </div>
        {error && error.email && <Alert mesg={error.email} />}

        {/* Password */}
        <label className="text-[var(--text)]  font-bold text-[14px]">
          Password
        </label>
        <div className="relative mt-3">
          <FiLock
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--muted)]
              "
          />

          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="
               w-full
              py-4
              pl-11
              pr-4
              rounded-xl
              bg-[var(--surface)]
              border
              border-[var(--border)]
              text-[var(--secondary-text)]
              placeholder:text-[var(--muted)]
              outline-none
              focus:border-[var(--primary)]
              transition
              "
          />
        </div>
        {error && error.password && <Alert mesg={error.password} />}
  {/* Password */}
  <label className="text-[var(--text)]  font-bold text-[14px]">
          Password Confirm
        </label>
        <div className="relative mt-3">
          <FiLock
            size={18}
            className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-[var(--muted)]
              "
          />

          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm Your Password"
            className="
               w-full
              py-4
              pl-11
              pr-4
              rounded-xl
              bg-[var(--surface)]
              border
              border-[var(--border)]
              text-[var(--secondary-text)]
              placeholder:text-[var(--muted)]
              outline-none
              focus:border-[var(--primary)]
              transition
              "
          />
        </div>
        {/* Forgot */}

        <div
          className="
flex
   mt-6
items-center
 
"
        >
          <label
            className="
    flex
    items-center
    gap-2
    cursor-pointer
    text-sm
    text-[var(--muted)]
    "
          >
            <input
              onChange={(e) => setRemember(e.target.checked)}
              type="checkbox"
              className="
      w-4
      h-4
      rounded
      border-white/20
      bg-black/20
      accent-[var(--primary)]
      "
            /> 
           I agree to the <button className="text-[var(--primary)]">Terms & Conditions</button> and <span className="text-[var(--primary)]">Privacy Policy</span>
          </label>

       
        </div>

        {/* Submit */}

        <button
          disabled={registerData.isPending}
          onClick={(e) => {
            handleLogin(e);
          }}
          className="
            w-full
            h-12
            flex
            items-center
             justify-center
            mt-6
            rounded-xl
            bg-[var(--primary)]
            text-white
            font-semibold
            hover:opacity-90
            transition
            gap-3
            shadow-lg
            shadow-[var(--primary)]/20
            "
        >
          {registerData.isPending ? <BeatLoader color="#ffffff" size={13} /> : 
           <>
             Create Account
            <FaArrowRight size={17} color="var(--bg)"/>
           </>
          }
        </button>
        {message && <Alert mesg={message} />}
      </form>
      <div className="flex  justify-center items-center flex-row gap-1 items-center mt-4">
        <div className="w-full h-[2px] bg-[var(--border)]"></div>
        <div className="w-full">
          <p className="text-[var(--secondary-text)] text-center text-[13px] ">
            Or sign up with
          </p>
        </div>
        <div className="w-full h-[2px] bg-[var(--border)]"></div>
      </div>
      <button
        onClick={handleGoogleLogin}
        className="
          w-full
          mt-4
          flex
          items-center
          justify-center
          border border-[var(--border)]
          gap-3
          h-12
          rounded-xl
          bg-[var(--surface)]
          text-gray-800
          font-medium
          hover:bg-gray-100
          transition
          "
      >
        <FcGoogle size={22} />
        Continue with Google
      </button>

     
    </div>
  );
}
