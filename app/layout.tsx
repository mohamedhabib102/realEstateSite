import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Real estate - منصة عقارية متكاملة",
  description:
    "RealEstate هي منصة عقارية متكاملة تربط بين الملاك، المستأجرين، والمستثمرين. اكتشف خدمات البيع، الإيجار، التسويق، وإدارة العقارات بسهولة وأمان.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <head>
        <link rel="icon" href="data:," />
      </head>
      <body className={`${poppins.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
