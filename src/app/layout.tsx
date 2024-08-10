import type { Metadata } from "next";
import { Inter, Recursive } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import Providers from "@/components/Providers";
import { ClerkProvider } from '@clerk/nextjs'
import { cn, constructMetadata } from "@/lib/utils";

const recursive = Recursive({ subsets: ["latin"] });

export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(recursive.className, "min-h-screen")}>
          <Navbar/>
          <main className="flex grainy-light flex-col min-h-[calc(100vh-3.5rem-1px)]">
            <div className="flex-1 flex flex-col h-full">
              <Providers>
                {children}
              </Providers>
            </div>  
            <Footer/>      
          </main>

          <Toaster/>
        </body>
      </html>
    </ClerkProvider>
  );
}
