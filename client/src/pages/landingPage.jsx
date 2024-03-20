
// import React from "react"
import {Link} from "react-router-dom"
export default function LandingPage() {
  return (
    <div className="bg-[#212121] w-full flex flex-col items-center p-5 gap-8">
        <h1 className=" text-3xl sm:text-5xl mt-4 shadow-[#3b3f47] shadow-sm text-center bg-[#242424] w-fit p-4 rounded-xl">Welcome to the This Or That!</h1>
        <div className=" w-fit mt-4 ">
            <Link to={"/category"} style={{backgroundImage: "linear-gradient(to right, #1f6dfd, #e63511)"}} className=" text-white p-2 px-12 rounded-full text-2xl font-semibold hover:border hover:text-gray-200" >Play</Link>
            
        </div>
        <div className=" flex justify-around w-full gap-3">
            <div className="flex flex-col justify-around bg-[#19191b] rounded-lg p-4 w-full sm:w-1/3 text-center px-8 sm:px-14 hover:shadow-[#e63511] hover:shadow-md">
              <span className=" text-xl text-white font-semibold mb-4">Are you ready for some quick decision-making fun? </span>
              <span className=" text-gray-400"> Test your choices and see how your preferences stack up against others It's time to make some tough decisions and discover how your choices compare!</span>
            </div>
           
        </div>
            <div className="flex flex-col justify-around bg-[#19191b] rounded-lg p-4 w-full sm:w-1/3  px-8 sm:px-14 hover:shadow-[#1151e6] hover:shadow-md">
              <span className=" text-center text-xl text-white font-semibold mb-4">How does it work?</span>
              <div className=" text-gray-400"> 
              <span className=" flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>

                You'll be presented with a series of intriguing "This or That" questions.</span>
              <span className=" flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
Make your choice by selecting the option that resonates with you the most.</span>
<span className=" flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
 After making your choice, you'll instantly see the percentage of people who made the same choice as you did, as well as the percentage for the alternative choice.</span>

<span className=" flex gap-3"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
</svg>
Compare your preferences and see how you align with the crowd or stand out from the majority.</span>

</div>
            </div>

        </div>
    
  )
}
