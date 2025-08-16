import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail } from "lucide-react"
import { MapSection } from "@/components/map-section"
import { GoogleMaps } from "@/components/google-maps"

export const metadata: Metadata = {
  title: "Location & Contact | Visit Rodrigos Taco Shop in Tulsa, OK",
  description:
    "Visit Rodrigos Taco Shop at 1956 S Garnett Rd, Tulsa, OK 74128. Get directions, hours, phone number, and contact information. Open 7 AM-12 AM daily, Fri-Sat until 2 AM.",
  keywords: [
    "restaurant location Tulsa",
    "contact information",
    "restaurant hours",
    "directions Tulsa",
    "phone number",
    "restaurant address",
    "visit restaurant",
    "Garnett Road Tulsa",
    "74128",
  ],
  openGraph: {
    title: "Location & Contact | Rodrigos Taco Shop - Tulsa, OK",
    description: "Visit us at 1956 S Garnett Rd, Tulsa, OK. Get directions, hours, and contact information.",
    images: [
      {
        url: "/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigos Taco Shop Location - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/contact",
  },
}

const businessHours = [
  { day: "Sunday", time: "7:00 AM - 12:00 AM" },
  { day: "Monday", time: "7:00 AM - 12:00 AM" },
  { day: "Tuesday", time: "7:00 AM - 12:00 AM" },
  { day: "Wednesday", time: "7:00 AM - 12:00 AM" },
  { day: "Thursday", time: "7:00 AM - 12:00 AM" },
  { day: "Friday", time: "7:00 AM - 2:00 AM" },
  { day: "Saturday", time: "7:00 AM - 2:00 AM" },
]

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Rodrigos Taco Shop",
    description: "Contact information and location details for Rodrigos Taco Shop in Tulsa, OK",
    mainEntity: {
      "@type": "Restaurant",
      name: "Rodrigos Taco Shop",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1956 S Garnett Rd",
        addressLocality: "Tulsa",
        addressRegion: "OK",
        postalCode: "74128",
        addressCountry: "US",
      },
      telephone: "+19186055061",
      geo: {
        "@type": "GeoCoordinates",
        latitude: "36.1314",
        longitude: "-95.8911",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Sunday",
          opens: "07:00",
          closes: "00:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "07:00",
          closes: "00:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday", "Saturday"],
          opens: "07:00",
          closes: "02:00",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen relative bg-orange-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />

      {/* HERO: image only at the top, below navbar, with "LOCATION & CONTACT" overlapping */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] -mt-8">
        <Image
          src="/images/rodri.PNG"
          alt="Rodri Hero"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 w-full text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wide font-bebas-neue">
            LOCATION & CONTACT
          </h1>
        </div>
      </div>

      {/* CONTENT: clean slate (very light orange), NO more images */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-bebas-neue">LOCATION & CONTACT</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-bebas-neue">
            FIND US, CALL US, OR SEND US A MESSAGE. WE'D LOVE TO HEAR FROM YOU!
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <section aria-labelledby="contact-info">
            <h2 id="contact-info" className="sr-only">
              Contact Information
            </h2>
            <div className="space-y-8">
              <Card className="bg-transparent border-2 border-black">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-bebas-neue">
                    <MapPin className="h-5 w-5 text-orange-600" />
                    <span>ADDRESS</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="text-gray-600 mb-4 not-italic">
                    1956 S Garnett Rd
                    <br />
                    Tulsa, OK 74128
                  </address>
                  <Button className="bg-orange-600 hover:bg-orange-700 border-2 border-black">
                    <a
                      href="https://maps.google.com/?q=1956+S+Garnett+Rd,+Tulsa,+OK+74128"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get Directions
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-2 border-black">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-bebas-neue">
                    <Phone className="h-5 w-5 text-orange-600" />
                    <span>PHONE</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    <a href="tel:+19186055061" className="hover:text-orange-600 transition-colors">
                      (918) 605-5061
                    </a>
                  </p>
                  <Button variant="outline" className="border-2 border-black text-gray-800 hover:bg-orange-600 bg-orange-400">
                    <a href="tel:+19186055061">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-transparent border-2 border-black">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 font-bebas-neue">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <span>HOURS</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-gray-600">
                    {businessHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{schedule.day}:</span>
                        <time>{schedule.time}</time>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Contact Form */}
          <section aria-labelledby="contact-form">
            <Card className="bg-transparent border-2 border-black">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 font-bebas-neue">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <span id="contact-form">SEND US A MESSAGE</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" action="/api/contact" method="POST">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" required placeholder="Your first name" className="border-2 border-black" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" required placeholder="Your last name" className="border-2 border-black" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <Input id="email" name="email" type="email" required placeholder="your.email@example.com" className="border-2 border-black" />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone (Optional)
                    </label>
                    <Input id="phone" name="phone" type="tel" placeholder="(555) 123-4567" className="border-2 border-black" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us how we can help you..."
                      rows={5}
                      className="border-2 border-black"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700 border-2 border-black">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Interactive Map Section */}
        <section className="py-20 px-4 bg-transparent">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 font-bebas-neue">
              Find Us <span className="text-red-600">Easily</span>
            </h2>
            <p className="text-2xl text-gray-600 font-bebas-neue">Conveniently located on Garnett Road with ample free parking</p>
            <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-red-700 mx-auto rounded-full mt-4"></div>
          </div>
          <Card className="overflow-hidden shadow-2xl border-0 rounded-none">
  <CardContent className="p-0 border-2 border-black rounded-none">
    <GoogleMaps
      address="1956 S Garnett Rd, Tulsa, OK 74128"
      businessName="Rodrigos Taco Shop"
      className="h-96 rounded-none"
    />
  </CardContent>
</Card>

        </div>
      </section>
      </div>
    </div>
  )
}
