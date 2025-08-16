"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) return
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > heroHeight * 0.001)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isOpen])

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/menu", label: "MENU" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/contact", label: "LOCATION" },
    { href: "/order", label: "ORDER ONLINE" },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled && !isOpen
          ? "bg-black/70 backdrop-blur-md shadow-lg"
          : !isOpen
          ? "bg-transparent"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Mobile: Hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden order-1 text-gray-300 hover:bg-gray-800"
            onClick={() => setIsOpen(true)}
          >
            <Menu className="h-6 w-6 text-orange-500" />
          </Button>

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-3 group order-2 lg:order-1 ml-auto lg:ml-0"
          >
            <div className="relative">
              <div className="w-12 h-12 bg-white rounded-lg p-1 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Image
                  src="/images/RodrigosLog.avif"
                  alt="Rodrigos Taco Shop Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-2xl font-bold text-white">Rodrigos</div>
              <div className="text-sm text-orange-300 font-medium -mt-1">
                Taco Shop
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1 order-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 font-medium text-lg transition-all duration-300 ${
                  isActive(item.href)
                    ? "text-orange-500"
                    : "text-gray-300 hover:text-orange-500"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4 order-3">
            <Button
              className="bg-transparent border-2 border-orange-500 text-orange-500 font-bold px-6 py-2 rounded-none shadow-lg uppercase tracking-wide transition-all duration-300 hover:bg-orange-500 hover:text-black hover:scale-105"
            >
              <Link href="/order" className="flex items-center space-x-2">
                <span>ORDER NOW!</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300"
            onClick={() => setIsOpen(false)}
          ></div>

          {/* Side Panel */}
          <div className="fixed top-0 left-0 w-72 h-full bg-black z-50 shadow-2xl transform transition-transform duration-300 ease-in-out animate-slideIn overflow-y-auto">
            <div className="flex flex-col space-y-4 p-4 mt-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-3 font-medium text-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? "text-orange-500"
                      : "text-gray-300 hover:text-orange-500"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-700">
                <div className="flex items-center space-x-2 px-4 py-2 text-lg text-gray-300 mb-3">
                  <Phone className="h-4 w-4 text-orange-500" />
                  <span className="font-medium">(918) 605-5061</span>
                </div>
                <Button className="w-full bg-black border-2 border-orange-500 text-orange-500 font-bold text-lg py-3 rounded-none shadow-md hover:bg-orange-500 hover:text-black">
                  <Link href="/order" className="block w-full text-center">
                    ORDER NOW!
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Animations */}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  )
}
