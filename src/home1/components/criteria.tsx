import { Link } from "react-router-dom";
import { criterion } from "../../assets/others/container.js";
import Divider from "./divider.js";

function Criteria() {
	return (
		<section className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
			<p className="font-body text-sm uppercase tracking-[0.3em] text-clay">Where We Perform</p>
			<h2 className="mb-4 mt-2 font-display text-3xl font-bold text-ink">Events</h2>
			<p className="mb-8 font-body text-lg leading-relaxed text-ink/80">
				The Dapuraunanzva Arts Ensemble performs at a wide range of events, including but not limited to:
			</p>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{criterion.map((event, index) => (
					<div
						key={index}
						className="rounded-lg border border-clay/20 bg-parchment p-5 shadow-sm transition-shadow hover:shadow-md"
					>
						<img className="mb-3 h-12 w-12 object-contain" src={event.image} alt="" />
						<h3 className="mb-2 font-display text-lg font-bold text-ink">{event.title}</h3>
						<p className="font-body text-base leading-relaxed text-ink/70">{event.text}</p>
					</div>
				))}
			</div>
			<Link
				to="/events"
				className="mt-8 inline-block rounded-lg bg-ink px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-parchment transition-transform hover:scale-105"
			>
				More Events
			</Link>
			<Divider tone="light" />
		</section>
	);
}

export default Criteria;
