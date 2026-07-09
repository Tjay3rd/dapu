import {  minimem } from "../../assets/others/container.js";
import { Link } from "react-router-dom";


function Minimembers() {


  return (
  
    <div className="m-5">
      <h1 className="font-bold text-amber-500/85 text-3xl ">
        Members
      </h1>
      <p className="text-2xl pb-4">
        Our group is very fortunate to be composed of very special individuals who bring needful vibrance and a rare quality to the team. Let's peek a little closer at who they are.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {minimem.map((member, index) => {
          return(
            <div key={index} className="shadow-xl bg-amber-300/30 rounded">
              <div className=" p-2.5 flex flex-col items-center justify-around">
              <img className="w-[180px] h-[180px] object-fit" src={member.image}/>
                <p className="">{member.name}</p>
                <h1 className="font-bold -my-">{member.title}</h1>
                <hr className="w-full my-3"/>
                <p className="text- mb-2 text-md">{member.text}</p>
              </div>
            </div>
          )})
        }
      </div>
      <button className="bg-black text-white text-lg uppercase my-4 p-4 rounded-lg "><Link to='/members'>More Members</Link>
      </button>
      <hr/>
    </div>
  )
}

export default Minimembers;
