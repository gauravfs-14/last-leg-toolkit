"use client";

import type React from "react";
import { useState } from "react";
import { MailCheck, Mail } from "lucide-react";

export function SignupSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <div className="p-8 sm:p-10">
      <div className="flex items-center gap-3 mb-6">
        <Mail className="text-maroon-600 w-6 h-6" aria-hidden="true" />
        <h2 className="text-2xl font-bold text-charcoal-800">STAY UPDATED</h2>
      </div>

      {submitted ? (
        <div
          className="bg-green-50 p-6 rounded-lg border border-green-100 flex flex-col items-center justify-center text-center"
          role="alert"
        >
          <div className="bg-green-100 p-3 rounded-full mb-4">
            <MailCheck className="text-green-600 w-6 h-6" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-green-700 mb-2">Thank You!</h3>
          <p className="text-green-600">
            Your email has been submitted successfully. You&apos;ll receive
            updates soon.
          </p>
        </div>
      ) : (
        <>
          <p className="text-charcoal-600 mb-6">
            Be the first to know about news, blog posts, scholarships, events
            and much more!
          </p>
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                className={`w-full px-4 py-3 rounded-md border ${
                  error
                    ? "border-red-300 focus:border-red-500 focus:ring-red-200"
                    : "border-gray-300 focus:border-maroon-300 focus:ring-maroon-200"
                } focus:ring focus:ring-opacity-50 text-charcoal-700`}
                aria-label="Email address"
                aria-describedby={error ? "email-error" : undefined}
                aria-invalid={error ? "true" : "false"}
              />
              {error && (
                <p id="email-error" className="mt-1 text-sm text-red-600">
                  {error}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary w-full py-3 focus:outline-none focus:ring-2 focus:ring-maroon-500 focus:ring-offset-2"
            >
              Subscribe to Updates
            </button>
          </form>
        </>
      )}
    </div>
  );
}
