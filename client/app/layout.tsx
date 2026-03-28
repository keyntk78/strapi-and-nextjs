import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingControls from "@/components/FloatingControls";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "510CIC - Công ty Cổ phần Tư vấn và Kiểm định Xây dựng 510",
  description: "Công ty Cổ phần Tư vấn và Kiểm định Xây dựng 510 - Chuyên gia kiểm định & tư vấn hàng đầu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="light">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${inter.className} min-h-screen bg-surface font-body text-on-surface antialiased flex flex-col`}>
        <NextTopLoader 
          color="#002b49"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
          shadow="0 0 10px #002b49,0 0 5px #002b49"
        />
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <FloatingControls />
      </body>
    </html>
  );
}
