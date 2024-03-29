'use client'
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Roboto({
  subsets: ["latin"]
  , weight: ['700']
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };
import {CartContext} from './_context/CartContext'
import { useState } from "react";

export default function RootLayout({ children }) {
  const [cart, setCart] = useState([]);
  return (
    <ClerkProvider>
      <CartContext.Provider value={{cart,setCart}}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>
  );
}
