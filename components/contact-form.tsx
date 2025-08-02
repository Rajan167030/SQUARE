"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend API
    console.log("Form submitted:", formData)
    alert("Thank you for your message! We will get back to you soon.")
    // Optionally reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="name" className="text-gray-300">
          Name
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-700 bg-neutral-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-300">
          Email address
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-700 bg-neutral-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
        />
      </div>

      <div>
        <Label htmlFor="subject" className="text-gray-300">
          Subject
        </Label>
        <Input
          id="subject"
          name="subject"
          type="text"
          required
          value={formData.subject}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-700 bg-neutral-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
        />
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-300">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-700 bg-neutral-800 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
        />
      </div>

      <div>
        <Button
          type="submit"
          className="flex w-full justify-center rounded-md bg-purple-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
          Send Message
        </Button>
      </div>
    </form>
  )
}
