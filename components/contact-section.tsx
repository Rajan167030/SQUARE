"use client"

import ContactForm from "./contact-form"

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Have questions or want to work together? Send us a message!
            </p>
          </div>
        </div>
        {/* Contact form now takes full width and is centered */}
        <div className="flex justify-center">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
