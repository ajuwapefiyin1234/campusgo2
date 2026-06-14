import { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, ShoppingBag, Clock, Heart, LogOut } from 'lucide-react'

export default function Profile() {
  const [isOnline, setIsOnline] = useState(true)

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  const orders = [
    { id: 1, item: 'Campus Hoodie', status: 'Delivered', date: '2024-01-15' },
    { id: 2, item: 'Pizza from Campus Kitchen', status: 'In Transit', date: '2024-01-20' },
    { id: 3, item: 'Wireless Earbuds', status: 'Processing', date: '2024-01-22' },
  ]

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Profile</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="md:col-span-1">
            <div className="bg-surface rounded-xl p-6 border border-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold">John Doe</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className={`w-3 h-3 rounded-full ${isOnline ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                    <span className="text-sm text-text-muted">{isOnline ? 'Online' : 'Offline'}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-text-muted">
                  <Mail className="w-5 h-5" />
                  <span>john.doe@campus.edu</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <Phone className="w-5 h-5" />
                  <span>+1 234 567 890</span>
                </div>
                <div className="flex items-center gap-3 text-text-muted">
                  <MapPin className="w-5 h-5" />
                  <span>Dorm Building A, Room 123</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-red-500/10 text-red-500 hover:bg-red-500/20 py-3 rounded-lg transition flex items-center justify-center gap-2">
                <LogOut className="w-5 h-5" />
                Logout
              </button>
            </div>
          </div>

          {/* Profile Details */}
          <div className="md:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-surface rounded-xl p-4 border border-gray-700 text-center">
                <ShoppingBag className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-text-muted">Orders</p>
              </div>
              <div className="bg-surface rounded-xl p-4 border border-gray-700 text-center">
                <Heart className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">5</p>
                <p className="text-sm text-text-muted">Wishlist</p>
              </div>
              <div className="bg-surface rounded-xl p-4 border border-gray-700 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold">3</p>
                <p className="text-sm text-text-muted">Active</p>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-surface rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
              <div className="space-y-4">
                {orders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 bg-background rounded-lg">
                    <div>
                      <p className="font-medium">{order.item}</p>
                      <p className="text-sm text-text-muted">{order.date}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'Delivered'
                          ? 'bg-green-500/20 text-green-500'
                          : order.status === 'In Transit'
                          ? 'bg-blue-500/20 text-blue-500'
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Account Settings */}
            <div className="bg-surface rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-semibold mb-4">Account Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    defaultValue="john.doe@campus.edu"
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    defaultValue="+1 234 567 890"
                    className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                  />
                </div>
                <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition">
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
