import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Utensils, Camera, ShoppingBag, Star, Heart } from "lucide-react"
import { GoogleMaps } from "@/components/google-maps"
import { SpecialMenuItem } from "@/components/special-menu-item"
import { BorderSeparator } from "@/components/border-separator"


// Data for the new highlights section, structured for the new layout
const dailySpecialsData = [
  {
    day: "5 Mini Tacos",
    description: "5 generously filled tacos with your choice of meat, topped with fresh onions and cilantro\n Packed with flavor and size, crowd favorite for a reason",
    price: "$12.99",
    image: "/images/tacoPic.avif",
  },
  {
    day: "1 Birria Taco",
    description: "Juicy slow-stewed beef taco packed with rich flavor, folded in a golden, crispy tortilla and topped with fresh onions, cilantro, and melted cheese. \n(only with the order of 2 or more tacos it’ll come with consome)",
    price: "$4.00",
    image: "/images/birriaTaco.avif",
  },
  {
    day: "Carne Asada Fries",
    description: "A generous bed of crispy golden fries loaded with tender, grilled carne asada, topped with creamy guacamole, rich sour cream, fresh pico de gallo, and melted cheese.",
    price: "$15.50",
    image: "/images/carneFries.avif",
  },
  {
    day: "Super Burrito",
    description:
      "Your choice of meat: grilled chicken, carnitas, beef, al pastor, steak, lengua, barbacoa, ground beef,\n With rice, beans, guacamole, pico de gallo, & sour cream.",
    price: "$12.99",
    image: "/images/supBurrito.avif",
  },
  {
    day: "Shrimp Burrito / Fish Burrito",
    description: "Burrito filled with fresh shrimp, onions, bell peppers, rice, tomato, lettuce, and cheese\n Burrito filled with fresh fish, lettuce, cheese, pico de gallo and tartar sauce",
    price: "$11.50",
    image: "/images/bg2Rodri.jpg",
  },
  {
    day: "Shrimp Tostada",
    description:
      "onions, bell peppers, tomatoes, lettuce, cheese & guacamole.",
    price: "$8.50",
    image: "/images/bg2Rodri.jpg",
  },
  {
    day: "Shrimp Cocktail",
    description:
      "pico de gallo, cucumber and avacados",
    price: "$14.99",
    image: "/images/bg2Rodri.jpg",
  },
  {
    day: "Shrimp Platters",
    description: "Rancheros Platter: includes sautéed shrimp with onions, bell peppers, and tomatoes, simmered in a savory ranchero sauce.\n Garlic Shrimp Platter: Sautéed shrimp with fresh garlic and butter, often accompanied by a tomato-based sauce.\n A La Diable Platter: Shrimp sautéed in a fiery, spicy sauce, typically includes onions and bell peppers.",
    price: "$13.99",
    image: "/images/bg2Rodri.jpg",
  },
]


