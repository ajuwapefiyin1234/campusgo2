import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const [isSuccess, setIsSuccess] = useState(false)
  const navigate = useNavigate()

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSuccess(true)
    setTimeout(() => {
      navigate('/login')
    }, 2000)
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px', backgroundColor: '#111827' }}>
      <div style={{ maxWidth: '448px', width: '100%', backgroundColor: '#1f2937', padding: '32px', borderRadius: '12px', border: '1px solid #374151' }}>
        {isSuccess ? (
          <div style={{ textAlign: 'center', padding: '32px 0' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>✓</div>
            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>Account Created!</h2>
            <p style={{ color: '#9ca3af', marginBottom: '16px' }}>Redirecting to login...</p>
          </div>
        ) : (
          <>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <h1 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '8px', color: 'white' }}>Create Account</h1>
              <p style={{ color: '#9ca3af' }}>Join CampusGo today</p>
            </div>

            <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'white' }}>Full Name</label>
                <input
                  type="text"
                  style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white' }}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'white' }}>Email</label>
                <input
                  type="email"
                  style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white' }}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'white' }}>Password</label>
                <input
                  type="password"
                  style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white' }}
                  placeholder="••••••••"
                  required
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', marginBottom: '8px', color: 'white' }}>Confirm Password</label>
                <input
                  type="password"
                  style={{ width: '100%', backgroundColor: '#111827', border: '1px solid #374151', borderRadius: '8px', padding: '12px 16px', color: 'white' }}
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                type="submit"
                style={{ width: '100%', backgroundColor: '#4f46e5', color: 'white', padding: '12px', borderRadius: '8px', fontWeight: '600', cursor: 'pointer', border: 'none' }}
              >
                Create Account
              </button>
            </form>

            <p style={{ textAlign: 'center', marginTop: '24px', color: '#9ca3af' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#818cf8', textDecoration: 'underline' }}>
                Sign in
              </Link>
            </p>
          </>
        )}
      </div>
    </div>
  )
}
