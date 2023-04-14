import React from 'react'


function Uppernav() {
  return (
    <div>
        <div className="bg-lime-300 py-3 px-20 text-center flex items-center justify-center">
            <div className="flex items-center justify-center space-x-4 hover:opacity-75 cursor-pointer transition">
                <div className="text-gray-900 font-bold uppercase text-sm">Royaltees</div>
                <div className="text-gray-900 text-sm">New Collection in Town</div>
                <div className="text-gray-900">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Uppernav