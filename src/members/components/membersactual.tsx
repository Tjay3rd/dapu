import { mems } from "../../assets/others/container.js";

function Membersactual() {
	return (
		<section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
			<p className="mb-2 font-body text-sm uppercase tracking-[0.3em] text-clay"> Meet The Ensemble</p>
			<h1 className="mb-4 font-display text-3xl font-bold          uppercase text-ink"> Members</h1>
			<p className="mb-10 font-body text-lg leading-relaxed    text-ink/80">
				Our group is fortunate to be composed of talented individuals who bring vibrance and skill to every performance.
				Meet them below.
			</p>

			<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
				{mems.map((member, index) => (
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
						<h2 className="font-display text-lg font-bold text-ink">{member.title}</h2>
						<hr className="my-3 border-clay/20" />
						<p className="font-body text-base leading-relaxed text-ink/70">{member.text}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Membersactual;
