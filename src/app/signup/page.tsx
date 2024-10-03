"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import Swal from "sweetalert2";
import { AlertCircle } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validasi form
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      return;
    } else if (name === "" || email === "" || password === "") {
      setError("All fields are required.");
      return;
    } else if (!agreeTerms) {
      setError("You must agree to the terms and conditions.");
      return;
    }

    // Nembak ke backend
    const res = await fetch("https://be-swap-academy.nioke-studio.my.id/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }), // Schema data registrasi
    });

    const data = await res.json();

    if (res.ok) {
      setSuccess("Registration successful! You can now log in.");
      setError("");

      // SweetAlert success
      Swal.fire({
        title: "Success!",
        text: "Registration successful! You can now log in.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form setelah berhasil
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setAgreeTerms(false);
    } else {
      setError(data.message || "Registration failed. Please try again.");
      setSuccess("");

      // SweetAlert error
      Swal.fire({
        title: "Error!",
        text: data.message || "Registration failed. Please try again.",
        icon: "error",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="hidden lg:block lg:w-1/2 relative">
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
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Join Swap Academy!</h2>
            <p className="mt-2 text-sm text-gray-600">Create an account and start learning today</p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <legend>Full Name</legend>
                <Input id="name" name="name" type="text" required className="rounded-t-md" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <legend>Email Address</legend>
                <Input id="email-address" name="email" type="email" autoComplete="email" required placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <legend>Password</legend>
                <Input id="password" name="password" type="password" autoComplete="new-password" required placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div>
                <legend>Confirm Password</legend>
                <Input id="confirm-password" name="confirm-password" type="password" required placeholder="Confirm password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
              </div>
              <div>
                <Button type="submit" className="mt-5 w-full bg-sky-500 hover:bg-white hover:text-sky-500 text-white">
                  Sign Up
                </Button>
              </div>
            </div>

            <div className="mt-4 text-center">
              <p>Or Continue With</p>
            </div>

            <Button type="button" className="w-full mt-2 bg-white hover:bg-sky-500 hover:text-white text-black gap-1">
              <Image src="/google.svg" width={20} height={20} alt="Google logo" />
              <span>Google</span>
            </Button>

            <div className="flex items-center justify-between mt-4">
              <Checkbox id="agree-terms" checked={agreeTerms} onCheckedChange={(checked) => setAgreeTerms(checked as boolean)} />
              <label htmlFor="agree-terms" className="ml-2 text-sm text-gray-900">
                I agree to the Terms and Conditions
              </label>
            </div>

            <div className="text-center mt-4">
              <p>Already have an account?</p>
              <span className="text-sm">
                <Link href="/signin" className="font-medium text-sky-500 hover:text-teal-500">
                  Log In
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
            {success && (
              <div className="flex items-center p-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                <div>{success}</div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
