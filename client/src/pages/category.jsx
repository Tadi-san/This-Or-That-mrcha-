import {Link} from "react-router-dom"

const Category = () => {
    const fake = [
      { category: 'Football' },
      { category: 'Meme' },
      { category: 'Random' },
      { category: 'Code' },
      { category: 'Real' },
      { category: 'Unrelated' },
    ];
  
    return (
      <div className="bg-[#212121] w-full min-h-screen flex flex-col gap-8 items-center">
        <h1 className=" text-3xl sm:text-5xl mt-5">Choose a category</h1>
        <div className="w-fit grid grid-cols-2 gap-8 p-8 ">
          {fake.map((cat) => (
            <Link to={"/game/"+cat.category} className="bg-[#19191b] text-gray-400 shadow-black shadow w-32 h-32 sm:w-52 sm:h-52 rounded-lg flex flex-col justify-center items-center" key={cat.category}>
              <span className=" text-2xl">
              {cat.category}
              </span>
            </Link>
          ))}
        </div>
          <h1 className=" text-3xl w-full text-center"> Contribute by adding options </h1>
          <p className=" p-4 text-gray-400 text-center sm:w-1/2">Our website features an engaging "This or That" game where users can contribute their own questions based on predefined categories. After submission, our admin (me) reviews and approves the questions that meet our quality criteria. Approved questions are then published in the main game, providing an ever-expanding collection of user-generated content for our community to enjoy. Join us in contributing and playing the game to enhance the interactive experience!</p>
          <Link to={"/contribute"} style={{backgroundImage: "linear-gradient(to right, #1f6dfd, #e63511)"}} className=" text-white p-2 px-12 rounded-full text-2xl font-semibold hover:border mb-7 hover:text-gray-200" >Contribute</Link>
          
      </div>
    );
  };
  
  export default Category;