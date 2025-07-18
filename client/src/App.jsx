import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { generatePlan } from "./features/trip/tripSlice"
import { PlaneTakeoff, MapPinHouse, TicketsPlane, NotebookPen, Calendar, House, Activity } from 'lucide-react';
import Loader from './assets/Loader1.gif'
import Loader1 from './assets/Loader2.gif'
import Loader3 from './assets/Loader3.gif'





const App = () => {

  const { travelPlan, isLoading, isSuccess, isError, message } = useSelector(state => state.trip)

  console.log('adfcsdvxbfxbcvbncvnvcvcn', travelPlan)

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


  const handleSubmit = async (e) => {
    e.preventDefault()
    await dispatch(generatePlan(formData))
    setFormData({
      fromDate: "",
      toDate: "",
      budget: ""
    })
  }


  useEffect(() => {
    if (isError && message) {
      window.alert(message)
    }
  }, [isError, message])

  // console.log("travel plan from app", dataelPlan)
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-stone-400">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 bgImg">

          <h1 className="text-4xl font-bold tracking-widest text-[#f5f2f3] mb-4">Plan Smarter, <span className="text-[#2b5749]">Travel Like Never Before</span></h1>
          <p className="text-[#FFEDF3] tracking-[5px] font-semibold text-lg">Smart <span className="text-[#2b5749]">Itineraries.</span> Tailored by AI</p>
        </div>

        <div className="max-w-5xl mx-auto ">
          {/* Input Form */}
          <form onSubmit={handleSubmit}>
            <div className="max-w-5xl mx-auto bg-stone-300 shadow-2xl rounded-xl  p-8">
              <h2 className="text-3xl font-bold text-[#2b5749] tracking-wider mb-6">Easy Trip Planning Starts Here</h2>

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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-stone-500 bg-stone-200 focus:border-transparent"/>
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


                {isLoading ? <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full font-bold flex justify-center py-1 px-4 border border-transparent rounded-lg shadow-sm text-lg  bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#2b5749]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c6664] transition-colors duration-200">
                  <img className="h-10 border me-2 bg-[#196e6b] border-amber-100 rounded-full" src="https://ugokawaii.com/wp-content/uploads/2023/03/travel.gif" alt="" />
                  <span className="mt-2 flex"> Preparing Adventure Map
                    <img src={Loader3} alt="" className="h-6 mt-2 ms-0" />
                  </span>
                </button> : <button
                  type="submit"
                  className="w-full font-bold flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-lg  bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#2b5749]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c6664] transition-colors duration-200"><PlaneTakeoff className="me-2 text-[#20edac]" />
                  Generate Trip Outline
                </button>}

                {/* <div className="flex gap-5">
                  <button 
                  // onClick={fatchallplan}
                  className="w-full font-bold flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg  bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#2b5749]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c6664] transition-colors duration-200">Get All pre-Generated Travel Plan </button>
                  <button className="w-full font-bold flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-lg  bg-[#2c6664] text-[#FFEDF3] uppercase tracking-widest hover:bg-[#2b5749]  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2c6664] transition-colors duration-200">Download Generated Plan </button>
                </div> */}

              </div>
            </div>
          </form>
          {/* {isLoading ? <div className="max-w-2xl mx-auto bg-[#2c6664] p-1 mt-6 rounded-3xl">
            <div className=" bg-white rounded-2xl  gap-5 flex justify-center items-center py-6">
              <img src={Loader} alt="" className="h-15" />
              <div className="flex">
                <h2 className="text-[#2c6664] tracking-wider text-lg">Redefine the Way You Travel </h2>
                <img src={Loader1} alt="" className="h-6 mt-2 ms-0" />
              </div>
            </div>
          </div> : ''} */}

          {/* ================ fatch All Pre-Generated Plans Display */}

          <div className="max-w-7xl mx-auto  bg-[#2c6664]/60 border-2 border-[#7af5ce]/20 shadow-2xl rounded-xl px-12 pt-6 pb-12 mt-10">
            <h2 className="text-3xl tracking-widest font-bold text-[#a4f7dc] mb-6">Pre-Generated Plans Display Here</h2>

            <div className="space-y-6">
              <div className="bg-pink-50 border border-pink-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                 <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase  p-4 flex justify-between items-center">
                  <span className="flex justify-start items-center">
                    <MapPinHouse />
                    <h3 className="ms-3">Destination </h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>

                <ul className=" bg-stone-300 text-xl p-4 space-y-1">
                  <li className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>Mhow, Indore (M.P)
                  </li>
                </ul>
              </div>

            </div>
          </div>

          {/*==================== Output Display =======================  */}
          {!travelPlan ? (<></>) : (<div className="max-w-7xl mx-auto bg-[#2c6664]/60 border-2 border-[#7af5ce]/20 shadow-2xl rounded-xl px-12 pt-6 pb-12 mt-10">
            <h2 className="text-3xl tracking-widest font-bold text-[#a4f7dc] mb-6">Your Trip Plan</h2>

            <div className="space-y-6">
              {/* Destination */}
              <div className="bg-blue-50 border  border-blue-200 shadow-xl shadow-black rounded-lg p-[.6px]">
                <div className=" py-4 flex justify-center shadow-lg items-center bg-stone-400">
                  <span className="border p-3 rounded-full bg-[#2c6664] text-stone-300 shadow-2xs shadow-black">
                    <MapPinHouse size={50} />
                  </span>
                </div>
                <div className=" py-4 bg-stone-300 text-center">
                  <p className="text-3xl font-black tracking-wider my-2">{travelPlan.data.destination}</p>

                  <p className=" text-lg font-bold">
                    <span>Total Budget : ₹ {travelPlan.data.budgetBreakdown?.total} </span>
                  </p>
                  <p >Wanderer’s Paradise <span className="text-[#0d6146] text-lg tracking-wider">Adventure & Travel Inspired</span> </p>
                </div>
              </div>

              {/* budget Brackdown  */}
              <div className="bg-indigo-50 border border-indigo-200 shadow-xl shadow-black p-[.6px] rounded-lg mt-10">
                <div className="text-2xl font-semibold tracking-wider  p-4 rounded-t-lg bg-stone-400 uppercase flex justify-between items-center ">
                  <span className="flex justify-start items-center">
                    <TicketsPlane className="inline mr-3 " />
                    <h3 className=" ">Budget Breakdown</h3>
                  </span>
                  <span>
                    <NotebookPen className="" />
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-4 p-4 bg-stone-300 ">
                  <div className="bg-stone-200 border border-stone-600/40 p-4 ">
                    <span>Travel:</span>
                    <span>₹ {travelPlan.data.budgetBreakdown.travel}</span>
                  </div>
                  <div className="bg-stone-200 border border-stone-600/40 p-4">
                    <span>Stay : </span>
                    <span>₹ {travelPlan.data.budgetBreakdown.stay}</span>
                  </div>
                  <div className="bg-stone-200 border border-stone-600/40 p-4">
                    <span>Food : </span>
                    <span>₹ {travelPlan.data.budgetBreakdown.food}</span>
                  </div>
                  <div className="bg-stone-200 border border-stone-600/40 p-4">
                    <span>Activities : </span>
                    <span>₹ {travelPlan.data.budgetBreakdown.activities}</span>
                  </div>

                </div>
                <div className="col-span-2 bg-stone-300 border-t p-4">
                  <div className="flex justify-between font-bold ">
                    <span>Total:</span>
                    <span>₹ {travelPlan.data.budgetBreakdown.total}</span>
                  </div>
                </div>
              </div>

              {/* Accommodation */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase p-4 flex justify-between items-center">
                  <span className="flex justify-start items-center">
                    <House />
                    <h3 className="ms-3">Accommodation</h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>
                <p className="bg-stone-300 p-4">{travelPlan.data.accommodation}</p>
              </div>


              {/* Travel Mode */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase p-4 flex justify-between items-center">
                  <span className="flex justify-start items-center">
                    <PlaneTakeoff />
                    <h3 className="ms-3">Travel Mode</h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>
                <p className="bg-stone-300 p-4">{travelPlan.data.travelMode}</p>
              </div>

              {/* Travel tripType */}
              <div className="bg-green-50 border border-green-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase p-4 flex justify-between items-center">
                  <span className="flex justify-start items-center">
                    <PlaneTakeoff />
                    <h3 className="ms-3">Trip Type</h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>

                <p className="bg-stone-300 p-4">{travelPlan.data.tripType}</p>
              </div>

              {/* activities  */}
              <div className="bg-pink-50 border border-pink-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase  text-pink-800 p-4 flex justify-between items-center">
                  <span className="flex justify-start items-center">
                    < Activity />
                    <h3 className="ms-3">Activities</h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>

                <ul className="text-pink-700 bg-stone-300 p-4 space-y-1">
                  {travelPlan.data.activities.map((activity, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-pink-500 mr-2">•</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase p-4 flex justify-between items-center" >
                  <span className="flex justify-start items-center">
                    <PlaneTakeoff />
                    <h3 className="ms-3">Trip Plan Days</h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>

                <ul className="bg-stone-300 p-4 space-y-1">
                  {travelPlan.data.tripPlanday.map((dayplan, index) => (
                    <li key={index} className="flex items-start mb-3">
                      <span className="text-pink-500 text-xl mr-2">•</span>
                      <span className="">
                        {dayplan}

                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-lg shadow-xl shadow-black p-[.6px] mt-10">
                <div className="text-2xl font-semibold tracking-wider rounded-t-lg bg-stone-400 uppercase p-4 flex justify-between items-center" >
                  <span className="flex justify-start items-center">
                    <PlaneTakeoff />
                    <h3 className="ms-3">Tips or Warnings</h3>
                  </span>
                  <span>
                    <Calendar />
                  </span>
                </div>

                <ul className="bg-stone-300 p-4 space-y-1">
                  {travelPlan.data.tipsWarnings.map((tips, index) => (
                    <li key={index} className="flex items-start mb-3">
                      <span className="text-pink-500 text-xl mr-2">•{ }</span>
                      {tips}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>)
          }
        </div>
      </div>
    </div>
  )
}


export default App