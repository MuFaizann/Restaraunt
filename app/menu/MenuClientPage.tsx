"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MenuItemCard } from "@/components/menu-item-card" // keeping original import (not used, per "no cards")
import { Breadcrumbs } from "@/components/breadcrumbs"      // keeping original import to match your file
import { BorderSeparator } from "@/components/border-separator"
const menuCategories = [
  {
    id: "burritos",
    name: "Burritos",
    items: [
      {
        name: "Carne Asada Burrito",
        description: "Grilled steak with rice, beans, guacamole, and pico de gallo",
        price: "$12.99",
        image: "/images/carne-asada-burrito.png",
      },
      {
        name: "Carnitas Burrito",
        description: "Slow-cooked pork with rice, beans, and fresh salsa",
        price: "$11.99",
        image: "/images/carne-asada-burrito.png",
      },
      {
        name: "Fish Burrito",
        description: "Grilled fish with cabbage, rice, and chipotle mayo",
        price: "$13.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Bean & Rice Burrito",
        description: "Vegetarian option with refried beans, rice, and cheese",
        price: "$9.99",
        image: "/images/carne-asada-burrito.png",
      },
    ],
  },
  {
    id: "tacos",
    name: "Tacos",
    items: [
      {
        name: "Fish Tacos (3)",
        description: "Grilled fish with cabbage slaw and chipotle mayo",
        price: "$11.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Carne Asada Tacos (3)",
        description: "Grilled steak with onions and cilantro",
        price: "$10.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Shrimp Tacos (3)",
        description: "Grilled shrimp with avocado and pico de gallo",
        price: "$12.99",
        image: "/images/fish-tacos.png",
      },
      {
        name: "Chicken Tacos (3)",
        description: "Seasoned chicken with lettuce and cheese",
        price: "$9.99",
        image: "/images/fish-tacos.png",
      },
    ],
  },
  {
    id: "enchiladas",
    name: "Enchiladas",
    items: [
      {
        name: "Cheese Enchiladas",
        description: "Three cheese enchiladas with red sauce and sour cream",
        price: "$10.99",
        image: "/images/chicken-enchiladas.png",
      },
      {
        name: "Chicken Enchiladas",
        description: "Three chicken enchiladas with green tomatillo sauce",
        price: "$12.99",
        image: "/images/chicken-enchiladas.png",
      },
      {
        name: "Shrimp Enchiladas",
        description: "Three shrimp enchiladas with creamy white sauce",
        price: "$14.99",
        image: "/images/shrimp-enchiladas.png",
      },
    ],
  },
  {
    id: "quesadillas",
    name: "Quesadillas",
    items: [
      {
        name: "Cheese Quesadilla",
        description: "Melted cheese in a flour tortilla with sour cream and guacamole",
        price: "$8.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Chicken Quesadilla",
        description: "Grilled chicken and cheese with peppers and onions",
        price: "$11.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Shrimp Quesadilla",
        description: "Grilled shrimp and cheese with bell peppers",
        price: "$13.99",
        image: "/images/cheese-quesadilla.png",
      },
    ],
  },
  {
    id: "combinations",
    name: "Combination Plates",
    items: [
      {
        name: "Two Item Combo",
        description: "Choose any two: taco, enchilada, tamale, or chile relleno with rice and beans",
        price: "$13.99",
        image: "/images/combination-plate.png",
      },
      {
        name: "Three Item Combo",
        description: "Choose any three items with rice and beans",
        price: "$16.99",
        image: "/images/combination-plate.png",
      },
    ],
  },
  {
    id: "breakfast",
    name: "Breakfast Burritos & Plates",
    items: [
      {
        name: "Breakfast Burrito",
        description: "Eggs, cheese, potatoes, and choice of bacon or sausage",
        price: "$8.99",
        image: "/images/breakfast-burrito.png",
      },
      {
        name: "Huevos Rancheros",
        description: "Two eggs over easy on tortillas with ranchero sauce",
        price: "$9.99",
        image: "/images/breakfast-burrito.png",
      },
      {
        name: "Chorizo & Eggs",
        description: "Scrambled eggs with Mexican sausage, served with tortillas",
        price: "$10.99",
        image: "/images/breakfast-burrito.png",
      },
    ],
  },
  {
    id: "kids",
    name: "Kid Meals",
    items: [
      {
        name: "Kid's Quesadilla",
        description: "Cheese quesadilla with rice and beans",
        price: "$6.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Kid's Taco",
        description: "One soft taco with rice and beans",
        price: "$6.99",
        image: "/images/cheese-quesadilla.png",
      },
      {
        name: "Kid's Chicken Strips",
        description: "Chicken strips with fries",
        price: "$7.99",
        image: "/images/cheese-quesadilla.png",
      },
    ],
  },
  {
    id: "sides",
    name: "Side Orders",
    items: [
      {
        name: "Guacamole & Chips",
        description: "Fresh made guacamole with tortilla chips",
        price: "$6.99",
        image: "/images/guacamole-chips.png",
      },
      {
        name: "Rice & Beans",
        description: "Mexican rice and refried beans",
        price: "$4.99",
        image: "/images/combination-plate.png",
      },
      {
        name: "Chips & Salsa",
        description: "Crispy tortilla chips with house salsa",
        price: "$3.99",
        image: "/images/guacamole-chips.png",
      },
    ],
  },
]

