import axios from "axios"
import { useState } from "react"

function Contribute() {

    const [category, setCategory] = useState("")
    const [option1, setOption1] = useState("")
    const [option2, setOption2] = useState("")
    const [newCategory, setNewCategory] = useState("")
    const[submit1, setSubmit1] = useState(false)
    const[submit2, setSubmit2] = useState(false)
    const [discription, setDiscription] = useState("")

        async function submitOptions(ev){
            ev.preventDefault();
            axios.post('/contribute_options', {
                category,
                option1,
                option2
            }).then(setSubmit1(true))
        }

        function submitCategory(ev){
            ev.preventDefault();
            axios.post('/contribute_category', {
                newCategory,
                discription,
            }).then(setSubmit2(true))
        }


  return (
    <div  className="bg-[#212121] w-full flex flex-col items-center p-5 gap-2">
        <h1 className=" text-xl"> your contribution means a lot to me </h1>
        <p className=" p-4 text-center text-sm text-gray-400 mb-4">Here, you can contribute by choosing a related category and providing an appropriate "This or That" question. I will then assess whether it meets the criteria for inclusion in the main game.</p>
        {submit1 && (<span className=" text-green-400 font-semibold"> Submited</span>)}
        <form className="gap-4 flex flex-col sm:border sm:w-fit p-4 rounded-md border"
        onSubmit={(ev)=>submitOptions(ev)}
        >
            <div className=" flex flex-col gap-0 m-0 p-0 w-[300px] sm:w-[350px]">
                <span>category</span>
                <select className=" p-2 w-full rounded-md" 
                value={category}
                onChange={(ev)=>{setCategory(ev.target.value)}}
                >
                    <option>        </option>
                    <option>Football</option>
                    <option>Meme</option>
                    <option>Random</option>
                    <option>Code</option>
                    <option>Real</option>
                    <option>Unrelated</option>
                </select>
            </div>
            <div className=" flex flex-col gap-0 m-0 p-0 w-[300px] sm:w-[350px]">
                <span>First option</span>
                <textarea className="p-1 rounded-md" onChange={(ev)=>{setOption1(ev.target.value)}}
                value={option1} />
            </div>
            <div className=" flex flex-col gap-0 m-0 p-0 w-[300px] sm:w-[350px]">
                <span>Second option</span>
                <textarea className="p-1 rounded-md" onChange={(ev)=>{setOption2(ev.target.value)}} 
                value={option2}/>
            </div>
            <button style={{backgroundImage: "linear-gradient(to right, #1f6dfd, #e63511)"}} className=" text-white p-2 px-12 rounded-full text-2xl font-semibold hover:border hover:text-white" >Submit</button>
        </form>

        <p className=" p-4 text-center text-sm text-gray-400 mt-4">And here, you can suggest a category and describe why you choose it.</p>
        {submit2 && (<span className=" text-green-400 font-semibold"> Submited</span>)}
        <form className="gap-4 flex flex-col sm:border sm:w-fit p-4 rounded-md border" 
        onSubmit={(ev)=>submitCategory(ev)}>          
        <div className=" flex flex-col gap-0 m-0 p-0 w-[300px] sm:w-[350px]">
                <span>Name of the category</span>
                <input type="text" className="p-1 rounded-md" onChange={(ev)=>{setNewCategory(ev.target.value)}} 
                value={newCategory}/>
            </div>
            <div className=" flex flex-col gap-0 m-0 p-0 w-[300px] sm:w-[350px]">
                <span>Category discription</span>
                <textarea className="p-1 rounded-md" onChange={(ev)=>{setDiscription(ev.target.value)}} 
                value={discription}/>
            </div>
            <button style={{backgroundImage: "linear-gradient(to right, #1f6dfd, #e63511)"}} className=" text-white p-2 px-12 rounded-full text-2xl font-semibold hover:border hover:text-white" >Submit</button>
        </form>

    </div>
  )
}

export default Contribute