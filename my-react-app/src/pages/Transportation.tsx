import { useState } from 'react'
import { Search, Star, Clock, MapPin } from 'lucide-react'

const transportationServices = [
  { id: 1, name: 'Campus Shuttle', rating: 4.5, time: '5-10 min', image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&q=80', category: 'Shuttle' },
  { id: 2, name: 'Bike Share', rating: 4.7, time: '2-5 min', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f778f7?w=400&q=80', category: 'Bike' },
  { id: 3, name: 'Ride Share', rating: 4.6, time: '3-8 min', image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&q=80', category: 'Car' },
  { id: 4, name: 'Electric Scooter', rating: 4.4, time: '2-5 min', image: 'https://images.unsplash.com/photo-1571188654248-7a89213928f7?w=400&q=80', category: 'Scooter' },
  { id: 5, name: 'Campus Taxi', rating: 4.8, time: '5-10 min', image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&q=80', category: 'Taxi' },
  { id: 6, name: 'Walking Buddy', rating: 4.3, time: '10-15 min', image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=400&q=80', category: 'Walking' },
]

export default function Transportation() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Shuttle', 'Bike', 'Car', 'Scooter', 'Taxi', 'Walking']

  const filteredServices = transportationServices.filter(
    (service) =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || service.category === selectedCategory)
  )

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Transportation</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search transportation..."
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

        {/* Transportation Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-surface rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-text-muted text-sm mb-3">{service.category}</p>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span>{service.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <Clock className="w-4 h-4" />
                    <span>{service.time}</span>
                  </div>
                  <div className="flex items-center gap-1 text-text-muted">
                    <MapPin className="w-4 h-4" />
                    <span>Available</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            No transportation services found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}
