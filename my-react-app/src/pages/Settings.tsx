import { Bell, Lock, Shield, Moon, Sun, Globe, CreditCard } from 'lucide-react'
import { useState } from 'react'

export default function Settings() {
  const [darkMode, setDarkMode] = useState(true)
  const [notifications, setNotifications] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)
  const [smsNotifications, setSmsNotifications] = useState(false)

  return (
    <div className="pt-20 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>

        <div className="max-w-3xl space-y-6">
          {/* Appearance */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              {darkMode ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
              Appearance
            </h2>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Dark Mode</p>
                <p className="text-sm text-text-muted">Toggle dark theme</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-14 h-8 rounded-full p-1 transition-colors ${
                  darkMode ? 'bg-primary' : 'bg-gray-600'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full bg-white transition-transform ${
                    darkMode ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Push Notifications</p>
                  <p className="text-sm text-text-muted">Receive push notifications</p>
                </div>
                <button
                  onClick={() => setNotifications(!notifications)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    notifications ? 'bg-primary' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transition-transform ${
                      notifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-text-muted">Receive email updates</p>
                </div>
                <button
                  onClick={() => setEmailNotifications(!emailNotifications)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    emailNotifications ? 'bg-primary' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transition-transform ${
                      emailNotifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">SMS Notifications</p>
                  <p className="text-sm text-text-muted">Receive SMS alerts</p>
                </div>
                <button
                  onClick={() => setSmsNotifications(!smsNotifications)}
                  className={`w-14 h-8 rounded-full p-1 transition-colors ${
                    smsNotifications ? 'bg-primary' : 'bg-gray-600'
                  }`}
                >
                  <div
                    className={`w-6 h-6 rounded-full bg-white transition-transform ${
                      smsNotifications ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Security
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Current Password</label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Confirm New Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
                />
              </div>
              <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg font-semibold transition">
                Update Password
              </button>
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Privacy
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Profile Visibility</p>
                  <p className="text-sm text-text-muted">Make your profile visible to others</p>
                </div>
                <select className="bg-background border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary">
                  <option>Public</option>
                  <option>Private</option>
                  <option>Friends Only</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Location Sharing</p>
                  <p className="text-sm text-text-muted">Share your location for delivery</p>
                </div>
                <select className="bg-background border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:border-primary">
                  <option>Always</option>
                  <option>During Delivery</option>
                  <option>Never</option>
                </select>
              </div>
            </div>
          </div>

          {/* Language */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Language & Region
            </h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Language</label>
                <select className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary">
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Currency</label>
                <select className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary">
                  <option>USD ($)</option>
                  <option>EUR (€)</option>
                  <option>GBP (£)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-surface rounded-xl p-6 border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              Payment Methods
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded flex items-center justify-center text-white text-xs font-bold">
                    VISA
                  </div>
                  <div>
                    <p className="font-medium">•••• •••• •••• 4242</p>
                    <p className="text-sm text-text-muted">Expires 12/25</p>
                  </div>
                </div>
                <button className="text-primary hover:underline text-sm">Edit</button>
              </div>
              <button className="w-full border border-primary text-primary hover:bg-primary/10 py-3 rounded-lg font-semibold transition">
                Add Payment Method
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
