
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Import global styles
import Footer from "./components/Footer";
import Header from "./components/Header";
import FloatingButtons from "./components/FloatingButtons";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CKTV India",
  description: "Your Trusted News Source",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
       
        {children}
        <FloatingButtons />
        <Footer />
      </body>
    </html>
  );
}
