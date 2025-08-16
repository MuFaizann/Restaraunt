import type { Metadata } from "next"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Clock, Truck } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Order Online | Food Delivery from Rodrigos Taco Shop - Tulsa, OK",
  description:
    "Order authentic Mexican tacos and food online for delivery in Tulsa, OK. Available on DoorDash, UberEats, Postmates, and Caviar. Fast delivery from 1956 S Garnett Rd.",
  keywords: [
    "order online Tulsa",
    "food delivery Tulsa",
    "Mexican food delivery",
    "DoorDash Tulsa",
    "UberEats Tulsa",
    "Postmates Tulsa",
    "Caviar delivery",
    "online ordering",
    "delivery service",
    "Rodrigos Taco Shop delivery",
  ],
  openGraph: {
    title: "Order Online | Rodrigos Taco Shop - Tulsa, OK",
    description:
      "Order authentic Mexican tacos online for delivery in Tulsa, OK through DoorDash, UberEats, Postmates, and Caviar.",
    images: [
      {
        url: "/order-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Order Mexican Tacos Online for Delivery - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/order",
  },
}

const deliveryPlatforms = [
  {
    name: "DoorDash",
    description: "Fast delivery with real-time tracking",
    logo: "/images/doordash-logo.svg",
    url: "https://www.doordash.com/store/rodrigos-taco-shop-tulsa-1266667/15367547/?rwg_token=ACgRB3fyNoz_91YdOG_3bLzqS1WKbY09wXY_0YTaOLu8swVWgqnus9K_YcfKTud52YbYzHK64ij_qFQcaUGeBHQxh8c612-dtQ==&utm_campaign=gpa",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    name: "UberEats",
    description: "Quick and reliable food delivery",
    logo: "/images/uber-eats.svg",
    url: "https://www.ubereats.com/store/rodrigos-taco-shop/0xfeJYftSFGeEtHu4SnGGA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
    color: "bg-black hover:bg-gray-800",
  },
  {
    name: "Postmates",
    description: "Your favorite food, delivered fast",
    logo: "/images/postmates-1.svg",
    url: "https://postmates.com/store/rodrigos-taco-shop/0xfeJYftSFGeEtHu4SnGGA?utm_campaign=CM2508147-search-free-nonbrand-google-pas_e_all_acq_Global&utm_medium=search-free-nonbrand&utm_source=google-pas",
    color: "bg-yellow-500 hover:bg-yellow-600",
  },
  {
    name: "Caviar",
    description: "Premium food delivery service",
    logo: "/images/caviar-logo.png",
    url: "https://www.trycaviar.com/store/rodrigos-taco-shop-tulsa-1266667/?utm_campaign=gpa&rwg_token=ACgRB3fy2Q7ZD2uSmQQnyPjjUhimuvCH04gQF2xDSkuccNBwpVaio-F64X7q4NJmtOvyYGVu66ccZB7XOVWk7zaySeg3Bt68IA%3D%3D",
    color: "bg-purple-600 hover:bg-purple-700",
  },
]

export default function OrderPage() {
  const orderSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Order Online - Rodrigos Taco Shop",
    description:
      "Order authentic Mexican tacos and food online for delivery in Tulsa, OK through DoorDash, UberEats, Postmates, and Caviar",
    mainEntity: {
      "@type": "Restaurant",
      name: "Rodrigos Taco Shop",
      hasDeliveryService: {
        "@type": "DeliveryService",
        name: "Third-party delivery",
        provider: deliveryPlatforms.map((platform) => ({
          "@type": "Organization",
          name: platform.name,
          url: platform.url,
        })),
      },
    },
  }

  return (
    <div className="min-h-screen relative bg-orange-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orderSchema) }} />

      {/* HERO: image only at the top, below navbar, with "ORDER ONLINE" overlapping */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[480px] -mt-8">
        <Image
          src="/images/Rodri.PNG"
          alt="Rodri Hero"
          fill
          className="object-cover"
          quality={90}
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-8 w-full text-center px-4">
          <h1 className="text-6xl md:text-7xl font-bold text-white tracking-wide font-bebas-neue">
            ORDER ONLINE
          </h1>
        </div>
      </div>

      {/* CONTENT: clean slate (very light orange), NO more images */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-bebas-neue">ORDER ONLINE</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-bebas-neue">
            GET YOUR FAVORITE MEXICAN TACOS AND DISHES DELIVERED RIGHT TO YOUR DOOR IN TULSA, OK THROUGH OUR TRUSTED DELIVERY PARTNERS
          </p>
        </header>

        {/* Delivery Info */}
        <section className="grid md:grid-cols-3 gap-6 mb-12" aria-labelledby="delivery-info">
          <h2 id="delivery-info" className="sr-only">
            Delivery Information
          </h2>
          <Card className="text-center bg-transparent backdrop-blur-sm border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6 ">
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 font-bebas-neue">FAST DELIVERY</h3>
              <p className="text-gray-600">Average delivery time: 25-30 minutes</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-transparent backdrop-blur-sm border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <Truck className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 font-bebas-neue">FRESH & HOT</h3>
              <p className="text-gray-600">Food prepared fresh and delivered hot</p>
            </CardContent>
          </Card>

          <Card className="text-center bg-transparent backdrop-blur-sm border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300">
            <CardContent className="p-6">
              <ExternalLink className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-800 font-bebas-neue">EASY ORDERING</h3>
              <p className="text-gray-600">Simple ordering through your favorite app</p>
            </CardContent>
          </Card>
        </section>

        {/* Delivery Platforms */}
        <section className="space-y-6" aria-labelledby="delivery-platforms">
          <h2 id="delivery-platforms" className="text-2xl font-bold text-center text-gray-800 mb-8 font-bebas-neue">
            CHOOSE YOUR DELIVERY PLATFORM
          </h2>

          {deliveryPlatforms.map((platform, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-transparent backdrop-blur-sm border-2 border-black">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                    <div className="relative h-20 w-48">
                      <Image
                        src={platform.logo || "/placeholder.svg"}
                        alt={`${platform.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 200px, 200px"
                        loading="lazy"
                        quality={90}
                      />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2 font-bebas-neue">{platform.name}</h3>
                      <p className="text-gray-600">{platform.description}</p>
                    </div>
                  </div>

                  <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-white min-w-[150px] shadow-lg border-2 border-black">
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <span>Order Now</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Popular Items */}
        <section className="mt-16" aria-labelledby="popular-items">
          <h2 id="popular-items" className="text-2xl font-bold text-center text-gray-800 mb-8 font-bebas-neue">
            POPULAR FOR DELIVERY
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="overflow-hidden bg-transparent backdrop-blur-sm border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/tacoPic.avif"
                  alt="Mini Tacos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-800 font-bebas-neue">5 MINI TACOS</h3>
                <p className="text-gray-600 text-sm">Our most popular delivery item!</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-transparent backdrop-blur-sm border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/birriaTaco.avif"
                  alt="Birria Tacos"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-800 font-bebas-neue">(1) BIRRIA TACO</h3>
                <p className="text-gray-600 text-sm">Slow stewed beef taco with melted cheese and fresh onions</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden bg-transparent backdrop-blur-sm border-2 border-black shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <Image
                  src="/images/carneFries.avif"
                  alt="Combination Plate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  loading="lazy"
                  quality={75}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-1 text-gray-800 font-bebas-neue">CARNE ASADA FRIES</h3>
                <p className="text-gray-600 text-sm">Fresh fluffy fries with carne asada delivered hot!</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-transparent backdrop-blur-sm rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-bebas-neue">HUNGRY? ORDER NOW!</h2>
          <p className="text-gray-600 mb-6 font-bebas-neue">
            DON'T WAIT - YOUR FAVORITE MEXICAN TACOS AND DISHES ARE JUST A FEW CLICKS AWAY
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 border-2 border-black">
              <a href="/menu">View Full Menu</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-black text-gray-800 hover:bg-orange-200 bg-transparent"
            >
              <a href="/contact">Call to Order: (918) 605-5061</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
