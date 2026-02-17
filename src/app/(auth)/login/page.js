"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [role, setRole] = useState("Founder");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-sm p-8 w-[420px]">

      {/* Heading */}
      <h2 className="text-[24px] font-semibold text-gray-900">
        Welcome back
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Login to continue to your account.
      </p>

      {/* Toggle */}
      <div className="mt-6">
        <div className="flex bg-gray-100 p-1 rounded-lg w-fit">
          <button
            type="button"
            onClick={() => setRole("Founder")}
            className={`px-4 py-1.5 text-sm rounded-md transition ${
              role === "Founder"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600"
            }`}
          >
            Founder
          </button>

          <button
            type="button"
            onClick={() => setRole("Investor")}
            className={`px-4 py-1.5 text-sm rounded-md transition ${
              role === "Investor"
                ? "bg-indigo-600 text-white shadow-sm"
                : "text-gray-600"
            }`}
          >
            Investor
          </button>
        </div>
      </div>

      {/* Form */}
      <form className="mt-6 space-y-4">

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Type your email address"
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none text-sm focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Type your password"
              className="w-full bg-gray-100 rounded-lg px-3 py-2 pr-10 outline-none text-sm focus:ring-2 focus:ring-indigo-500"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600 transition"
            >
              {showPassword ? (
                <EyeOff size={18} />
              ) : (
                <Eye size={18} />
              )}
            </button>
          </div>
        </div>

        {/* Forgot Password */}
        <div className="flex justify-end">
          <Link
            href="#"
            className="text-sm text-indigo-600 hover:underline"
          >
            Forgot password?
          </Link>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg mt-2 hover:bg-indigo-700 transition"
        >
          Login
        </button>
      </form>

      {/* Footer */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Don’t have an account?{" "}
        <Link href="/register" className="text-indigo-600 font-medium underline underline-offset-4 decoration-2">
          Signup
        </Link>
      </p>
    </div>
  );
}
