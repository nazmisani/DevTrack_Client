"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Register() {
  const [currentStep, setCurrentStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const goToNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validate first step
    if (currentStep === 1) {
      if (!name.trim() || !email.trim()) {
        setError("Please fill out all fields");
        return;
      }
      // Simple email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address");
        return;
      }
      setCurrentStep(2);
    }
  };

  const goToPreviousStep = () => {
    setCurrentStep(1);
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Password validation
    if (password !== confirmPassword) {
      setError("Passwords do not match. Please try again.");
      setIsLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setIsLoading(false);
      return;
    }

    // This is just a placeholder for actual registration logic
    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Placeholder for registration logic
      // const response = await yourRegistrationFunction(name, email, password);
      // if successful, redirect to dashboard or login
      router.push("/login");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className=" min-h-screen relative overflow-hidden bg-black text-white">
      {/* Animated background elements - similar to login page for consistency */}
      <div className="absolute w-full h-full overflow-hidden z-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>{" "}
        {/* Code-like background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "10%", top: "15%", transform: "rotate(45deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "25%", top: "30%", transform: "rotate(90deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "40%", top: "60%", transform: "rotate(135deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "65%", top: "25%", transform: "rotate(180deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "80%", top: "70%", transform: "rotate(225deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "15%", top: "85%", transform: "rotate(270deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "35%", top: "10%", transform: "rotate(30deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "55%", top: "45%", transform: "rotate(60deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "75%", top: "55%", transform: "rotate(120deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "20%", top: "50%", transform: "rotate(150deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "60%", top: "85%", transform: "rotate(210deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "90%", top: "40%", transform: "rotate(315deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "5%", top: "65%", transform: "rotate(20deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "45%", top: "20%", transform: "rotate(80deg)" }}
          >
            {"{</>"}
          </div>
          <div
            className="absolute text-xs md:text-sm"
            style={{ left: "85%", top: "8%", transform: "rotate(100deg)" }}
          >
            {"{</>"}
          </div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-16">
        <div className="w-full max-w-md backdrop-blur-lg bg-black bg-opacity-40 rounded-3xl border border-gray-800 shadow-2xl p-8 md:p-10 animate-float">
          {/* Glass-like border effect */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-t-2 border-l-2 border-cyan-500 opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-b-2 border-r-2 border-purple-500 opacity-50"></div>

          <div className="flex justify-center mb-8">
            <h1 className="relative inline-block text-4xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500">
                &lt;Register/&gt;
              </span>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-500 rounded-full animate-ping"></div>
            </h1>
          </div>

          {/* Step indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-center">
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStep === 1
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "bg-gray-700"
                  }`}
                >
                  <span className="text-white text-sm">1</span>
                </div>
                <div
                  className={`h-0.5 w-12 ${
                    currentStep === 2
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "bg-gray-700"
                  }`}
                ></div>
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    currentStep === 2
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600"
                      : "bg-gray-700"
                  }`}
                >
                  <span className="text-white text-sm">2</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-1 text-xs text-gray-400">
              <span className="w-20 text-center">Personal Info</span>
              <span className="w-20 text-center">Security</span>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 rounded-lg border border-red-500 bg-red-500 bg-opacity-10 text-red-400 text-sm">
              {error}
            </div>
          )}

          {currentStep === 1 ? (
            <form onSubmit={goToNextStep} className="space-y-6">
              {/* Name field */}
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg 
                      bg-gray-900 bg-opacity-50 focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                      text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email field */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg 
                      bg-gray-900 bg-opacity-50 focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                      text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Continue Button */}
              <button
                type="submit"
                className="group relative w-full px-6 py-3 text-base font-medium overflow-hidden rounded-lg"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-70"></span>
                <span
                  className="absolute inset-0 w-full h-full transition-all duration-300 
                  bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-0 
                  group-hover:opacity-70 group-hover:scale-110"
                ></span>
                <span
                  className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 
                  group-hover:animate-[shine_1.5s_ease-in-out_infinite]"
                ></span>
                <span className="relative flex items-center justify-center z-10 text-white">
                  Continue
                </span>
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Password field */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg 
                      bg-gray-900 bg-opacity-50 focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                      text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Password must be at least 8 characters long
                </p>
              </div>

              {/* Confirm Password field */}
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-300"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg 
                      bg-gray-900 bg-opacity-50 focus:ring-2 focus:ring-cyan-500 focus:border-transparent 
                      text-white placeholder-gray-500 transition-all duration-300"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <div className="flex space-x-3">
                {/* Back Button */}
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className="group relative w-1/3 px-6 py-3 text-base font-medium overflow-hidden rounded-lg border border-gray-700"
                >
                  <span className="relative flex items-center justify-center text-gray-300 group-hover:text-white transition-colors duration-300">
                    Back
                  </span>
                </button>

                {/* Register Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-2/3 px-6 py-3 text-base font-medium overflow-hidden rounded-lg"
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 opacity-70"></span>
                  <span
                    className="absolute inset-0 w-full h-full transition-all duration-300 
                    bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 opacity-0 
                    group-hover:opacity-70 group-hover:scale-110"
                  ></span>
                  <span
                    className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-white to-transparent opacity-30 
                    group-hover:animate-[shine_1.5s_ease-in-out_infinite]"
                  ></span>
                  <span className="relative flex items-center justify-center z-10 text-white">
                    {isLoading ? (
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    ) : null}
                    {isLoading ? "Registering..." : "Register"}
                  </span>
                </button>
              </div>
            </form>
          )}

          <div className="mt-8 pt-6 border-t border-gray-800 text-center text-sm text-gray-400">
            <span>Already have an account? </span>
            <Link
              href="/login"
              className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 transition-colors duration-300"
            >
              Login here
            </Link>
          </div>

          {/* Social registration option */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-black bg-opacity-50 text-gray-500">
                  Or register with
                </span>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="group inline-flex items-center justify-center py-2 px-6 border border-gray-800 rounded-md bg-black bg-opacity-50 hover:bg-gray-900 transition-all duration-300 hover:border-cyan-500"
              >
                <svg
                  className="h-5 w-5 mr-2 text-gray-500 group-hover:text-white transition-colors duration-300"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                </svg>
                <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  Register with Google
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