export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/images/rodri.PNG"
          alt="Delicious Mexican tacos and food"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
       

        {/* Decorative elements */}
       

        <div className="relative z-10 text-center text-white px-4 max-w-5xl fade-in-up">
         
         


          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-orange-500"></div>
            <span className="text-3xl md:text-2xl text-white mx-6 text-shadow font-bebas-neue">AUTHENTIC MEXICAN FLAVOR</span>
            <div className="w-16 h-0.5 bg-orange-500"></div>
          </div>
          <h1 className="text-8xl md:text-7xl font-bold mb-6 font-bebas-neue">
            <span className="text-white">RODRIGOS</span>
            <br />
            <span className="text-orange-400">TACO SHOP</span>
          </h1>
          <p className="text-3xl md:text-3xl mb-8 text-shadow max-w-3xl mx-auto leading-relaxed font-bebas-neue">
            COME TASTE THE DIFFERENCE
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-16">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white text-2xl px-8 py-4 font-bebas-neue">
              <Link href="/menu" className="flex items-center space-x-2">
                <Utensils className="h-5 w-5" />
                <span>View Menu</span>
              </Link>
            </Button>
            <Button className="border-2 border-orange-600 text-orange-600 hover:bg-orange-50 text-2xl px-8 py-4 bg-white/10 backdrop-blur-sm font-bebas-neue">
              <Link href="/order" className="flex items-center space-x-2">
                <ShoppingBag className="h-5 w-5" />
                <span>Order Now</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
       

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 smooth-bounce">
              
              <div className="animate-bounce text-white">
                <svg className="w-8 h-8 stroke-white" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>

        
      </section>
      
      <BorderSeparator className="bg-green-200/100" />
      {/* Quick Info Cards */}
      <section className="py-20 px-4 bg-orange-200/65 relative overflow-hidden">
      
  {/* Full-width border image */}
 

  <div className="max-w-7xl mx-auto relative z-10">
  


    {/* Heading */}
    <div className="text-center mb-16">
                  <h2 className="text-6xl md:text-6xl font-bold text-gray-800 font-bebas-neue">
              RODRIGOS <span className="text-orange-600 font-bebas-neue">SPECIALS</span>
            </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-orange-500 mx-auto rounded-full mt-4"></div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 bg-white squared-lg shadow-xl overflow-hidden">
  {/* Left Column: Single Large Image */}
  <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full overflow-hidden">
    <Image
      src="/images/specPic.avif"
      alt="Delicious Mexican tacos and authentic dishes"
      fill
      className="object-cover"
      sizes="(max-width: 1024px) 100vw, 50vw"
      priority
    />
  </div>

      {/* Right Column: Specials List */}
      <div className="p-8 lg:p-12 bg-black/80 relative z-0">
        <div className="relative z-10">
          <h3 className="text-3xl font-bold text-orange-500 mb-8 font-bebas-neue">
            CUSTOMER FAVORITES / LUNCH / DINNER SELECTION
          </h3>
          <div className="space-y-4 mb-12">
            {dailySpecialsData.slice(0, 4).map((item, index) => (
              <SpecialMenuItem
                key={index}
                name={item.day.toUpperCase()}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          <h3 className="text-3xl font-bold text-orange-500 mb-8 font-bebas-neue">SEAFOOD SELECTION</h3>
          <div className="space-y-4">
            {dailySpecialsData.slice(4).map((item, index) => (
              <SpecialMenuItem
                key={index}
                name={item.day.toUpperCase()}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            ))}
          </div>
          <div className="text-center mt-12">
           
            <Button className="border-2 border-orange-600 text-orange-600 bg-transparent px-8 py-4 text-lg font-semibold font-bebas-neue
  transition-transform duration-300 ease-in-out
  hover:bg-orange-600 hover:text-white hover:scale-105
  rounded-none
">
  <Link href="/menu">Full Menu</Link>
</Button>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Border Separator */}
      <BorderSeparator className="bg-green-200/65" />

      {/* Featured Items */}
      <section
  className="py-20 px-4  bg-orange-200/65">
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />

  <div className="relative max-w-6xl mx-auto z-10">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-bebas-neue uppercase">
        <span className="text-black">CUSTOMER</span> <span className="text-orange-500">FAVORITES</span>
      </h2>

      <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto">
        <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
        <p className="text-2xl text-black font-bebas-neue tracking-wide">
          MOST POPULAR DISHES IN TULSA
        </p>
        <div className="w-16 h-1 bg-orange-500 rounded-full"></div>
      </div>
    </div>

    <div className="grid md:grid-cols-3 gap-8 items-stretch">
      {[
        {
          image: "/images/tacoPic.avif",
          title: "5 MINI tacos",
          description:
            "5 generously filled tacos with your choice of meat, topped with fresh onions and cilantro",
          badge: "Most Popular",
          badgeColor: "bg-orange-600 border-2 border-black",
        },
        {
          image: "/images/birriaTaco.avif",
          title: "1 Birria Taco",
          description:
            "slow-stewed beef taco packed with rich flavor, folded in a golden, crispy tortilla and topped with fresh onions, cilantro, and melted cheese.",
          badge: "Second Most Popular",
          badgeColor: "bg-orange-500 border-2 border-black",
        },
        {
          image: "/images/carneFries.avif",
          title: "Carne Asada Fries",
          description:
            "Bed of crispy golden fries loaded with tender, grilled carne asada, topped with creamy guacamole, rich sour cream, fresh pico de gallo, and melted cheese.",
          badge: "Third Most Popular",
          badgeColor: "bg-orange-600 border-2 border-black",
        },
      ].map((item, index) => (
        <div key={index} className="group relative h-full">
          <Card
            className="
              card-hover 
              overflow-hidden 
              border-2 border-black 
              shadow-xl 
              flex flex-col h-full
              transition-transform duration-500 ease-in-out
              hover:scale-[1.03]
            "
          >
            {/* Image Section with right border */}
            <div
              className="
                relative h-64 
                border-r-2 border-black 
                transition-border duration-500 ease-in-out
                group-hover:border-r-4
              "
            >
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
                quality={80}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300" />
              <div
                className={`absolute top-4 left-4 px-3 py-1 ${item.badgeColor} text-white text-sm font-semibold rounded-none shadow-lg`}
              >
                {item.badge}
              </div>
            
            </div>

            {/* Text Section */}
            <CardContent className="p-6 flex flex-col flex-grow ">
              <h3 className="text-2xl font-bold mb-3 text-orange-500 group-hover:text-red-600 transition-colors font-bebas-neue">
                {item.title}
              </h3>
              <p className="leading-relaxed flex-grow font-work-sans">
                {item.description}
              </p>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Border Separator */}
      <BorderSeparator className="bg-green-200/65" />

      {/* Quick Map Preview */}
      <section className="py-20 px-4 bg-orange-200/65">
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
{/* 
      {/* Call to Action */}
      <section className="py-20 px-4 bg-orange-200/65">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 font-bebas-neue">
            Ready for an <span className="text-black">Authentic Experience</span>?
          </h2>
          <p className="text-xl text-orange-500 mb-8 max-w-2xl mx-auto font-bebas-neue">
            Don't wait any longer. Come and enjoy the best Mexican flavors in Tulsa.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-transparent text-black hover:bg-orange-500  text-lg px-8 py-4 rounded-lg border-2 border-black hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link href="/menu" className="flex items-center space-x-2">
                <Utensils className="h-5 w-5" />
                <span>View Full Menu</span>
              </Link>
            </Button>
            <Button className="bg-transparent text-black hover:bg-orange-500 font-bold text-lg px-8 py-4 rounded-lg border-2 border-black hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Link href="/order" className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Order Now!</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
