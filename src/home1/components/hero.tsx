import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const heroImages = [
	" https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/hero_images/home1.jpg ",
	"https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/hero_images/home2.jpg ",
	" https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/hero_images/home3.jpg ",
	// add more image URLs here — nothing else needs to change
];

const SLIDE_DURATION_MS = 3000;

function Hero() {
	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			setActiveIndex((current) => (current + 1) % heroImages.length);
		}, SLIDE_DURATION_MS);
		return () => clearInterval(timer);
	}, []);

	return (
		<div className="relative h-dvh overflow-hidden">
			{heroImages.map((image, index) => (
				<div
					key={image}
					className="absolute inset-0 bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out"
					style={{
						backgroundImage: `url(${image})`,
						opacity: index === activeIndex ? 1 : 0,
					}}
				/>
			))}

			<div className="absolute inset-0 bg-charcoal/50" />

			<div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-parchment">
				<div className="w-fit max-w-xl rounded-2xl bg-charcoal/40 px-6 py-10 backdrop-blur-sm sm:px-10">
					<p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-marigold">Mutare, Zimbabwe</p>
					<h1 className="mb-4 font-display text-3xl font-semibold uppercase leading-tight sm:text-5xl">
						Celebrating Heritage
						<br /> Through Dance
					</h1>
					<p className="font-body text-base leading-relaxed sm:text-lg">
						The Dapuraunanzva Arts Ensemble brings traditional Zimbabwean music and dance to festivals, weddings,
						corporate events, and cultural celebrations across Southern Africa.
					</p>
					<Link
						to="/contact"
						className="mt-7 inline-block rounded-lg bg-clay px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-parchment transition-transform hover:scale-105"
					>
						Book Our Ensemble
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Hero;
