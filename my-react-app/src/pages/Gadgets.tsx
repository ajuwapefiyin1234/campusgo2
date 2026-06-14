import { useState } from 'react'
import { Search, Star, Tag } from 'lucide-react'

const gadgets = [
  { id: 1, name: 'Wireless Earbuds', price: 79, rating: 4.6, image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80', category: 'Audio' },
  { id: 2, name: 'Smart Watch', price: 199, rating: 4.8, image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80', category: 'Wearables' },
  { id: 3, name: 'Power Bank', price: 35, rating: 4.4, image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&q=80', category: 'Accessories' },
  { id: 4, name: 'Bluetooth Speaker', price: 59, rating: 4.5, image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&q=80', category: 'Audio' },
  { id: 5, name: 'Phone Case', price: 15, rating: 4.3, image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=400&q=80', category: 'Accessories' },
  { id: 6, name: 'Laptop Stand', price: 45, rating: 4.7, image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80', category: 'Accessories' },
]

export default function Gadgets() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', 'Audio', 'Wearables', 'Accessories']

  const filteredGadgets = gadgets.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === 'All' || item.category === selectedCategory)
  )

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Gadgets</h1>

        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search gadgets..."
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

        {/* Gadgets Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGadgets.map((item) => (
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

        {filteredGadgets.length === 0 && (
          <div className="text-center py-12 text-text-muted">
            No gadgets found matching your search.
          </div>
        )}
      </div>
    </div>
  )
}
