import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { UserPlus } from 'lucide-react'

const signUpSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Password must be at least 6 characters'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
})

type SignUpFormData = z.infer<typeof signUpSchema>

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  })

  const onSubmit = (data: SignUpFormData) => {
    console.log('Sign Up:', data)
  }

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-surface p-8 rounded-xl border border-gray-700">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Account</h1>
          <p className="text-text-muted">Join CampusGo today</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              {...register('name')}
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
              placeholder="John Doe"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

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

          <div>
            <label className="block text-sm font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword')}
              className="w-full bg-background border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-primary transition"
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
          >
            <UserPlus className="w-5 h-5" />
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-text-muted">
          Already have an account?{' '}
          <Link to="/login" className="text-primary hover:underline">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}
