import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";
import { FloatingNav } from "@/components/FloatingNavbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ShopModern - Modern eCommerce",
  description: "A modern eCommerce application built with Next.js",
};

const navItems = [
  {
    name: "Products",
    link: "#products",
  },
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Providers>
          <FloatingNav navItems={navItems} />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
