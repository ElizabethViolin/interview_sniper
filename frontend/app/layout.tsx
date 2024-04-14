import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Interview Sniper",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif-system dark">
        {children}
      </body>
    </html>
  );
}