export default function MenuClientPage() {
  const [activeCategory, setActiveCategory] = useState("burritos")
  const activeItems =
    menuCategories.find((cat) => cat.id === activeCategory)?.items || []

  const menuSchema = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: `${menuCategories.find((cat) => cat.id === activeCategory)?.name} Menu`,
    description: `Authentic Mexican ${activeCategory} made with traditional recipes and fresh ingredients`,
    hasMenuSection: {
      "@type": "MenuSection",
      name: menuCategories.find((cat) => cat.id === activeCategory)?.name,
      hasMenuItem: activeItems.map((item) => ({
        "@type": "MenuItem",
        name: item.name,
        description: item.description,
        offers: {
          "@type": "Offer",
          price: item.price.replace("$", ""),
          priceCurrency: "USD",
        },
      })),
    },
  }

  return (
    <div className="min-h-screen relative bg-orange-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(menuSchema) }}
      />

      {/* HERO: image only at the top, below navbar, with "OUR MENU" overlapping */}
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
            OUR MENU
          </h1>
        </div>
      </div>
      <BorderSeparator className="bg-green-200/100" />
      {/* Subtitle below the image */}
 

      {/* CONTENT: clean slate (very light orange), NO more images */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Tabs — orange bordered & active highlight */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => {
            const isActive = activeCategory === category.id
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 border-2 font-semibold transition-transform duration-200 squared-md
                  border-black
                  ${isActive
                    ? "bg-orange-500 text-black scale-[1.03] shadow"
                    : "bg-transparent text-black hover:bg-orange-500/90 hover:text-black hover:scale-[1.02]"
                  }`}
              >
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Modern horizontal list (like boxes but not boxes) */}
        <section aria-labelledby="menu-items">
          <h2 id="menu-items" className="sr-only">
            {menuCategories.find((cat) => cat.id === activeCategory)?.name} Items
          </h2>

          {/* Responsive grid for horizontal layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {activeItems.map((item, idx) => (
              <div key={idx} className="group p-4 flex flex-col h-full">
                <div className="flex items-baseline justify-between gap-6 mb-2">
                  <h3 className="text-2xl md:text-3xl tracking-wide text-gray-900" style={{ fontFamily: 'Teimer Light, serif' }}>
                    {item.name.toUpperCase()}
                  </h3>
                  <span className="text-lg md:text-xl font-bold text-gray-900 shrink-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed flex-grow" style={{ fontFamily: 'Liberation Sans, sans-serif' }}>
                  {item.description}
                </p>
                {/* Enhanced orange border separator - now perfectly aligned */}
                <div className="mt-5 h-0.5 bg-gradient-to-r from-orange-400 via-orange-400 to-orange-400 group-hover:from-orange-400 group-hover:via-orange-400 group-hover:to-orange-400 transition-all duration-300 rounded-full shadow-sm" />
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-16 bg-orange-50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-black-400 mb-4">
            Ready to Order?
          </h2>
          <p className="text-black-400 mb-6">
            Get your favorite dishes delivered right to your door
          </p>
          <Button
            asChild
            size="lg"
            className="bg-transparent hover:bg-orange-500 text-black font-bold border-2 border-black rounded-none"
          >
            <a href="/order">Order Online Now</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
