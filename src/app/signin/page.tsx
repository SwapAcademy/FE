"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { AlertCircle } from "lucide-react";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate sign-in logic
    if (email === "user@example.com" && password === "password") {
      // Successful sign-in
      setError("");
      alert("Sign in successful!");
    } else {
      // Failed sign-in
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 relative">
        {/* Images 1*/}

        <div className="h-full w-full flex flex-col justify-between items-center">
          <div className="relative">
            <Image src="/signin_1.svg" width={800} height={300} objectFit="cover" alt="People collaborating and learning" />
          </div>
          <div className="relative">
            <Image src="/laptop_signin.svg" width={400} height={100} objectFit="cover" alt="People collaborating and learning" />
          </div>
          <div className="relative self-end">
            <Image src="/signin_2.svg" width={800} height={300} objectFit="cover" alt="People collaborating and learning" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <Link href="/" className="flex items-center justify-center mb-6">
              <Image src="/swapAcademy.png" alt="Logo" width={100} height={100} />
            </Link>
          </div>
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Hello, Welcome Back!</h2>
            <p className="mt-2 text-sm text-gray-600">log in and keep growing</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <legend>Email Address</legend>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <Input id="email-address" name="email" type="email" autoComplete="email" required className="rounded-t-md" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <legend>Password</legend>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <Input id="password" name="password" type="password" autoComplete="current-password" required className="rounded-b-md" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <Button type="submit" className="mt-5 w-full bg-sky-500 hover:bg-white hover:text-sky-500 text-white">
                  Log in
                </Button>
              </div>
            </div>

            {/* Gap between "Log in" and "Or Continue With" */}
            <div className="mt-4 text-center">
              <p>Or Continue With</p>
            </div>

            {/* Gap for Google button */}
            <Button type="submit" className="w-full mt-2 bg-white hover:bg-sky-500 hover:text-white text-black gap-1">
              <Image src="/google.svg" width={20} height={20} alt="Google logo" />
              <span>Google</span>
            </Button>

            <div className="text-center">
              <p>Already have an account?</p>
              <span className="text-sm">
                <Link href="/forgot-password" className="font-medium text-sky-500 hover:text-teal-500">
                  Login
                </Link>
              </span>
            </div>

            {error && (
              <div className="flex items-center p-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <AlertCircle className="flex-shrink-0 inline w-4 h-4 mr-3" />
                <span className="sr-only">Error</span>
                <div>{error}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
