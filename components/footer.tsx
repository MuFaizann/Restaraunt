import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      {/* Decorative top border */}
      <div className="restaurant-divider"></div>

      {/* Main footer content */}
      <div className="bg-gradient-to-br from-black to-black text-white py-8 relative">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="restaurant-pattern h-full w-full"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid gap-12 md:grid-cols-4">
            {/* Restaurant Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-14 h-14">
                  <Image
                    src="/images/RodrigosLog.avif"
                    alt="Rodrigos Taco Shop Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Rodrigos Taco Shop</h3>
                  <p className="text-orange-200 text-base">Authentic Mexican Cuisine</p>
                </div>
              </div>
              <p className="text-gray-200 mb-6 leading-relaxed text-base">
                Experience authentic Mexican tacos and traditional cuisine prepared with fresh ingredients and family
                recipes in the heart of Tulsa, Oklahoma.
              </p>

              {/* Social Media */}
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Facebook className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gradient-to-r from-blue-400 to-blue-500 rounded-lg flex items-center justify-center hover:shadow-lg hover:scale-110 transition-all duration-300"
                >
                  <span className="text-white font-bold text-sm">𝕏</span>
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-200">Contact</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-orange-300 mt-1 flex-shrink-0" />
                  <div className="text-gray-200 text-base">
                    <div className="font-medium">1956 S Garnett Rd</div>
                    <div>Tulsa, OK 74128</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-300 flex-shrink-0" />
                  <a
                    href="tel:+19186055061"
                    className="text-gray-200 hover:text-orange-300 transition-colors text-base"
                  >
                    (918) 605-5061
                  </a>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-orange-300 mt-1 flex-shrink-0" />
                  <div className="text-gray-200 text-base">
                    <div>Sun-Thu: 7 AM - 12 AM</div>
                    <div>Fri-Sat: 7 AM - 2 AM</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-orange-200">Quick Links</h4>
              <div className="space-y-2">
                <Link
                  href="/menu"
                  className="block text-gray-200 hover:text-orange-300 transition-colors text-base hover:translate-x-1 transform duration-200 "
                >
                  Our Menu
                </Link>
                <Link
                  href="/gallery"
                  className="block text-gray-200 hover:text-orange-300 transition-colors text-base hover:translate-x-1 transform duration-200 "
                >
                  Photo Gallery
                </Link>
                <Link
                  href="/contact"
                  className="block text-gray-200 hover:text-orange-300 transition-colors text-base hover:translate-x-1 transform duration-200 "
                >
                  Location & Contact
                </Link>
                <Link
                  href="/order"
                  className="block text-gray-200 hover:text-orange-300 transition-colors text-base hover:translate-x-1 transform duration-200 "
                >
                  Order Online
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div className="border-t border-orange-700 mt-10 pt-6 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-base text-gray-300">
              <p>© 2024 Rodrigos Taco Shop. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span>Made with ❤️ in Tulsa, OK</span>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  <span>Open Now</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
