import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-stone-400">
      <div className="max-w-md w-full space-y-8">
        <div className="bg-stone-300 shadow-2xl rounded-xl  p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Join Us!</h2>
            <p className="text-gray-600">Create your account to start planning</p>
          </div>
          
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="text-gray-700 text-sm font-medium block mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-stone-200"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="text-gray-700 text-sm font-medium block mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-stone-200"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="password" className="text-gray-700 text-sm font-medium block mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-500 focus:border-transparent bg-stone-200"
                placeholder="Create a password"
              />
            </div>
            
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#45967c] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200"
              >
                Create Account
              </button>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register