"use client" // Mark as client component for Spline

import { ContactForm } from "@/components/contact-form"
// No longer importing Spline from @splinetool/react-spline for iframe approach

export default function ContactPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 py-12 px-4 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-8 rounded-lg bg-neutral-900 p-8 shadow-lg md:flex-row md:p-12">
        {/* Spline Component on the left using iframe */}
        <div className="relative flex h-64 w-full items-center justify-center md:h-[400px] md:w-1/2">
          <iframe
            src="https://my.spline.design/chips-HV2vvVJntwKyP3JpzLoykqUW/" // Use the public URL for iframe
            frameBorder="0"
            width="100%"
            height="100%"
            className="rounded-lg" // Add some styling to the iframe itself
          ></iframe>
        </div>

        {/* Contact Form on the right */}
        <div className="w-full space-y-8 md:w-1/2">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Contact Us</h2>
            <p className="mt-2 text-center text-sm text-gray-400">
              We'd love to hear from you! Please fill out the form below.
            </p>
          </div>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
