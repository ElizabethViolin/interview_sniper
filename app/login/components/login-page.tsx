"use client"

import React, { useRef } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../../components/ui/button";
import TransparentTextarea from "@/app/components/ui/transparent-textarea";
import { Separator } from "@/app/components/ui/separator";

type Props = {
  callbackUrl?: string;
  error?: string;
};

const Login = (props: Props) => {
  const router = useRouter();
  const userName = useRef("");
  const pass = useRef("");
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: false,
    });

    if (!res?.error) {
      router.push(props.callbackUrl ?? "http://localhost:3000");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-700 bg-gradient-to-r from-black via-transparent to-black opacity-75 background-blend-multiply font-thin">
      <span className="mb-10 text-lg text-white">Welcome to Interview Sniper</span>
      <form onSubmit={onSubmit} className="w-80 text-gray-200">
        <TransparentTextarea
          name="username"
          placeholder="Email"
          onChange={(e) => (userName.current = e.target.value)}
        />
        <Separator className='bg-gray-300 mb-8 mt-2' />
        <TransparentTextarea
          name="password"
          placeholder="Password"
          onChange={(e) => (pass.current = e.target.value)}
        />
        <Separator className='bg-gray-300 mt-2' />
        <div className="flex items-center justify-center mt-2 gap-2">
          <Button type="submit" className="bg-[rgba(229,229,229,0.1)] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out mt-10 border border-white text-white">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;