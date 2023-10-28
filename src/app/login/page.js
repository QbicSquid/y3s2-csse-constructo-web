"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getUser } from "@/firebase/users";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (event) => {
    if (event.target.name === "email") setEmail(event.target.value);
    else if (event.target.name === "password") setPassword(event.target.value);
  };

  const handleLogin = async () => {
    const user = await getUser(email, password);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard/orders");
    } else window.alert("Invalid email, password combination");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-4 space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold text-center">Login</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="email"
                name="email"
                type="text"
                value={email}
                onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={handleChange}
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md group bg-custom_grey-1 hover:bg-custom_blue-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between">
          <button
            onClick={handleLogout}
            className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800"
          >
            Logout
          </button>
          <a
            href="/register"
            className="text-sm text-indigo-600 cursor-pointer hover:text-indigo-800"
          >
            Have not registered yet? Register
          </a>
        </div>
      </div>
    </div>
  );
}
