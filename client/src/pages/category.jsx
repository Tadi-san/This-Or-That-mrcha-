import {Link, useLocation} from "react-router-dom"
import imageFile from '../assets/efuye.png';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
const Category = () => {
  const { width, height } = useWindowSize()
  const location = useLocation();
  const { score } = location.state || {};
    return (
      <div class=" min-h-screen bg-[#2d092e] min-w-full overflow-clip flex items-center justify-center px-2">
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
        <span className="absolute -top-20 text-2xl font-Silkscreen">Score: <span className={score>=5 ? "text-green-500":"text-red-500"}>{score}</span></span>
        <Link to={''} className=" rounded-full
       p-1 px-6 text-2xl bg-gray-200 opacity-50 text-black text-center">Leader boards</Link>
      <Link to={'/game/Football'} className=" rounded-full
       text-white bg-[#7f1783] p-1 px-6 text-2xl ">Play Again</Link>
      </div>
       <div>
    
  </div>
  {score>=5 && (
    <Confetti
        width={width}
        height={height}
        duration={3000} // 3 seconds
      />
  )}
      </div>
      
    </div>
    );
  };
  
  export default Category;