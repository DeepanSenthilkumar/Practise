// import { useState, useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'

// export default function Page1() {
//   const [showButton, setShowButton] = useState(false)
//   const navigate = useNavigate()

//   useEffect(() => {
//     setTimeout(() => setShowButton(true), 1000)
//   }, [])

//   return (
//     <div className="min-h-screen bg-pink-100 flex items-center justify-center">
//       <div className="text-center space-y-8">
//         <h1 className="text-4xl md:text-6xl font-bold text-rose-600 animate-slide-in-left">
//           Hey Dear. Will you Marry me?
//         </h1>
//         {showButton && (
//           <button
//             onClick={() => navigate('/page2')}
//             className="animate-delayed-appear bg-rose-600 text-white px-8 py-4 rounded-full text-2xl hover:bg-rose-700 transition-all"
//           >
//             Yes
//           </button>
//         )}
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page1() {
  const [showButton, setShowButton] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    // Show the button after the text animation completes
    const timer = setTimeout(() => setShowButton(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="typewriter text-4xl md:text-6xl font-bold text-rose-600">
          Hey Dear. Will you Marry me?
        </h1>
        {showButton && (
          <button
            onClick={() => navigate('/page2')}
            className=" st bg-rose-600 text-white px-8 py-4 rounded-full text-2xl hover:bg-rose-700 transition-all"
          >
            Yes
          </button>
        )}
      </div>
    </div>
  )
}