import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Landing from './pages/Landing'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Food from './pages/Food'
import Clothing from './pages/Clothing'
import Gadgets from './pages/Gadgets'
import Cosmetics from './pages/Cosmetics'
import Transportation from './pages/Transportation'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Chat from './pages/Chat'

function App() {
  return (
    <div className="min-h-screen bg-background text-text">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/food" element={<Food />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/gadgets" element={<Gadgets />} />
        <Route path="/cosmetics" element={<Cosmetics />} />
        <Route path="/transportation" element={<Transportation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  )
}

export default App
