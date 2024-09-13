import "~/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import TopNav from "./_component/topnav";
import "@uploadthing/react/styles.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { extractRouterConfig } from "uploadthing/server";
import { ourFileRouter } from "./api/uploadthing/core";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by me",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
         <html lang="en" className={`${GeistSans.variable}`}>
          <NextSSRPlugin 
          
          
          routerConfig={extractRouterConfig(ourFileRouter)}
          />
    
    <body className={`flex-col gap-4`}>
       <TopNav/>
       {children}</body>
   
   </html>
    </ClerkProvider>
 
  );
}
