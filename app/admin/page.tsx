"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Trash2, Edit, LogOut, Heart, Sparkles, User, BarChart3, Calendar, TrendingUp } from "lucide-react"
import { signIn, signOut, getCurrentUser } from "@/lib/supabase"
import Image from "next/image";


export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [loginForm, setLoginForm] = useState({ email: "", password: "" })
  const [portfolioItems, setPortfolioItems] = useState([
    {
      id: 1,
      title: "French Ombre Elegance",
      category: "Gel Manicure",
      description: "Classic French tips with a modern ombre twist",
      imageUrl: "/four.jpeg?height=300&width=400",
    },
    {
      id: 2,
      title: "Floral Garden Art",
      category: "Nail Art",
      description: "Hand-painted floral designs with intricate details",
      imageUrl: "/two.jpeg?height=300&width=400",
    },
  ])
  const [newItem, setNewItem] = useState({
    title: "",
    category: "",
    description: "",
    imageUrl: "",
  })

  useEffect(() => {
    checkUser()
  }, [])

  const checkUser = async () => {
    const user = await getCurrentUser()
    setIsAuthenticated(!!user)
    setLoading(false)
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await signIn(loginForm.email, loginForm.password)

    if (error) {
      alert(error.message)
    } else {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    await signOut()
    setIsAuthenticated(false)
  }

  const handleAddItem = (e: React.FormEvent) => {
    e.preventDefault()
    if (newItem.title && newItem.category && newItem.description) {
      const item = {
        id: Date.now(),
        ...newItem,
        imageUrl: newItem.imageUrl || "/placeholder.svg?height=300&width=400",
      }
      setPortfolioItems([...portfolioItems, item])
      setNewItem({ title: "", category: "", description: "", imageUrl: "" })
    }
  }

  const handleDeleteItem = (id: number) => {
    setPortfolioItems(portfolioItems.filter((item) => item.id !== id))
  }

  const stats = [
    {
      icon: Calendar,
      title: "Total Bookings",
      value: "156",
      change: "+12%",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: User,
      title: "New Clients",
      value: "42",
      change: "+8%",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Revenue",
      value: "KSh 45,200",
      change: "+15%",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: BarChart3,
      title: "Satisfaction",
      value: "98%",
      change: "+2%",
      color: "from-orange-500 to-amber-500",
    },
  ]

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-500"></div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 flex items-center justify-center p-4 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Heart className="absolute top-20 left-10 text-pink-300 w-6 h-6 animate-pulse" />
          <Sparkles className="absolute top-32 right-20 text-purple-300 w-4 h-4 animate-bounce" />
          <Heart className="absolute bottom-20 right-10 text-rose-300 w-5 h-5 animate-pulse delay-1000" />
          <Sparkles className="absolute bottom-32 left-20 text-pink-300 w-3 h-3 animate-bounce delay-500" />
        </div>

        <Card className="w-full max-w-md shadow-2xl border-0 bg-white/90 backdrop-blur-md">
          <CardHeader className="text-center pb-2">
            <div className="mb-4">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 animate-pulse" />
            </div>
            <CardTitle className="text-3xl bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-playfair">
              Jola Nails Admin
            </CardTitle>
            <p className="text-gray-600 font-medium">Manage your nail art portfolio</p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="border-pink-200 focus:border-pink-400"
                  placeholder="joseph@example.com"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-gray-700 font-medium">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="border-pink-200 focus:border-pink-400"
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 py-3 text-lg font-medium"
              >
                {loading ? "Signing In..." : "Sign In"}
              </Button>
              <p className="text-sm text-gray-600 text-center">Secure authentication powered by Supabase</p>
            </form>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 p-4 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-20 left-10 text-pink-300 w-6 h-6 animate-pulse" />
        <Sparkles className="absolute top-32 right-20 text-purple-300 w-4 h-4 animate-bounce" />
        <Heart className="absolute bottom-20 right-10 text-rose-300 w-5 h-5 animate-pulse delay-1000" />
        <Sparkles className="absolute bottom-32 left-20 text-pink-300 w-3 h-3 animate-bounce delay-500" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-playfair">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 text-lg font-medium">Welcome back, Joseph! ✨</p>
          </div>
          <Button
            variant="outline"
            onClick={handleLogout}
            className="border-pink-300 text-pink-600 hover:bg-pink-50 font-medium bg-transparent"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg bg-white/80 backdrop-blur-md hover:shadow-xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-3xl font-bold text-gray-900 font-playfair">{stat.value}</p>
                    <p className="text-sm text-green-600 font-medium">{stat.change} from last month</p>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="portfolio" className="space-y-6">
          <TabsList className="bg-white/80 backdrop-blur-md shadow-lg rounded-full p-1">
            <TabsTrigger
              value="portfolio"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-full font-medium"
            >
              Portfolio Management
            </TabsTrigger>
            <TabsTrigger
              value="add-item"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-full font-medium"
            >
              Add New Work
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-purple-500 data-[state=active]:text-white rounded-full font-medium"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="portfolio">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 font-playfair">Portfolio Items</CardTitle>
                <p className="text-gray-600 font-medium">Manage your nail art showcase</p>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {portfolioItems.map((item) => (
                    <Card
                      key={item.id}
                      className="relative group hover:shadow-xl transition-all duration-300 border-0 shadow-md"
                    >
                      <CardContent className="p-4">
                        <div className="absolute top-2 right-2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button size="sm" variant="outline" className="bg-white/90 hover:bg-white">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white"
                            onClick={() => handleDeleteItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="mb-4">
                          <Image
                            src={item.imageUrl || "/one.jpeg"}
                            alt={item.title}
                            width={400}
                            height={400}
                            className="w-full h-32 object-cover rounded-lg shadow-sm"
                          />
                        </div>
                        <Badge variant="outline" className="mb-2 text-purple-600 border-purple-300 font-medium">
                          {item.category}
                        </Badge>
                        <h3 className="font-semibold mb-2 text-gray-800 font-playfair">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="add-item">
            <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-800 font-playfair">Add New Portfolio Item</CardTitle>
                <p className="text-gray-600 font-medium">Showcase your latest nail art creation</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleAddItem} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="title" className="text-gray-700 font-medium">
                        Title
                      </Label>
                      <Input
                        id="title"
                        value={newItem.title}
                        onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                        className="border-pink-200 focus:border-pink-400"
                        placeholder="e.g., French Ombre Elegance"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="category" className="text-gray-700 font-medium">
                        Category
                      </Label>
                      <Select
                        value={newItem.category}
                        onValueChange={(value) => setNewItem({ ...newItem, category: value })}
                      >
                        <SelectTrigger className="border-pink-200 focus:border-pink-400">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Gel Manicure">Gel Manicure</SelectItem>
                          <SelectItem value="Nail Art">Nail Art</SelectItem>
                          <SelectItem value="Classic Manicure">Classic Manicure</SelectItem>
                          <SelectItem value="Special Design">Special Design</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-gray-700 font-medium">
                      Description
                    </Label>
                    <Textarea
                      id="description"
                      value={newItem.description}
                      onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                      className="border-pink-200 focus:border-pink-400"
                      placeholder="Describe the nail art design..."
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="imageUrl" className="text-gray-700 font-medium">
                      Upload Image
                    </Label>
                    <Input
                      id="image"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            const imageUrl = URL.createObjectURL(file);
                            setNewItem({ ...newItem, imageUrl });
                        }
                    }}
                      className="border-pink-200 focus:border-pink-400"
                      placeholder="Upload an image of the nail art"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-lg py-3 font-medium shadow-lg"
                  >
                    <Plus className="h-5 w-5 mr-2" />
                    Add to Portfolio
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 font-playfair">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-sm text-gray-600">New booking from Sarah M.</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <p className="text-sm text-gray-600">Portfolio updated with new design</p>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <p className="text-sm text-gray-600">5-star review received</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0 bg-white/90 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-800 font-playfair">Popular Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Gel Manicure</span>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Nail Art</span>
                      <span className="text-sm text-gray-600">30%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Classic Manicure</span>
                      <span className="text-sm text-gray-600">25%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
