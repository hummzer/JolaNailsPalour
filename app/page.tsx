"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Heart,
  Sparkles,
  Calendar,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Users,
  Award,
  ThumbsUp,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [bookingForm, setBookingForm] = useState({
    name: "",
    service: "",
    phone: "",
  })

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      title: "Classic Manicure",
      description: "Professional nail care with cuticle treatment, shaping, and polish application.",
      price: "KSh 1,500",
      duration: "45 min",
      features: ["Cuticle Care", "Nail Shaping", "Base & Top Coat", "Polish Application"],
    },
    {
      title: "Gel Manicure",
      description: "Long-lasting gel polish that stays chip-free for up to 3 weeks.",
      price: "KSh 2,500",
      duration: "60 min",
      features: ["Gel Polish", "UV Curing", "Long-lasting", "Chip Resistant"],
    },
    {
      title: "Nail Art Design",
      description: "Custom nail art designs tailored to your style and preferences.",
      price: "KSh 3,500",
      duration: "90 min",
      features: ["Custom Design", "Hand Painted", "Rhinestones", "Creative Patterns"],
    },
    {
      title: "Pedicure Deluxe",
      description: "Relaxing foot treatment with exfoliation, massage, and polish.",
      price: "KSh 2,000",
      duration: "75 min",
      features: ["Foot Soak", "Exfoliation", "Massage", "Callus Removal"],
    },
  ]

  const recentWork = [
    {
      title: "French Ombre",
      category: "Gel Manicure",
      image: "/one.jpeg?height=300&width=300",
    },
    {
      title: "Floral Art",
      category: "Nail Art",
      image: "/two.jpeg?height=300&width=300",
    },
    {
      title: "Glitter Gradient",
      category: "Special Design",
      image: "/three.jpeg?height=300&width=300",
    },
    {
      title: "Classic Red",
      category: "Classic Manicure",
      image: "/four.jpeg?height=300&width=300",
    },
    {
      title: "Marble Effect",
      category: "Nail Art",
      image: "/five.jpeg?height=300&width=300",
    },
    {
      title: "Pastel Dreams",
      category: "Gel Manicure",
      image: "/six.jpeg?height=300&width=300",
    },
  ]

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Happy Clients",
    },
    {
      icon: Award,
      number: "3",
      label: "Years Experience",
    },
    {
      icon: ThumbsUp,
      number: "100%",
      label: "Satisfaction Rate",
    },
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const selectedService = services.find((s) => s.title === bookingForm.service)
    if (!selectedService) return

    const message = `Hi Joseph! I'd like to book an appointment:
    
    Name: ${bookingForm.name}
    Service: ${selectedService.title}
    Price: ${selectedService.price}
    Duration: ${selectedService.duration}
    Phone: ${bookingForm.phone}

    Please confirm my appointment. Thank you!`

    const whatsappUrl = `https://wa.me/254115656723?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")

    // Reset form
    setBookingForm({ name: "", service: "", phone: "" })
  }

  const handleCall = () => {
    window.location.href = "tel:+254115656723"
  }

  return (
    <div className="min-h-screen font-poppins">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap');
        
        .font-inter {
          font-family: 'Inter', sans-serif;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .font-poppins {
          font-family: 'Poppins', sans-serif;
        }
        
        .animate-bounce-slow {
          animation: bounce 3s infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        @keyframes wiggle {
          0%, 7% { transform: rotateZ(0); }
          15% { transform: rotateZ(-15deg); }
          20% { transform: rotateZ(10deg); }
          25% { transform: rotateZ(-10deg); }
          30% { transform: rotateZ(6deg); }
          35% { transform: rotateZ(-4deg); }
          40%, 100% { transform: rotateZ(0); }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent font-playfair">
                Jola Nails
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8 font-medium">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection("work")}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Our Work
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-gray-700 hover:text-pink-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-pink-600">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-pink-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("home")}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors w-full text-left font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors w-full text-left font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("work")}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors w-full text-left font-medium"
              >
                Our Work
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors w-full text-left font-medium"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-gray-700 hover:text-pink-600 transition-colors w-full text-left font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 relative overflow-hidden flex items-center justify-center"
      >
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <Heart className="absolute top-20 left-10 text-pink-300 w-6 h-6 animate-pulse" />
          <Sparkles className="absolute top-32 right-20 text-purple-300 w-4 h-4 animate-bounce" />
          <Heart className="absolute top-40 left-1/4 text-rose-300 w-5 h-5 animate-pulse delay-1000" />
          <Sparkles className="absolute top-60 right-1/3 text-pink-300 w-3 h-3 animate-bounce delay-500" />
          <Heart className="absolute bottom-40 right-10 text-purple-300 w-4 h-4 animate-pulse delay-2000" />
          <Sparkles className="absolute bottom-60 left-20 text-rose-300 w-5 h-5 animate-bounce delay-1500" />
          <Heart className="absolute bottom-20 left-1/3 text-pink-300 w-6 h-6 animate-pulse delay-500" />
          <Sparkles className="absolute top-1/2 left-10 text-purple-300 w-4 h-4 animate-bounce delay-2000" />
          <Heart className="absolute top-1/2 right-16 text-rose-300 w-5 h-5 animate-pulse delay-1500" />
        </div>

        <div className="text-center z-10 px-4">
          <div className="mb-8">
            <Heart className="w-16 h-16 text-pink-400 mx-auto mb-6 animate-wiggle" />
          </div>

          <h1 className="text-6xl sm:text-8xl font-bold mb-6 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 bg-clip-text text-transparent font-playfair animate-bounce-slow">
            Jola Nails
          </h1>

          <p className="text-xl sm:text-2xl text-gray-600 mb-12 font-poppins font-medium">
            Where Beauty Meets Artistry
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair text-center">Book Appointment</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service</Label>
                    <Select
                      value={bookingForm.service}
                      onValueChange={(value) => setBookingForm({ ...bookingForm, service: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  >
                    Send Booking Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>

            <Button
              size="lg"
              variant="outline"
              className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent font-medium"
              onClick={() => scrollToSection("work")}
            >
              View Portfolio
            </Button>
          </div>

          <div className="mt-16">
            <ChevronDown
              className="w-8 h-8 text-pink-400 mx-auto animate-bounce cursor-pointer"
              onClick={() => scrollToSection("services")}
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Indulge in our premium nail care services, where every detail is crafted with precision and artistry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-3 bg-gradient-to-br from-white to-pink-50"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-bold text-pink-600 font-playfair">{service.price}</div>
                      <Badge variant="outline" className="text-purple-600 border-purple-300 font-medium">
                        {service.duration}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3"></div>
                        <span className="text-gray-700 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full transition-all duration-300 font-medium">
                        Book Now
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-md">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-playfair text-center">Book {service.title}</DialogTitle>
                      </DialogHeader>
                      <form onSubmit={handleBookingSubmit} className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={bookingForm.name}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBookingForm({ ...bookingForm, name: e.target.value })}
                            required                            
                          />
                        </div>
                        <div>
                          <Label>Service Selected</Label>
                          <div className="p-3 bg-pink-50 rounded-lg">
                            <p className="font-medium">{service.title}</p>
                            <p className="text-pink-600 font-bold">{service.price}</p>
                            <p className="text-sm text-gray-600">{service.duration}</p>
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={bookingForm.phone}
                            onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                            required
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                          onClick={() => setBookingForm({ ...bookingForm, service: service.title })}
                        >
                          Send Booking Request
                        </Button>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Section */}
      <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Our Work</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium">
              Discover our latest nail art creations and see why our clients love coming back for more.
            </p>
            <Link href="/portfolio">
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-transparent font-medium"
              >
                View Full Gallery
                <ChevronDown className="ml-2 h-5 w-5 rotate-[-90deg]" />
              </Button>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentWork.map((work, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={work.image || "/placeholder.svg"}
                    alt={work.title}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <Badge variant="secondary" className="mb-2 bg-white/20 text-white border-white/30 font-medium">
                        {work.category}
                      </Badge>
                      <h3 className="text-xl font-semibold font-playfair">{work.title}</h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6 bg-gradient-to-br from-white to-pink-50">
                  <Badge variant="outline" className="mb-3 text-purple-600 border-purple-300 font-medium">
                    {work.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-gray-900 font-playfair">{work.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Meet Joseph */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Meet Joseph</h2>

            {/* Add profile image */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-gradient-to-r from-pink-300 to-purple-300 p-1 bg-gradient-to-r from-pink-300 to-purple-300">
            <Image
              src="/him.jpeg"
              alt="Nail Artist"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-rose-200"
            />
              </div>
            </div>

            <p className="text-xl text-gray-600 max-w-4xl mx-auto font-medium leading-relaxed">
              With over 3 years of experience in nail artistry, I&apos;m passionate about creating beautiful, healthy nails
              that make you feel confident and radiant. Every client receives personalized attention and the highest
              quality care in a relaxing, luxurious environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-pink-600" />
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2 font-playfair">{stat.number}</h3>
                <p className="text-lg text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 font-playfair">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-medium">
              Ready to pamper yourself? Get in touch with us to schedule your next nail appointment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                <Phone className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Call Us</h3>
              <button
                onClick={handleCall}
                className="text-gray-600 text-lg font-medium hover:text-pink-600 transition-colors cursor-pointer"
              >
                +254 115 656 723
              </button>
              <p className="text-gray-500 text-sm mt-2">Mon-Sat: 9AM-7PM</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                <Mail className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Email</h3>
              <a
                href="mailto:josephlalei2000@gmail.com"
                className="text-gray-600 text-lg font-medium hover:text-pink-600 transition-colors"
              >
                josephlalei2000@gmail.com
              </a>
              <p className="text-gray-500 text-sm mt-2">We reply within 24hrs</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full flex items-center justify-center mb-6">
                <MapPin className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 font-playfair">Visit Us</h3>
              <p className="text-gray-600 text-lg font-medium">Eldoret</p>
              <p className="text-gray-500 text-sm mt-2">Kenya, Town CBD</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-12 py-4 text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-medium"
                >
                  <Calendar className="mr-3 h-6 w-6" />
                  Book Appointment Now
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair text-center">Book Appointment</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="service">Service</Label>
                    <Select
                      value={bookingForm.service}
                      onValueChange={(value) => setBookingForm({ ...bookingForm, service: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service.title} value={service.title}>
                            {service.title} - {service.price}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
                  >
                    Send Booking Request
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-900 to-purple-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent font-playfair">
            Jola Nails
          </h3>
          <p className="text-pink-200 mb-6 text-lg font-poppins font-medium">Where Beauty Meets Artistry</p>
          <div className="flex justify-center space-x-6 mb-6">
            <Heart className="w-6 h-6 text-pink-300 animate-pulse" />
            <Sparkles className="w-6 h-6 text-purple-300 animate-bounce" />
            <Heart className="w-6 h-6 text-rose-300 animate-pulse delay-1000" />
          </div>
          <p className="text-pink-300 text-sm font-medium mb-4">© 2024 Jola Nails. All rights reserved.</p>
          <p className="text-pink-200 text-sm">
            Made with ❤️ by{" "}
            <a
              href="https://hummzer.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-pink-300 transition-colors underline decoration-pink-300 hover:decoration-white"
            >
              Hummzer
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}







          // <div className="flex justify-center space-x-6 mb-8">
          //   <a href="https://www.instagram.com/jolanails2023?utm_source=qr&igsh=MTVncWE5MW5xam1mdw==" target="_blank" rel="noopener noreferrer">
          //     <Instagram className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
          //   </a>
          //   <a href="https://www.facebook.com/hassan.jola?mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer">
          //     <Facebook className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
          //   </a>
          // </div>