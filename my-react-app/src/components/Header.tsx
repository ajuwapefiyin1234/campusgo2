import { Link } from 'react-router-dom'
import { Search, User, Settings, ShoppingCart, MessageCircle, Utensils, Shirt, Smartphone, Sparkles, Car } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-surface/95 backdrop-blur-sm border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            CampusGo
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/food" className="flex items-center gap-2 text-text hover:text-primary transition group">
              <Utensils className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Food</span>
            </Link>
            <Link to="/clothing" className="flex items-center gap-2 text-text hover:text-primary transition group">
              <Shirt className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Clothing</span>
            </Link>
            <Link to="/gadgets" className="flex items-center gap-2 text-text hover:text-primary transition group">
              <Smartphone className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Gadgets</span>
            </Link>
            <Link to="/cosmetics" className="flex items-center gap-2 text-text hover:text-primary transition group">
              <Sparkles className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Cosmetics</span>
            </Link>
            <Link to="/transportation" className="flex items-center gap-2 text-text hover:text-primary transition group">
              <Car className="w-4 h-4 group-hover:scale-110 transition-transform" />
              <span>Transportation</span>
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="bg-background border border-gray-700 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:border-primary w-48"
              />
            </div>
            
            <Link to="/cart" className="relative group">
              <ShoppingCart className="w-5 h-5 text-text hover:text-primary transition group-hover:scale-110" />
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>
            
            <Link to="/chat" className="relative group">
              <MessageCircle className="w-5 h-5 text-text hover:text-primary transition group-hover:scale-110" />
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center"></span>
            </Link>
            
            <Link to="/profile" className="group">
              <User className="w-5 h-5 text-text hover:text-primary transition group-hover:scale-110" />
            </Link>
            
            <Link to="/settings" className="group">
              <Settings className="w-5 h-5 text-text hover:text-primary transition group-hover:scale-110" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
