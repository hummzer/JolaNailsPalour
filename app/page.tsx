"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, MapPin, Instagram, Facebook, Star, Sparkles, Heart, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function Home() {
	const [scrollY, setScrollY] = useState(0)

	useEffect(() => {
		const handleScroll = () => setScrollY(window.scrollY)
		window.addEventListener("scroll", handleScroll)
		return () => window.removeEventListener("scroll", handleScroll)
	}, [])

	const services = [
		{
			name: "Classic Manicure",
			price: "4500 KES",
			duration: "90 min",
			description: "Foot soak, exfoliation, cuticle care, and polish application",
		},
		{
			name: "Acrylics Gel",
			price: "3000 KES",
			duration: "45 min",
			description: "Complete nail care with cuticle treatment, shaping, and polish",
		},
		{
			name: "Builder Gel",
			price: "1000 KES",
			duration: "60 min",
			description: "Long-lasting gel polish with UV curing for 2-3 weeks wear",
		},
		{
			name: "Tips Gel",
			price: "1500 KES",
			duration: "80 min",
			description: "Nail extensions using tips and gel for added length and strength",
		},
		{
			name: "Stick On Nails",
			price: "1000 KES",
			duration: "30 min",
			description: "Quick and easy application of pre-designed stick-on nails for instant glam",
		},
	]

	const portfolio = [
		{ id: 1, category: "Nail Art", image: "/one.jpeg" },
		{ id: 2, category: "French Tips", image: "/two.jpeg" },
		{ id: 3, category: "Gel Polish", image: "/three.jpeg" },
		{ id: 4, category: "Pedicure", image: "/four.jpeg" },
		{ id: 5, category: "Extensions", image: "/five.jpeg" },
		{ id: 6, category: "Nail Art", image: "/six.jpeg" },
		{ id: 7, category: "Bridal", image: "/seven.jpeg" },
		{ id: 8, category: "Seasonal", image: "/nine.jpeg" },
	]

	return (
		<div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
		{/* Hero Section */}
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
		<div className="absolute inset-0">
		{[...Array(20)].map((_, i) => (
			<div
			key={i}
			className="absolute animate-float"
			style={{
				left: `${Math.random() * 100}%`,
				top: `${Math.random() * 100}%`,
				animationDelay: `${Math.random() * 3}s`,
				animationDuration: `${3 + Math.random() * 2}s`,
			}}
			>
			<Sparkles className="w-4 h-4 text-pink-300 opacity-60" />
			</div>
		))}
		</div>

		<div
		className="text-center z-10 px-4"
		style={{
			transform: `translateY(${scrollY * 0.3}px)`,
		}}
		>
		<div className="mb-6">
		<Heart className="w-16 h-16 text-rose-400 mx-auto mb-4 animate-pulse" />
		</div>
		<h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-rose-400 via-pink-500 to-purple-500 bg-clip-text text-transparent mb-4 animate-fade-in">
		Jola Nails
		</h1>
		<p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">Where Beauty Meets Artistry</p>
		<div className="flex flex-col sm:flex-row gap-4 justify-center">
		<Button className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white px-8 py-3 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
		<Calendar className="w-5 h-5 mr-2" />
		Book Appointment
		</Button>
		<Button
		variant="outline"
		className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 bg-transparent"
		>
		View Portfolio
		</Button>
		</div>
		</div>

		<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
		<div className="w-6 h-10 border-2 border-rose-300 rounded-full flex justify-center">
		<div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-pulse"></div>
		</div>
		</div>
		</section>

		{/* Services Section */}
		<section className="py-20 px-4">
		<div className="max-w-6xl mx-auto">
		<div className="text-center mb-16">
		<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Services</h2>
		<p className="text-xl text-gray-600">Professional nail care tailored to your style</p>
		</div>

		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
		{services.map((service, index) => (
			<Card
			key={index}
			className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm"
			>
			<CardContent className="p-6">
			<div className="flex justify-between items-start mb-4">
			<h3 className="text-xl font-semibold text-gray-800 group-hover:text-rose-600 transition-colors">
			{service.name}
			</h3>
			<div className="text-right">
			<div className="text-2xl font-bold text-rose-500">{service.price}</div>
			<div className="text-sm text-gray-500">{service.duration}</div>
			</div>
			</div>
			<p className="text-gray-600 leading-relaxed">{service.description}</p>
			<div className="mt-4 flex justify-between items-center">
			<div className="flex">
			{[...Array(5)].map((_, i) => (
				<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
			))}
			</div>
			<Button
			size="sm"
			className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
			>
			Book Now
			</Button>
			</div>
			</CardContent>
			</Card>
		))}
		</div>
		</div>
		</section>

		{/* Portfolio Section */}
		<section className="py-20 px-4 bg-gradient-to-r from-rose-100/50 to-pink-100/50">
		<div className="max-w-6xl mx-auto">
		<div className="text-center mb-16">
		<h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Work</h2>
		<p className="text-xl text-gray-600">Every nail tells a story of beauty and creativity</p>
		</div>

		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
		{portfolio.map((item, index) => (
			<div
			key={item.id}
			className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
			style={{
				animationDelay: `${index * 0.1}s`,
			}}
			>
			<Image
			src={item.image}
			alt={item.category}
			width={300}
			height={256}
			className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
			/>
			<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
			<div className="absolute bottom-4 left-4 text-white">
			<p className="font-semibold">{item.category}</p>
			</div>
			</div>
			<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
			<Heart className="w-6 h-6 text-white hover:text-rose-400 cursor-pointer transition-colors" />
			</div>
			</div>
		))}
		</div>
		</div>
		</section>

		{/* About Section */}
		<section className="py-20 px-4">
		<div className="max-w-4xl mx-auto text-center">
		<div className="mb-12">
		<Image
		src="/him.jpeg"
		alt="Nail Artist"
		width={128}
		height={128}
		className="w-32 h-32 rounded-full mx-auto mb-6 shadow-xl border-4 border-rose-200"
		/>
		<h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Joseph</h2>
		<p className="text-xl text-gray-600 leading-relaxed">
		With over 3 years of experience in nail artistry, I&apos;m passionate about creating beautiful, healthy nails
		that make you feel confident and radiant. Every client receives personalized attention and the highest
		quality care in a relaxing, luxurious environment.
			</p>
		</div>

		<div className="grid md:grid-cols-3 gap-8 mb-12">
		<div className="text-center">
		<div className="text-3xl font-bold text-rose-500 mb-2">500+</div>
		<p className="text-gray-600">Happy Clients</p>
		</div>
		<div className="text-center">
		<div className="text-3xl font-bold text-rose-500 mb-2">3</div>
		<p className="text-gray-600">Years Experience</p>
		</div>
		<div className="text-center">
		<div className="text-3xl font-bold text-rose-500 mb-2">100%</div>
		<p className="text-gray-600">Satisfaction Rate</p>
		</div>
		</div>
		</div>
		</section>

		{/* Contact Section */}
		<section className="py-20 px-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white">
		<div className="max-w-4xl mx-auto text-center">
		<h2 className="text-4xl md:text-5xl font-bold mb-8">Get In Touch</h2>
		<p className="text-xl mb-12 opacity-90">Ready to pamper yourself? Book your appointment today!</p>

		<div className="grid md:grid-cols-3 gap-8 mb-12">
		<div className="flex flex-col items-center">
		<Phone className="w-8 h-8 mb-4" />
		<h3 className="font-semibold mb-2">Call Us</h3>
		<p>+254 115 656 723</p>
		</div>
		<div className="flex flex-col items-center">
		<Mail className="w-8 h-8 mb-4" />
		<h3 className="font-semibold mb-2">Email</h3>
		<p>josephlalei2000@gmail</p>
		</div>
		<div className="flex flex-col items-center">
		<MapPin className="w-8 h-8 mb-4" />
		<h3 className="font-semibold mb-2">Visit Us</h3>
		<p>
		Eldoret
		<br />
		Kenya, Town CBD
		</p>
		</div>
		</div>

		<div className="flex justify-center space-x-6 mb-8">
		<Instagram className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
		<Facebook className="w-8 h-8 hover:scale-110 transition-transform cursor-pointer" />
		</div>

		<Button className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
		<Calendar className="w-5 h-5 mr-2" />
		Book Your Appointment
		</Button>
		</div>
		</section>

		{/* Footer */}
		<footer className="py-8 px-4 bg-gray-900 text-white text-center">
		<p>© 2025 Jola Nails. All rights reserved. Made by Hummzer.</p>
		</footer>

		<style jsx>{`
			@keyframes float {
				0%, 100% { transform: translateY(0px) rotate(0deg); }
				50% { transform: translateY(-20px) rotate(180deg); }
			}
			@keyframes fade-in {
				from { opacity: 0; transform: translateY(30px); }
				to { opacity: 1; transform: translateY(0); }
			}
			@keyframes fade-in-delay {
				from { opacity: 0; transform: translateY(30px); }
				to { opacity: 1; transform: translateY(0); }
			}
			.animate-float {
				animation: float 4s ease-in-out infinite;
			}
			.animate-fade-in {
				animation: fade-in 1s ease-out;
			}
			.animate-fade-in-delay {
				animation: fade-in-delay 1s ease-out 0.3s both;
			}
			`}</style>
			</div>
	)
}