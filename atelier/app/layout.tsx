import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import ReduxProvider from "./redux/ReduxProvider";
import Navbar from "./components/navbar/NavBar";
import { Suspense } from "react";
import Footer from "./components/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <Navbar />
          <Suspense>
            <main>{children}</main>
            <Footer />
          </Suspense>
        </ReduxProvider>
      </body>
    </html>
  );
}
