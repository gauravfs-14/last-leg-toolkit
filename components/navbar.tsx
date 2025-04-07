"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import navData from "@/data/navigation.json"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path
    }
    return pathname.startsWith(path)
  }

  return (
    <header className="w-full">
      {/* Logo Area */}
      <div className="bg-white py-4">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center gap-3" aria-label="Last-Leg Toolkit Home">
            <div className="bg-maroon-900 text-white p-2 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 7v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V7"></path>
                <path d="M19 7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2"></path>
                <path d="M13 21v-2a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v2"></path>
              </svg>
            </div>
            <div>
              <h1 className="text-maroon-900 text-2xl font-bold tracking-tight leading-none">{navData.logo.text}</h1>
              <p className="text-charcoal-600 text-sm">{navData.logo.subtext}</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-maroon-900 text-white">
        <div className="container mx-auto">
          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex justify-center items-center w-full overflow-x-auto"
            aria-label="Main Navigation"
          >
            <div className="flex">
              {navData.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`px-3 lg:px-5 py-4 text-white transition-colors text-center font-medium relative flex items-center justify-center h-14 whitespace-nowrap text-sm lg:text-base ${
                    isActive(link.path) ? "bg-maroon-800" : "hover:bg-maroon-800"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.title}
                  {isActive(link.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-gold-600" aria-hidden="true"></span>
                  )}
                </Link>
              ))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-between py-3">
            <span className="text-white font-medium px-4 text-sm">Menu</span>
            <button
              className="text-white p-2 mr-2"
              onClick={() => setIsOpen(!isOpen)}
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden" id="mobile-menu">
              <nav
                className="flex flex-col border-t border-maroon-800 max-h-[70vh] overflow-y-auto"
                aria-label="Mobile Navigation"
              >
                {navData.links.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className={`px-4 py-3 text-white transition-colors border-b border-maroon-800 block text-sm ${
                      isActive(link.path) ? "bg-maroon-800 border-l-4 border-l-gold-600" : "hover:bg-maroon-800"
                    }`}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

