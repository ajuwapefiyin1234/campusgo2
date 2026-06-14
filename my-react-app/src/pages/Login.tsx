import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = (data: LoginFormData) => {
    console.log('Login:', data)
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-surface p-8 rounded-xl border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
          <p className="text-text-muted">Sign in to your CampusGo account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              {...register('email')}
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              {...register('password')}
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <LogIn className="w-5 h-5" />
            Sign In
          </button>
        </form>

        <p className="text-center mt-6 text-text-muted">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}
