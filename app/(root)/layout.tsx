import type { Metadata } from "next";
import "../globals.css";
import { NavBar } from "@/app/components/nav-bar";

export const metadata: Metadata = {
  title: "Interview Sniper",
  description: "Prepare for your next interview with tailored questions and resources.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen">
      <div className="flex-grow">
        {children}
      </div>
      <div className="flex-shrink-0">
        <NavBar />
      </div>
    </main>
  );
}
