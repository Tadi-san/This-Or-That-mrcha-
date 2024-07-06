
// import React from "react"
import {Link} from "react-router-dom"
export default function LandingPage() {
  return (
    <div class=" min-h-screen bg-[#1a1a1a] min-w-full overflow-clip flex items-center justify-center px-2">
    <div class="relative w-full max-w-lg ">
      <div class="absolute top-0 -left-4 w-[600px] h-[600px] bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
    </div>
    <div class="absolute space-y-4 bg-transparent w-full h-full flex pt-16 justify-center ">
    <div className="relative flex justify-center gap-2 font-Silkscreen">
    <h1 className="-mt-3 text-4xl text-red-400">This</h1>
    <h1 className="mt-3">Or</h1>
    <h1 className="mt-10 text-4xl text-blue-400">That</h1>
    </div>
    <button className="absolute top-[50%]  gradient-button rounded-full
     text-white p-1 px-6 text-4xl">Play</button>
    </div>
    
  </div>
    
  )
}
