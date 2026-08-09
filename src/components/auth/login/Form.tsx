"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { getSession, signIn, useSession } from "next-auth/react";
import { FormEvent, MouseEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { FiMail, FiLock } from "react-icons/fi";
import Alert from "../../admin/ui/Alert";
import { useRouter } from "next/navigation";
import { BeatLoader } from "react-spinners";
 

type LoginData = {
  email: string;
  password: string;
  remember: boolean;
};

type Errors = {
  email: string;
  password: string;
};

 
export default function Form() {
  const [error, setError] = useState<Errors | null>(null);
  const [message, setMessage] = useState<string>("");
  const [request, setRequest] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [remember, setRemember] = useState<boolean>(false);
  const router = useRouter();
 

  const handleGoogleLogin = () => {
    signIn("google", {
      callbackUrl: "/dashboard",
    });
  };

  const handleLogin = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setRequest(true);

    const result = await signIn("credentials", {
      email,
      password,
      remember: remember ?? false,
      redirect: false,
    });

    console.log(result);

    if (result?.error) {
      const error = JSON.parse(result.error);

      if (error.type === "validation") {
        setError(error.errors);
        setMessage("");
        setRequest(false);
        return;
      }

      if (error.type === "tooManyRequest") {
        setMessage(error.message);
        setError(null);
        setRequest(false);
        return;
      }

      if (error.type === "Invalid" || error.type === "ServerProblem") {
        setMessage(error.message);
        setError(null);
        setRequest(false);
        return;
      }
    }

    if (result?.ok) {
      setRequest(false);
      setMessage("");
      setError(null);

      const session = await getSession();
    
      if (session?.role === "user") {
        router.push("/user-dashboard");
      }
    
      if (session?.role === "super_admin") {
        router.push("/admin");
      }
    
      if (session?.role === "salon_owner") {
        router.push("/owner-dashboard");
      }
    
    }
  };

  return (
    <div className="w-full max-w-md mt-10">
      {/* Form */}

      <form className="space-y-4">
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

        {/* Forgot */}

        <div
          className="
flex
   mt-6
items-center
justify-between
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
            Remember me
          </label>

          <button
            type="button"
            className="
    text-sm
    text-[var(--primary)]
    hover:underline
    "
          >
            Forgot password?
          </button>
        </div>

        {/* Submit */}

        <button
          disabled={request}
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
            shadow-lg
            shadow-[var(--primary)]/20
            "
        >
          {request ? <BeatLoader color="#ffffff" size={13} /> : "Login"}
        </button>
        {message && <Alert mesg={message} />}
      </form>
      <div className="flex  justify-center items-center flex-row gap-1 items-center mt-4">
        <div className="w-full h-[2px] bg-[var(--border)]"></div>
        <div className="w-full">
          <p className="text-[var(--secondary-text)] text-center text-[13px] ">
            Or continue with
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

      {/* Register */}

      <p
        className="
        text-center
        text-sm
        text-[var(--muted)]
        mt-7
        "
      >
        Don't have an account?
        <button
          className="
            ml-1
            text-[var(--primary)]
            font-medium
            "
        >
          Create account
        </button>
      </p>
    </div>
  );
}
