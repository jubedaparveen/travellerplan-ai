import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generatePlan } from "../features/trip/tripSlice"

function PlanTrip() {
  const { travelPlan, isLoading, isSuccess, isError, message } = useSelector(state => state.trip)

  console.log(travelPlan)

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    fromDate: "",
    toDate: "",
    budget: ""
  })

  const { fromDate, toDate, budget } = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(generatePlan(formData))
  }


  useEffect(() => {
    if (isError && message) {
      window.alert(message)
    }
  }, [isError, message])


  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-stone-300 flex items-center justify-center border border-amber-200">
        <div>
          <img className="h-56 ms-36" src="https://ugokawaii.com/wp-content/uploads/2023/03/travel.gif" alt="" />
          <h1 className="text-center  tracking-widest text-2xl">My Alu Generating Travel Plan...</h1>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-stone-400">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-widest text-[#f5f2f3] mb-4">Plan Smarter, Travel Better</h1>
          <p className="text-[#FFEDF3] tracking-widest text-lg">Smart Itineraries. Tailored by AI</p>
        </div>

        <div className="">
          {/* Input Form */}
          <form onSubmit={handleSubmit}>
            <div className="bg-stone-300 shadow-2xl rounded-xl  p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Details</h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="startDate" className="text-gray-700 text-sm font-medium block mb-2">
                    Travel Start Date
                  </label>
                  <input
                    id="startDate"
                    name="fromDate"
                    value={fromDate}
                    onChange={handleChange}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-stone-500 bg-stone-200 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="endDate" className="text-gray-700 text-sm font-medium block mb-2">
                    Travel End Date
                  </label>
                  <input
                    id="endDate"
                    name="toDate"
                    value={toDate}
                    onChange={handleChange}
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-stone-500 bg-stone-200 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="budget" className="text-gray-700 text-sm font-medium block mb-2">
                    Budget (INR)
                  </label>
                  <input
                    id="budget"
                    name="budget"
                    value={budget}
                    onChange={handleChange}
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-stone-500 bg-stone-200 focus:border-transparent"
                    placeholder="Enter your budget in INR"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium  bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#45967c]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c6664] transition-colors duration-200"
                >
                  Generate Trip Plan
                </button>
              </div>
            </div>
          </form>

          {/* Output Display */}
          {
            !travelPlan ? (<h1 className="text-center text-[#FFEDF3] text-4xl font-bold tracking-widest underline uppercase ">No Plan Yet</h1>) : (<div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Trip Plan</h2>

              <div className="space-y-6">
                {/* Destination */}
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">Destination</h3>
                  <p className="text-blue-700">{travelPlan.destination}</p>
                </div>

                {/* Trip Type */}
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-green-800 mb-2">Trip Type</h3>
                  <p className="text-green-700">{travelPlan.tripType}</p>
                </div>

                {/* Travel Mode */}
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-purple-800 mb-2">Travel Mode</h3>
                  <p className="text-purple-700">{travelPlan.travelMode}</p>
                </div>

                {/* Accommodation */}
                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-orange-800 mb-2">Accommodation</h3>
                  <p className="text-orange-700">{travelPlan.accommodation}</p>
                </div>

                {/* Activities */}
                <div className="bg-pink-50 border border-pink-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-pink-800 mb-2">Activities</h3>
                  <ul className="text-pink-700 space-y-1">
                    {travelPlan.activities?.map((activity, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Budget Breakdown */}
                <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-indigo-800 mb-2">Budget Breakdown</h3>
                  <div className="grid grid-cols-2 gap-4 text-indigo-700">
                    <div className="flex justify-between">
                      <span>Travel:</span>
                      <span>₹{travelPlan.budgetBreakdown.travel.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Stay:</span>
                      <span>₹{travelPlan.budgetBreakdown.stay.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Food:</span>
                      <span>₹{travelPlan.budgetBreakdown.food.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Activities:</span>
                      <span>₹{travelPlan.budgetBreakdown.activities.toLocaleString()}</span>
                    </div>
                    <div className="col-span-2 border-t border-indigo-300 pt-2 mt-2">
                      <div className="flex justify-between font-bold text-indigo-800">
                        <span>Total:</span>
                        <span>₹{travelPlan.budgetBreakdown.total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>)
          }
        </div>
      </div>
    </div>
  )
}

export default PlanTrip