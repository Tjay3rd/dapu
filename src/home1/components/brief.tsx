import { Link } from "react-router-dom";
import Divider from "./divider";

function Brief() {
	return (
		<section className="mx-auto max-w-3xl px-5 py-12 sm:px-6">
			<p className="font-body text-sm uppercase tracking-[0.3em] text-clay">Since 1996</p>
			<h2 className="mb-4 mt-2 font-display text-3xl font-bold text-ink">Overview</h2>
			<p className="font-body text-lg leading-relaxed text-ink/80">
				Dapuraunanzva Arts Ensemble was founded in 1996 with a passion for promoting traditional Zimbabwean arts and
				culture. Over the years we have grown into a renowned ensemble, showcasing our rich cultural heritage through
				traditional music and dance. Our mission is to preserve and promote Zimbabwean arts and culture, and our vision
				is to become the leading arts ensemble in Zimbabwe.
			</p>
			<Link
				to="/about"
				className="mt-6 inline-block rounded-lg bg-ink px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-parchment transition-transform hover:scale-105"
			>
				Read More
			</Link>
			<Divider tone="light" />
		</section>
	);
}

export default Brief;
