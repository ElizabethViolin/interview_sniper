"use client";
import { Button } from "@/app/components/ui/button";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutButton = () => {

  return (
    <Button className="bg-[rgba(229,229,229,0.1)] hover:shadow-lg hover:scale-105 transition duration-300 ease-in-out mt-10 border border-white text-white" onClick={() => signOut()}>
      Sign Out
    </Button>
  );
};

export default LogoutButton;