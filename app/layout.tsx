import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from 'next-themes'
import Navbar from "@/components/navigation/navbar";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { ReactNode } from "react";

const inter = localFont({
  src: "./fonts/InterVF.ttf",
  variable: "--font-inter",
  weight: "100 200 300 400 500 600 700 800 900",
});

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk.ttf",
  variable: "--font-space-grotesk",
  weight: "100 200 300 400 500 600 700 800 900",
});

export const metadata: Metadata = {
  title: "Next.js 15 Project",
  description: "JavaScript Mastery Pro Project",
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const session = await auth();
  console.log("Session in layout", session);
  return (
    <html lang="en" suppressHydrationWarning>
      <SessionProvider session={session}>
      <body
        className={`${inter.className} ${spaceGrotesk.variable} antialiased`}
      >
       <ThemeProvider attribute="class"
       defaultTheme="system"
       enableSystem
       disableTransitionOnChange>
        {children}</ThemeProvider> 
        <Toaster /> 
      </body>
      </SessionProvider>
    </html>
  );
}; 
export default RootLayout;