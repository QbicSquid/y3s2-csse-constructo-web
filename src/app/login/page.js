"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("username")) {
      router.push("dashboard/orders");
    }
  }, []);

  const handleLogin = () => {
    localStorage.setItem("username", "someuser");
    router.push("/dashboard/orders");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
    </div>
  );
}
