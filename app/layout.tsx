import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import MainBackground from "@/components/MainBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Crazy Game from Xitrumvndn",
    default: "Crazy Game from Xitrumvndn",
  },
  description: "Generated by create next app",
};

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${geistSans.variable} ${geistMono.variable} antialiased text-slate-600`}
      >
        <div className="relative flex flex-col items-center h-screen bg-fixed">
          <MainBackground />
          <Navbar />
          <div className="h-screen w-full bg-fixed bg-slate-900 z-[-1] opacity-30 absolute"></div>
          {children}
          <footer>Footer here!</footer>
        </div>
      </body>
    </html>
  );
}
