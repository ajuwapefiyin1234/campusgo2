import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight, Star, Clock, Truck, Utensils, Shirt, Smartphone, Sparkles, Car } from 'lucide-react'

const categories = [
  { 
    id: 'food', 
    name: 'Food', 
    title: 'Delicious Campus Eats',
    subtitle: 'Fresh meals from top restaurants delivered to your door',
    icon: Utensils,
    color: 'from-orange-500 to-red-500',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80'
  },
  { 
    id: 'clothing', 
    name: 'Clothing', 
    title: 'Style That Moves With You',
    subtitle: 'Latest trends for campus life',
    icon: Shirt,
    color: 'from-purple-500 to-pink-500',
    image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1920&q=80'
  },
  { 
    id: 'gadgets', 
    name: 'Gadgets', 
    title: 'Tech Essentials',
    subtitle: 'Latest gadgets for your campus needs',
    icon: Smartphone,
    color: 'from-blue-500 to-cyan-500',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&q=80'
  },
  { 
    id: 'cosmetics', 
    name: 'Cosmetics', 
    title: 'Beauty & Care',
    subtitle: 'Premium cosmetics and skincare products',
    icon: Sparkles,
    color: 'from-pink-500 to-rose-500',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80'
  },
  { 
    id: 'transportation', 
    name: 'Transportation', 
    title: 'Go Anywhere',
    subtitle: 'Quick rides around campus',
    icon: Car,
    color: 'from-green-500 to-emerald-500',
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80'
  },
]

export default function Landing() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev + 1) % categories.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide((prev) => (prev - 1 + categories.length) % categories.length)
      setTimeout(() => setIsTransitioning(false), 500)
    }
  }

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const currentCategory = categories[currentSlide]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Carousel */}
      <section className="relative h-screen overflow-hidden">
        {/* Background Image with Overlay */}
        <div 
          className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
            isTransitioning ? 'scale-105 opacity-90' : 'scale-100 opacity-100'
          }`}
          style={{ backgroundImage: `url(${currentCategory.image})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/70" />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-3xl text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              {currentCategory.title}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              {currentCategory.subtitle}
            </p>
            <Link
              to={`/${currentCategory.id}`}
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Shop {currentCategory.name} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="flex gap-2">
            {categories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Quick Categories */}
      <section className="py-16 bg-surface">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Browse Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/${category.id}`}
                className="group bg-background p-6 rounded-2xl border border-gray-700 hover:border-primary hover:scale-105 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{category.name}</h3>
                <p className="text-sm text-text-muted">{category.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Why Choose CampusGo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-gray-700 hover:border-primary transition group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Fast Delivery</h3>
              <p className="text-text-muted">Get your orders delivered quickly within campus</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-gray-700 hover:border-primary transition group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">Quality Service</h3>
              <p className="text-text-muted">Top-rated vendors and excellent customer service</p>
            </div>
            <div className="bg-surface p-8 rounded-2xl border border-gray-700 hover:border-primary transition group">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Truck className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-white">All-in-One</h3>
              <p className="text-text-muted">Food, clothing, gadgets, cosmetics, and rides</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Join thousands of students using CampusGo for their daily needs
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition transform hover:scale-105"
            >
              Sign Up Now
            </Link>
            <Link
              to="/login"
              className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition backdrop-blur"
            >
              Login
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
