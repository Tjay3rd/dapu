import { contacts } from "../../assets/others/container.js";

function Contactcard() {
	return (
		<section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
			<h2 className="mb-8 font-display text-2xl font-bold uppercase text-ink">Get In Touch With Us</h2>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{contacts.map((card, index) => (
					<div
						key={index}
						className="flex flex-col items-center rounded-lg bg-parchment p-8 text-center shadow-sm transition-shadow hover:shadow-md"
					>
						<img className="mb-4 h-12 w-12" src={card.icon} alt="" />
						<p className="font-display text-lg font-bold text-ink">{card.title}</p>
						<p className="font-body text-base text-ink/70">{card.content}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Contactcard;
