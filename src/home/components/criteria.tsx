import { criterion } from "../../assets/others/container.js";
import { Link } from "react-router-dom";

function Criteria() {


  return (
    <div className="m-5">
       <h1 className="font-bold text-amber-500/85 text-3xl ">
          Events
        </h1>
      <p className="text-2xl pb-4">
        The Dapuraunanzva Arts Ensemble perfoms at a wide range of events including but not limited to the following:
      </p>
      <div className="grid grid-cols-2 gap-4">
        {criterion.map((event, index) => {
          return(
            <div key={index} className=" bg-amber-300/30 rounded">
              <div className="relative p-2 flex flex-col justify-around">
                <img className="w-15 h-15" src={event.image}/>
                <h1 className="font-bold">{event.title}</h1>
                <p className="max-[280px]:break-all mb-2 text-md">{event.text}</p>
              </div>
            </div>
          )})
        }
      </div>
      <button className="bg-black text-white text-lg uppercase my-4 p-4 rounded-lg "><Link to='/events'>More Events</Link>
      </button>
      <hr/>
    </div>
  )
}

export default Criteria;
