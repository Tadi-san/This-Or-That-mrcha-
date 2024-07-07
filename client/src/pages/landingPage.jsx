
// import React from "react"
import {Link} from "react-router-dom"
import imageFile from '../assets/efuye.png';
export default function LandingPage() {
  return (
    <div class=" min-h-screen bg-[#560058] min-w-full overflow-clip flex items-center justify-center px-2">
    <div class="relative w-full max-w-lg ">
      <div class="absolute top-0 -left-4 w-[600px] h-[600px] bg-red-400 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob"></div>
      <div class="absolute top-0 -right-4 w-[600px] h-[600px] bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-90 animate-blob animation-delay-2000"></div>
    </div>
    <div class="absolute space-y-4 bg-transparent w-full h-full flex pt-16 justify-center ">
    <div className="relative flex justify-center gap-2 p-2 font-Silkscreen">
    <h1 className="-mt-3 text-4xl text-red-400">This</h1>
    <div className="relative">
    <h1 className="mt-3">Or</h1>
    <img src={imageFile} alt="Efuye" className=" absolute -top-5 left-12 w-18 h-14 "/>
      </div>
    <h1 className="mt-10 text-4xl text-blue-400">That</h1>
    </div>
    <div className="absolute w-full  h-fit top-[60%] flex flex-col gap-8 items-center
       text-white  ">
    <Link to={'/game/Football'} className=" rounded-full
       text-white bg-[#7f1783] p-1 px-14 text-2xl ">Play</Link>
  </div>
    </div>
    
  </div>
    
  )
}
