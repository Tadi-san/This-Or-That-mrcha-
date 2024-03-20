import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from 'react-router-dom';

export const GamePage = () => {
  const { subpage } = useParams();
  const [next, setNext] = useState(0);
  const [show, setShow] = useState(false);
  const [once, setOnce] = useState(false)
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    axios.get("/game/"+ subpage).then(response => {
      setData(response.data);
      setIsLoading(false); 
    });
  }, [subpage]);

  function nextation(ev) {
    ev.preventDefault();
    setNext(next + 1);
    setShow(false);
    setOnce(false)
  }

  async function optionOne(ev) {
    ev.preventDefault();
    if (once == false){
      setShow(true);
      axios.post('/option1/' + data[next]._id);
      setOnce(true)
    }
  }

  function optionTwo(ev) {
    if (once == false){
      ev.preventDefault();
      setShow(true);
      axios.post('/option2/'+ data[next]._id);
      setOnce(true)
    }
  }

  if (next > 10) {
    return <Navigate to="/category" replace />;
  }

  return (
    <div className='bg-[#212121] w-full min-h-screen flex flex-col gap-20 p-2 sm:gap-8 items-center justify-center'>
      {isLoading ? ( // Render loading state when isLoading is true
        <div>
          Loading...

        </div>
      ) : (
    <div>
      {data.length > 0 && 
  (<div className='bg-[#212121] w-full min-h-screen flex flex-col gap-16 p-2 sm:gap-8 items-center' >
    <div className='bg-[#1e1e1e] flex flex-col items-center mt-16 w-full relative'>
      <button onClick={(ev)=>{optionOne(ev)}} className="w-full flex flex-col items-center min-w-[350px] sm:w-[600px] h-64 p-4 bg-red-600 justify-around rounded-t">
        <h1 className=" font-semibold text-4xl">
        {data[next].option1} 
        
        </h1>
        {show && (
          <div className="skill-bar shadow-2xl bg-red-700 p-4 rounded-full">
          <span className="skill-per" >
              <span className="tooltip font-semibold" >
              {Math.round(data[next].option1_vote / (data[next].option1_vote + data[next].option2_vote) * 100)}%
              </span>
          </span>
      </div>
        )}
        </button>
        <span className=" absolute -top-5 bg-slate-700 p-2 rounded-full px-4 ">
        {next+1}
        </span>
      <div className="bg-black h-2 max-w-min flex justify-center relative">
        <div className="bg-black text-center w-8 h-8 absolute -top-3 rounded-full">
          Or
        </div>
      </div>
      <button onClick={(ev)=>{optionTwo(ev)}}  className="w-full flex flex-col items-center justify-around sm:w-[600px] h-64 p-4 bg-blue-600 rounded-b">
        <h1 className=" font-semibold text-4xl" >
        {data[next].option2} 
        </h1>
        {show && (
          <div className="skill-bar bg-blue-700 shadow-2xl p-4 rounded-full">
          <span className="skill-per">
              <span className="tooltip font-semibold">
              {Math.round(data[next].option2_vote / (data[next].option1_vote + data[next].option2_vote) * 100)}%
              </span>
          </span>
      </div>
        )}
        </button>
    </div>
    <div className="flex items-center gap-8">
      <button onClick={(ev)=>{nextation(ev)}} className="p-2 px-8 rounded-lg bg-gray-700 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
      
    </div>
  </div>)
}
    </div>
        
      )}
    </div>
        
  )
}
