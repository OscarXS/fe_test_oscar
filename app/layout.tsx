import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import React from 'react';
import Cookies from 'js-cookie';
import CookieBar from "@/components/CookieBar";
// import { CookiesProvider, useCookies } from 'react-cookie'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Album App Assessment",
  description: "Assessment - Oscar Sebeloane",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const setLanguageCookie = ({success}: any) => {
  Cookies.set('false', success);
  }
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between`}>
        <main className="grid w-full h-full">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
          {children}
          <CookieBar />
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
