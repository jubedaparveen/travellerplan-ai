import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-stone-700 shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-[#FFEDF3] text-xl font-bold">
              ✈️ AI Travel Planner
            </Link>
          </div>
          <div className="flex space-x-4 ">
            <Link
              to="/login"
              className="text-[#FFEDF3] hover:text-[#539896] px-3 py-2 rounded-md text-lg uppercase tracking-widest font-medium transition-colors duration-200"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-[#FFEDF3] hover:text-[#539896] px-3 py-2 rounded-md text-lg uppercase tracking-widest font-medium transition-colors duration-200"
            >
              Register
            </Link>
            <Link
              to="/plan-trip"
              className="bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#45967c] px-4 py-3 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Plan Trip
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar