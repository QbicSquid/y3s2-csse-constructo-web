"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
export default function Registration() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    identityNumber: "",
    address: "",
    phoneNumber: "",
    role: "site manager",
    username: "",
    password: "",
  });

  const roles = ["site manager", "procurement staff", "manager", "supplier"];

  const handleRegister = () => {
   
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative">
      <div
        className="max-w-md w-full p-4 bg-white border border-gray-300 rounded-2xl"
        style={{ opacity: 1 }}
      >
        <h2 className="text-3xl font-extrabold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
              className="mt-1 p-2 block w-full rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="identityNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Identity Number
            </label>
            <input
              type="text"
              id="identityNumber"
              name="identityNumber"
              value={formData.identityNumber}
              onChange={(e) =>
                setFormData({ ...formData, identityNumber: e.target.value })
              }
              required
              className="mt-1 p-2 block w-full rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
              required
              className="mt-1 p-2 block w-full rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Telephone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              required
              className="mt-1 p-2 block w-full rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="role"
              className="block text-sm font-medium text-gray-700"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
              className="mt-1 p-2 block w-full rounded-md"
            >
              {roles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username/Email Address
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
              required
              className="mt-1 p-2 block w-full rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              className="mt-1 p-2 block w-full rounded-md"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-custom_blue-1 text-white rounded-md text-sm font-medium hover-bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
