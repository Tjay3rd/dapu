import cover from "../../assets/others/contact.jpg";

const Contactcover = () => {
	return (
		<div className="relative h-[45vh] min-h-[320px] w-full overflow-hidden">
			<img
				className="absolute inset-0 h-full w-full object-cover"
				src={cover}
				alt="Contact Dapuraunanzva Arts Ensemble"
			/>
			<div className="absolute inset-0 bg-charcoal/60" />
			<div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center  text-parchment">
				<p className="mb-3 font-body text-sm uppercase tracking-[0.3em] text-marigold">Book Us For Your Event</p>
				<h1 className="font-display text-4xl font-semibold uppercase sm:text-5xl">Contact Us</h1>
			</div>
		</div>
	);
};

export default Contactcover;
