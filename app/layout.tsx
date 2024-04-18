import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/app/providers/theme-provider";
import Providers from "./providers/query-provider";

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
    <html lang="en">
      <body className="font-serif-system dark">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          enableColorScheme={true}
        >
          <Providers>
            {children}
          </Providers>
        </ThemeProvider>
      </body> 
    </html>
  );
}
