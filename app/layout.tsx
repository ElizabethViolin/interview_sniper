import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/app/components/nav-bar";
import { ThemeProvider } from "@/app/providers/theme_provider";
import Providers from "./providers/query_provider";

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
            <main className="flex min-h-screen">
              <div className="flex-grow">
                {children}
              </div>
              <div className="flex-shrink-0">
                <NavBar />
              </div>
            </main>
          </Providers>
        </ThemeProvider>
      </body> 
    </html>
  );
}
