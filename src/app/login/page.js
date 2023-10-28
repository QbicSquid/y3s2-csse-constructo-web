"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const handleLogin = () => {
    localStorage.setItem("username", "someuser");
    router.push("/dashboard/orders");
  };

  const handleLogout = () => {
    localStorage.removeItem("username");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-4">
        <div>
          <h2 className="text-3xl font-extrabold text-center">Login</h2>
        </div>
        <form className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
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
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLogin}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-custom_grey-1 hover:bg-custom_blue-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
        </form>

        <div className="flex justify-between items-center">
          <button
            onClick={handleLogout}
            className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            Logout
          </button>
          <a
            href="/register"
            className="text-sm text-indigo-600 hover:text-indigo-800 cursor-pointer"
          >
            Have not registered yet? Register
          </a>
        </div>
      </div>
    </div>
  );
}
