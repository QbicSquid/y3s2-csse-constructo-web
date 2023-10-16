"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Orders() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");
    console.log(username);
    if (!username) {
      router.push("/login");
    }
  }, []);

  return <div>CONTENT</div>;
}
