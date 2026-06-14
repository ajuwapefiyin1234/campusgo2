import { useState } from 'react'
import { Search, Star, Tag } from 'lucide-react'

const cosmetics = [
  { id: 1, name: 'Lipstick Set', price: 35, rating: 4.5, image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400&q=80', category: 'Makeup' },
  { id: 2, name: 'Face Serum', price: 45, rating: 4.7, image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&q=80', category: 'Skincare' },
  { id: 3, name: 'Hair Care Bundle', price: 55, rating: 4.6, image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400&q=80', category: 'Hair Care' },
  { id: 4, name: 'Perfume', price: 65, rating: 4.8, image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80', category: 'Fragrance' },
  { id: 5, name: 'Nail Polish Set', price: 25, rating: 4.4, image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400&q=80', category: 'Makeup' },
  { id: 6, name: 'Moisturizer', price: 30, rating: 4.5, image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=400&q=80', category: 'Skincare' },
]

export default function Cosmetics() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Makeup', 'Skincare', 'Hair Care', 'Fragrance']

  const filteredCosmetics = cosmetics.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
  )

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Cosmetics</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search cosmetics..."
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

        {/* Cosmetics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCosmetics.map((item) => (
            <div
              key={item.id}
              className="bg-surface rounded-xl overflow-hidden border border-gray-700 hover:border-primary transition cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-text-muted text-sm mb-3">{item.category}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-accent fill-accent" />
                    <span>{item.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-primary font-semibold">
                    <Tag className="w-4 h-4" />
                    <span>${item.price}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredCosmetics.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            No cosmetics found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}
