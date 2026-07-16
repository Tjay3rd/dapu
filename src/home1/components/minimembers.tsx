import { Link } from "react-router-dom";
import { minimem } from "../../assets/others/container.js";
import Divider from "./divider.js";

function Minimembers() {
	return (
		<section className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
			<p className="font-body text-sm uppercase tracking-[0.3em] text-clay">Meet The Ensemble</p>
			<h2 className="mb-4 mt-2 font-display text-3xl font-bold text-ink">Members</h2>
			<p className="mb-8 font-body text-lg leading-relaxed text-ink/80">
				Our group is fortunate to be composed of talented individuals who bring vibrance and skill to every performance.
				Meet a few of them below.
			</p>
			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{minimem.map((member, index) => (
					<div
						key={index}
						className="rounded-lg bg-parchment p-5 text-center shadow-sm transition-shadow hover:shadow-md"
					>
						<img
							className="mx-auto mb-4 h-[180px] w-[180px] rounded-full object-cover"
							src={member.image}
							alt={member.name}
						/>
						<p className="font-body text-sm uppercase tracking-wide text-ink/60">{member.name}</p>
						<h3 className="font-display text-lg font-bold text-ink">{member.title}</h3>
						<hr className="my-3 border-clay/20" />
						<p className="font-body text-base leading-relaxed text-ink/70">{member.text}</p>
					</div>
				))}
			</div>
			<Link
				to="/members"
				className="mt-8 inline-block rounded-lg bg-ink px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-parchment transition-transform hover:scale-105"
			>
				More Members
			</Link>
			<Divider tone="light" />
		</section>
	);
}

export default Minimembers;
