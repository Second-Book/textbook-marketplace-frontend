import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UserStoreProvider from "@/providers/UserStoreProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduMarket",
  description: "Your place for used books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <UserStoreProvider>
          {children}
        </UserStoreProvider>
      </body>
    </html>
  );
}
