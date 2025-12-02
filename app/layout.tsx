import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import UserSync from "@/components/UserAsync/UserAsync";
import TanStackProvider from "@/components/Providers/TanstackProvider";
import ToastProvider from "@/components/Providers/ToastProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dental Care - AI Powered Dental Assistant",
  description:
    "Get instant dental advice through voice calls with our AI assistant. Avaiable 24/7.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <TanStackProvider>
      <ClerkProvider>
        <html lang="en">
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased dark `}
          >
            <ToastProvider/>
            <UserSync />
            {children}
          </body>
        </html>
      </ClerkProvider>
    </TanStackProvider>
  );
}
