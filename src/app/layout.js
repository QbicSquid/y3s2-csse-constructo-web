import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  const headerHeight = "40px";

  return (
    <html lang="n">
      <body className={inter.className}>
        <div className="flex flex-col h-screen">
          <div className="w-full h-10 bg-red-500">HEADER</div>
          <div className="flex flex-row w-full h-full">
            <div className="bg-blue-500 ">SIDEBAR</div>
            <div className="w-full h-full">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
