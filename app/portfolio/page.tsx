"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Filter, Heart, Sparkles } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const portfolioItems = [
    {
      id: 1,
      title: "French Ombre Elegance",
      category: "Gel Manicure",
      image: "/placeholder.svg?height=400&width=400",
      description: "Classic French tips with a modern ombre twist",
    },
    {
      id: 2,
      title: "Floral Garden Art",
      category: "Nail Art",
      image: "/placeholder.svg?height=400&width=400",
      description: "Hand-painted floral designs with intricate details",
    },
    {
      id: 3,
      title: "Glitter Gradient Dreams",
      category: "Special Design",
      image: "/placeholder.svg?height=400&width=400",
      description: "Stunning glitter fade from pink to gold",
    },
    {
      id: 4,
      title: "Classic Red Glamour",
      category: "Classic Manicure",
      image: "/placeholder.svg?height=400&width=400",
      description: "Timeless red polish with perfect application",
    },
    {
      id: 5,
      title: "Marble Masterpiece",
      category: "Nail Art",
      image: "/placeholder.svg?height=400&width=400",
      description: "Sophisticated marble effect with gold accents",
    },
    {
      id: 6,
      title: "Pastel Rainbow",
      category: "Gel Manicure",
      image: "/placeholder.svg?height=400&width=400",
      description: "Soft pastel colors in perfect harmony",
    },
    {
      id: 7,
      title: "Geometric Patterns",
      category: "Nail Art",
      image: "/placeholder.svg?height=400&width=400",
      description: "Modern geometric designs with clean lines",
    },
    {
      id: 8,
      title: "Rose Gold Luxury",
      category: "Special Design",
      image: "/placeholder.svg?height=400&width=400",
      description: "Luxurious rose gold with crystal embellishments",
    },
    {
      id: 9,
      title: "Butterfly Dreams",
      category: "Nail Art",
      image: "/placeholder.svg?height=400&width=400",
      description: "Delicate butterfly wings in vibrant colors",
    },
    {
      id: 10,
      title: "Ocean Waves",
      category: "Special Design",
      image: "/placeholder.svg?height=400&width=400",
      description: "Flowing ocean waves with pearl accents",
    },
    {
      id: 11,
      title: "Vintage Lace",
      category: "Nail Art",
      image: "/placeholder.svg?height=400&width=400",
      description: "Intricate lace patterns with vintage charm",
    },
    {
      id: 12,
      title: "Sunset Gradient",
      category: "Gel Manicure",
      image: "/placeholder.svg?height=400&width=400",
      description: "Beautiful sunset colors blending seamlessly",
    },
  ]

  const categories = ["All", "Gel Manicure", "Nail Art", "Classic Manicure", "Special Design"]

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 text-pink-300 w-6 h-6 animate-pulse" />
        <Sparkles className="absolute top-32 right-20 text-purple-300 w-4 h-4 animate-bounce" />
        <Heart className="absolute top-40 left-1/4 text-rose-300 w-5 h-5 animate-pulse delay-1000" />
        <Sparkles className="absolute top-60 right-1/3 text-pink-300 w-3 h-3 animate-bounce delay-500" />
      </div>

      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-pink-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-pink-600 hover:bg-pink-50">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Our Portfolio
                </h1>
                <p className="text-gray-600 text-lg">Showcasing our finest nail artistry</p>
              </div>
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="border-pink-300 text-pink-600 hover:bg-pink-50 bg-transparent">
                  <Filter className="h-4 w-4 mr-2" />
                  {selectedCategory}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {categories.map((category) => (
                  <DropdownMenuItem key={category} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredItems.map((item) => (
            <Card
              key={item.id}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-white"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 bg-gradient-to-br from-white to-pink-50">
                <Badge variant="outline" className="mb-3 text-purple-600 border-purple-300">
                  {item.category}
                </Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
