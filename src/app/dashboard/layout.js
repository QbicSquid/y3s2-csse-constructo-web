"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import "@/firebase/config/firebase.config";
import rootGuard from "@/utils/rootGuard";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    rootGuard();
  }, [pathname]);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        <div className="w-full h-full mr-4 rounded bg-custom_blue-2">
          {children}
        </div>
      </div>
    </div>
  );
}
