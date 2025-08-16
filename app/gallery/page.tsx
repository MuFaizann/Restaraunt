import type { Metadata } from "next"
import Image from "next/image"
import { ImageGallery } from "@/components/image-gallery"
import { Breadcrumbs } from "@/components/breadcrumbs"

export const metadata: Metadata = {
  title: "Photo Gallery | See Our Delicious Mexican Tacos & Food - Tulsa, OK",
  description:
    "Browse our photo gallery featuring mouth-watering Mexican tacos, burritos, and dishes at Rodrigos Taco Shop in Tulsa, OK. See why customers love our authentic Mexican cuisine.",
  keywords: [
    "Mexican food photos Tulsa",
    "taco shop gallery",
    "food photography",
    "Mexican dishes Tulsa",
    "restaurant interior",
    "authentic Mexican cuisine",
    "Rodrigos Taco Shop photos",
  ],
  openGraph: {
    title: "Photo Gallery | Rodrigos Taco Shop - Tulsa, OK",
    description: "Browse our photo gallery featuring mouth-watering Mexican tacos and dishes in Tulsa, OK.",
    images: [
      {
        url: "/gallery-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rodrigos Taco Shop Food Gallery - Tulsa, OK",
      },
    ],
  },
  alternates: {
    canonical: "/gallery",
  },
}

const galleryImages = [
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Rodrigos Taco Shop interior with warm Mexican decor and comfortable seating",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Fresh fish tacos with cabbage slaw and chipotle mayo",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Sizzling chicken and beef fajitas with peppers and onions",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Loaded nachos with cheese, jalapeños, and fresh guacamole",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Grilled shrimp with Mexican spices and lime",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Kitchen staff preparing fresh Mexican tacos and dishes",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Cheese enchiladas with red sauce and sour cream",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Fresh ceviche with shrimp, lime, and cilantro",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Main dining area with Mexican artwork and comfortable booths",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Traditional churros with cinnamon sugar and chocolate sauce",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Fresh margaritas and Mexican beverages",
  },
  {
    src: "/images/bg2Rodri.jpg",
    alt: "Mexican street corn with cotija cheese and chili powder",
  },
]

export default function GalleryPage() {
  const imageGallerySchema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: "Rodrigos Taco Shop Photo Gallery",
    description: "Photo gallery showcasing our delicious Mexican tacos, dishes, and restaurant atmosphere in Tulsa, OK",
    image: galleryImages.map((img) => ({
      "@type": "ImageObject",
      url: `https://rodrigostacoshop.com${img.src}`,
      description: img.alt,
    })),
  }

  return (
    <div className="min-h-screen relative bg-orange-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(imageGallerySchema) }} />

      {/* HERO: image only at the top, below navbar, with "OUR GALLERY" overlapping */}
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
            OUR GALLERY
          </h1>
        </div>
      </div>

      {/* CONTENT: clean slate (very light orange), NO more images */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-bebas-neue">PHOTO GALLERY</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-bebas-neue">
            TAKE A VISUAL JOURNEY THROUGH OUR DELICIOUS TACOS AND WELCOMING ATMOSPHERE IN TULSA, OK
          </p>
        </header>

        {/* Gallery Grid */}
        <section aria-labelledby="photo-gallery">
          <h2 id="photo-gallery" className="sr-only">
            Restaurant Photo Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group overflow-hidden border-2 border-black rounded-lg shadow-lg">
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Visit Us CTA */}
        <div className="text-center mt-16 p-8 bg-orange-50 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 font-bebas-neue">EXPERIENCE IT YOURSELF</h2>
          <p className="text-gray-600 mb-6 font-bebas-neue">VISIT US TODAY AND TASTE THE AUTHENTIC FLAVORS THAT MAKE US SPECIAL</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-100 text-orange-500 rounded-none hover:bg-black transition-colors border-2 border-black"
            >
              Get Directions
            </a>
            <a
              href="/order"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-400 text-white rounded-none hover:bg-orange-500 transition-colors border-2 border-black"
            >
              Order Online
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
