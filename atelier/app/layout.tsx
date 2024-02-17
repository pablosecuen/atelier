import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar/NavBar";
import { Suspense } from "react";
import Footer from "./components/footer/footer";
import whatsapp from "@/public/assets/whatsapp.svg";
import Image from "next/image";
import MainProvider from "./main-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Andrews",
  description: "Your fit in one place",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MainProvider>
          {" "}
          <Image
            src={whatsapp}
            alt="Whatsapp"
            width={50}
            height={50}
            loading="lazy"
            className="inline-block hover:cursor-pointer fixed bottom-6 right-6 z-50"
          />
          <Navbar />
          <Suspense>
            <main className="font-atlas-grotesk-regular ">{children}</main>
            <Footer />
          </Suspense>
        </MainProvider>
      </body>
      
    </html>
  );
}
