
import Header from '../layOut/Header'
import Navbar from '../layOut/Navbar'
import Footer from '../layOut/Footer'
import { Link } from 'react-router-dom'

  const LogIn = () => {
    
  return (

    <div>
        <Header />
        <Navbar />

        <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-green-400 via-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md p-8">
        <h2 className="text-3xl font-extrabold text-gray-800 text-center mb-6">Welcome Back</h2>
        <p className="text-gray-500 text-center mb-8">
          Sign in to access your account.
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="********"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
          <a href="/forgot-password" className="hover:underline">
            Forgot Password?
          </a>
          <Link to="/register" className="text-blue-600 hover:underline">
            Create Account
          </Link>
        </div>
      </div>
    </div>


        <Footer />
    </div>
  )
}

export default LogIn