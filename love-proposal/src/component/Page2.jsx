// import { useEffect } from 'react'

// export default function Page2() {
//   useEffect(() => {
//     document.title = "I Love You!"
//   }, [])

//   return (
//     <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
//       <div className="text-center space-y-8 max-w-2xl">
//         <div className="space-y-8">
//           <p className="text-2xl md:text-4xl text-rose-600 animate-slide-in-left">
//             I'm so blessed to have you in my life. Our friendship is accident but our relationship is Destiny.
//           </p>
//           <div className="animate-delayed-appear">
//             <h2 className="text-4xl md:text-6xl font-bold text-rose-700">
//               I Love You
//             </h2>
//             <div className="mt-8 text-6xl beating-heart text-gray-500">
//               ❤
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



import { useEffect, useState } from 'react'

export default function Page2() {
  const [showText, setShowText] = useState(false)

  useEffect(() => {
    document.title = "I Love You!"
    // Delay the text animation
    const timer = setTimeout(() => setShowText(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-pink-100 flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl">
        {showText && (
          <div className="space-y-8">
            <p className="quote-container text-2xl md:text-4xl text-rose-600">
              I'm so blessed to have you in my life. Our friendship is accident but our relationship is Destiny.
            </p>
            <div className="typewriter1 text-4xl md:text-6xl font-bold text-rose-700">
              I Love You Kanmani
            </div>
            <div className="mt-8 text-6xl beating-heart">
              ❤
            </div>
          </div>
        )}
      </div>
    </div>
  )
}