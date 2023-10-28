"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import "@/firebase/config/firebase.config";

export default function RootLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("user", user);
    if (!user) {
      // router.push("/login");
    }
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-row w-full h-full">
        <Sidebar />
        <div className="w-full h-full mr-4 rounded bg-custom_blue-2">{children}</div>
      </div>
    </div>
  );
}
