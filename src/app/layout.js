import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Contructo",
  description: "Construction supplies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-custom_grey-3"}>{children}</body>
    </html>
  );
}
