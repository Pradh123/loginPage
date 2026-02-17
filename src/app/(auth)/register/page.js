"use client";
import { useState } from "react";
import Link from "next/link";
export default function Register() {
  const [role, setRole] = useState("Founder");

  return (
      <div className="flex flex-col gap-6">
      <h1 className="text-[#4F46E5] text-[18px] font-semibold mx-4 md:mx-0">RAZESEED</h1>
    <div className="bg-white rounded-xl shadow-sm p-8 w-[420px]">

      {/* Heading */}
      <h2 className="text-[24px] font-semibold text-gray-900">
        Create your account
      </h2>

      <p className="text-sm text-gray-500 mt-1">
        Get started in minutes. No credit card required.
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
      <form className="mt-6 space-y-4 max-h-[210px] overflow-y-auto thin-scrollbar">

        {/* Signup As */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Signup as
          </label>
          <select className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none text-sm">
            <option>Individual</option>
            <option>Company</option>
          </select>
        </div>

        {/* Country */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Country
          </label>
          <select className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none text-sm">
            <option>India</option>
            <option>United States</option>
          </select>
        </div>

        {/* Full Name */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Type your full name"
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none text-sm"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Email Address
          </label>
          <input
            type="email"
            placeholder="Type your email address"
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none text-sm"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-600 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Type your password"
            className="w-full bg-gray-100 rounded-lg px-3 py-2 outline-none text-sm"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2.5 rounded-lg mt-2 hover:bg-indigo-700 transition"
        >
          Create Account
        </button>
      </form>

      {/* Footer */}
      <p className="text-sm text-center text-gray-600 mt-6">
        Already have an account?{" "}
        <Link href="/login" className="text-indigo-600 font-medium underline underline-offset-4 decoration-2">
          Login
        </Link>
      </p>
    </div>
    </div>
  );
}
