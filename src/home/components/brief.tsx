import { Link } from "react-router-dom";

function Brief() {

  return (
    <div className="m-5 flex flex-col">
      <div>
        <h1 className="font-bold  text-amber-500/85 text-3xl ">
          Overview
        </h1>
        <p className="text-2xl my-3 ">
          Dapuranzva Arts Ensemble was founded in 1996  with a passion for promoting traditional Zimbabwean arts and culture. Over the years we have grown into a renowned ensemble, showcasing our rich cultural heritage through traditional and dance. Our mission is to preserve and promote Zimbabwean arts and culture, and our vision is to become the leading arts ensemble in Zimbabwe...
        </p>
         <button className="bg-black text-white text-lg uppercase mb-4 p-4 rounded-lg "><Link to='/about'>Read more</Link>
          </button>
        <hr/>
      </div>
    </div>
  )
}

export default Brief;
