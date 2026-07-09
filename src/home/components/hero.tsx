import { Link } from "react-router-dom";

function Hero() {
	return (
		<div className="relative overflow-hidden h-screen">
			<div
				className="absolute inset-0 bg-cover bg-center ken-burns"
				style={{ backgroundImage: `url(https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/home1.jpg)` }}
			></div>
			<div
				className="absolute inset-0 bg-cover bg-center ken-burns"
				style={{ backgroundImage: `url(https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/home2.jpg)` }}
			></div>
			<div
				className="absolute inset-0 bg-cover bg-center ken-burns"
				style={{ backgroundImage: `url(https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/home3.jpg)` }}
			></div>
			<div className="absolute inset-0 bg-black opacity-40" />
			<div className="absolute text-white inset-0 mx-4 flex flex-col items center justify-center z-9 ">
				<div className="p-4 py-10 w-fit text-center rounded-2xl bg-green-500/15">
					<h1 className="text-2xl uppercase underline underline-offset-5 decoration-yellow-600 font-bold mb-4">
						Celebrating Heritage Through Dance
					</h1>
					<p className="text-xl">
						Welcome to our official webpage. We, The Dapuraunanzva Arts Ensemble, are a traditional arts and culture
						dance group that delivers exhilarating performances across all kinds of events. It has become a proud
						trademark of ours to infuse the audience with a rich aura of deep culture in spirited and passionate
						displays through music and dance in all our shows. Should you be fortunate enough to attend one of our
						presentations dear viewer, you too would testify to how we are such a joy and spectacle to watch!!
					</p>
					<button className="mt-7 bg-black rounded-lg p-4 uppercase">
						<Link to="/contact">contact us</Link>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Hero;
