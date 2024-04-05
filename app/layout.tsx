import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BDD FE Study",
  description: "BDD FE Study by dal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        <div className="h-full w-full p-6 bg-gradient-to-br from-[#d7d6d6] to-[#434343]">
          {children}
        </div>
      </body>
    </html>
  );
}
