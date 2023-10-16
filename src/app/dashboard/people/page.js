"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function People() {
  const router = useRouter();
  useEffect(() => {
    const username = localStorage.getItem("username");
    if (!username) {
      router.push("/login");
    }
  }, []);

  return <div>CONTENT</div>;
}