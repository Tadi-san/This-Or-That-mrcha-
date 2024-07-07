import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ProgressBar } from 'react-loader-spinner'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

export const GamePage = () => {
  const { subpage } = useParams();
  const [next, setNext] = useState(0);
  const [show, setShow] = useState(false);
  const [once, setOnce] = useState(false)
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0)
  const [timerKey, setTimerKey] = useState(9);
  const timerRef = useRef(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios.get("/game/"+ subpage).then(response => {
      setData(response.data);
      setIsLoading(false); 
    });
  }, [subpage]);

  const handleTimerComplete = () => {
    nextation();
    setNext(next + 1);
    setTimerKey((prevKey) => prevKey + 1);
    timerRef.current?.restart();
  };

  const nextation = () => {
    setOnce(false);
    setShow(false);
    
  };

  const optionOne = async (ev) => {
    ev.preventDefault();
    if (!once) {
      setShow(true);
      await axios.post('/option1/' + data[next]._id);
      setOnce(true);
      if (data[next].option1_vote >= data[next].option2_vote){
        setScore(score +1 )
      }
      const remainingTime = timerRef.current.getRemainingTime();
      setTimeout(() => {
        nextation();
        setNext(next + 1);
      }, remainingTime * 1000);
    }
  };

  const optionTwo = async (ev) => {
    if (!once) {
      ev.preventDefault();
      setShow(true);
      await axios.post('/option2/' + data[next]._id);
      setOnce(true);
      if (data[next].option2_vote >= data[next].option1_vote){
        setScore(score +1 )
      }
      const remainingTime = timerRef.current.getRemainingTime();
      setTimeout(() => {
        nextation();
        setNext(next + 1);
      }, remainingTime * 1000);
    }
  };

  if (next > 9) {
    navigate('/category', { state: { score } })
  }

  
  return (
    <div className='bg-[#560058] w-full min-h-screen flex flex-col p-2  items-center justify-center'>
      {isLoading ? ( // Render loading state when isLoading is true
        <div>
         <ProgressBar
  visible={true}
  height="80"
  width="80"
  color="#fd0000"
  ariaLabel="progress-bar-loading"
  wrapperStyle={{}}
  wrapperClass=""
  borderColor= {"#212121"}
  barColor = {"#e63511"}
  />
      {next > 9 && (
              <Link
              to={{
                pathname: '/category',
                state: { score },
              }}
              style={{
                backgroundImage: 'linear-gradient(to right, #1f6dfd, #e63511)',
              }}
              className="text-white p-2 px-12 rounded-full text-2xl font-semibold hover:border hover:text-gray-200"
            >
              Go Back
            </Link>
      )}
        </div>
      ) : (
    <div>
      {next > 9 && (
              <Link to={"/category"} style={{backgroundImage: "linear-gradient(to right, #1f6dfd, #e63511)"}} className=" text-white p-2 px-12 rounded-full text-2xl font-semibold hover:border hover:text-gray-200" >Go Back</Link>
      )}
      {data.length > 0 && 
  (<div className='bg-[#560058] w-full min-h-screen flex flex-col gap-4 p-2 items-center' >
    <div className='bg-[#1e1e1e] flex flex-col items-center mt-16 w-full relative'>
      <button onClick={(ev)=>{optionOne(ev)}} className="w-full flex flex-col items-center min-w-[350px] sm:w-[600px] h-64 p-4 bg-[#fd3231] justify-around rounded-t">
        <h1 className=" font-semibold text-4xl">
        {data[next].option1} 
        
        </h1>
        {show && (
          <div className="skill-bar shadow-2xl bg-red-800 p-4 rounded-full">
          <span className="skill-per" >
              <span className="tooltip font-semibold" >
              {Math.round(data[next].option1_vote / (data[next].option1_vote + data[next].option2_vote) * 100)}%
              </span>
          </span>
      </div>
        )}
        </button>
        <span className=" absolute -top-5 bg-[#000] p-2 rounded-full px-4 ">
        {next+1}
        
        </span>
      <div className=" z-30 bg-black rounded-full flex justify-center w-fit h-fit absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" >
      <CountdownCircleTimer
          key={timerKey}
          isPlaying
          strokeWidth={5}
          size={50}
          strokeDashoffset={7}
          duration={7}
          colors={['#15ff00', '#15ff00', '#bfff00', '#ff2a00']}
          colorsTime={[7, 5, 2, 0]}
          onComplete={handleTimerComplete}
          ref={timerRef}
          rotation="counterclockwise"
        >
          {({ remainingTime }) => "OR"}
        </CountdownCircleTimer>
      </div>
      <button onClick={(ev)=>{optionTwo(ev)}}  className="w-full flex flex-col items-center justify-around sm:w-[600px] h-64 p-4 bg-[#2e8af4] rounded-b">
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
    <div className="flex items-center font-Silkscreen">
      Score: {score}/10
      {/* <button onClick={(ev)=>{nextation(ev)}} className="p-2 px-8 rounded-lg bg-gray-700 font-semibold">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button> */}
      
    </div>
  </div>)
}
    </div>
        
      )}
    </div>
        
  )
}
