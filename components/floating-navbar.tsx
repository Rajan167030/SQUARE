"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu" // Added DropdownMenuSeparator
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useActionState } from "react"
import { signup } from "@/app/actions/auth" // Import the signup Server Action

interface NavLink {
  name: string
  href: string
}

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Contact", href: "/contact" },
]

export function FloatingNavbar() {
  const pathname = usePathname()
  const [signupState, signupAction, isSignupPending] = useActionState(signup, { message: "" })

  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <div
        className={cn(
          "flex items-center justify-center gap-2",
          "bg-white/10 backdrop-blur-lg rounded-full",
          "px-4 py-2 shadow-xl border border-white/20",
          "transition-all duration-300 ease-in-out",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={cn(
              "relative px-4 py-2 rounded-full text-sm font-medium",
              "text-gray-200 hover:text-white",
              "transition-colors duration-200",
              pathname === link.href && "bg-white/20 text-white", // Active state styling using pathname
            )}
          >
            {link.name}
          </Link>
        ))}

        {/* Init Dropdown for Login and Signup */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className="relative px-4 py-2 rounded-full text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200"
            >
              Init
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-4 bg-neutral-900 border border-white/20 rounded-lg shadow-lg">
            {/* Login Form */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Login</h3>
              <form className="space-y-3">
                <div>
                  <Label htmlFor="login-email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="login-email"
                    type="email"
                    placeholder="email@example.com"
                    className="mt-1 bg-neutral-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="login-password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="login-password"
                    type="password"
                    placeholder="********"
                    className="mt-1 bg-neutral-800 border-gray-700 text-white"
                  />
                </div>
                <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                  Login
                </Button>
              </form>
            </div>
            <DropdownMenuSeparator className="my-4 bg-white/10" /> {/* Separator */}
            {/* Signup Form with Server Action */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-white">Sign Up</h3>
              <form action={signupAction} className="space-y-3">
                <div>
                  <Label htmlFor="signup-email" className="text-gray-300">
                    Email
                  </Label>
                  <Input
                    id="signup-email"
                    name="email" // Add name attribute for FormData
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="mt-1 bg-neutral-800 border-gray-700 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="signup-password" className="text-gray-300">
                    Password
                  </Label>
                  <Input
                    id="signup-password"
                    name="password" // Add name attribute for FormData
                    type="password"
                    placeholder="********"
                    required
                    className="mt-1 bg-neutral-800 border-gray-700 text-white"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                  disabled={isSignupPending}
                >
                  {isSignupPending ? "Signing Up..." : "Sign Up"}
                </Button>
                {signupState?.message && (
                  <p
                    className={cn(
                      "text-sm",
                      signupState.message.includes("Success") ? "text-green-400" : "text-red-400",
                    )}
                  >
                    {signupState.message}
                  </p>
                )}
              </form>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  )
}
