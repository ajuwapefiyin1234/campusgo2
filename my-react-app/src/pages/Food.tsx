import { useState } from 'react'
import { Search, Star, Clock, MapPin } from 'lucide-react'

const restaurants = [
  { id: 1, name: 'Campus Kitchen', rating: 4.5, time: '20-30 min', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80', category: 'Pizza' },
  { id: 2, name: 'Healthy Bites', rating: 4.8, time: '15-25 min', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80', category: 'Healthy' },
  { id: 3, name: 'Burger Joint', rating: 4.3, time: '25-35 min', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80', category: 'Burgers' },
  { id: 4, name: 'Sushi Express', rating: 4.7, time: '30-40 min', image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=400&q=80', category: 'Sushi' },
  { id: 5, name: 'Taco Town', rating: 4.4, time: '20-30 min', image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80', category: 'Mexican' },
  { id: 6, name: 'Noodle House', rating: 4.6, time: '25-35 min', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80', category: 'Asian' },
]

export default function Food() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Pizza', 'Healthy', 'Burgers', 'Sushi', 'Mexican', 'Asian']

  const filteredRestaurants = restaurants.filter(
    (restaurant) =>
      restaurant.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || restaurant.category === selectedCategory)
  )

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Food Delivery</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search restaurants..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface border border-gray-700 rounded-full py-3 pl-12 pr-4 focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-surface text-text hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="bg-surface rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                <p className="text-text-muted text-sm mb-3">{restaurant.category}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span>{restaurant.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <MapPin className="w-4 h-4" />
                    <span>On Campus</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredRestaurants.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            No restaurants found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}
