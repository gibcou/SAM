import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shines Autos Meticulously",
  description: "Best Auto Detailing Services in Bozeman, MT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="bg-gray-900 text-white min-h-full flex flex-col">
        <header className="bg-gray-800 p-4 sticky top-0 z-50">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">Shines Autos Meticulously</Link>
            <div className="space-x-4">
              <Link href="/" className="hover:text-blue-500">Home</Link>
              <Link href="/services" className="hover:text-blue-500">Services</Link>
              <Link href="/gallery" className="hover:text-blue-500">Gallery</Link>
              <Link href="/booking" className="hover:text-blue-500">Book Now</Link>
            </div>
          </nav>
        </header>
        <main className="flex-grow">
          {children}
        </main>
        <footer className="bg-gray-800 p-4 text-center">
          <p>&copy; {new Date().getFullYear()} Shines Autos Meticulously. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
