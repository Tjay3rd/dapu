import Divider from "../../home1/components/divider";

const sections = [
	{
		eyebrow: "Since 1996",
		title: "History",
		text: `Dapuraunanzva Arts Ensemble was founded in 1996  with a passion for promoting traditional Zimbabwean arts and culture. Over the years, we have grown into a renowned ensemble, showcasing our rich cultural heritage through traditional music, dance, and drama.`,
	},
	{
		eyebrow: "Our Purpose Today",
		title: "Mission",
		text: `Our mission is to preserve and promote Zimbabwean arts and culture, while fostering creativity, innovation, and community engagement.      We strive to create a platform for artists to express themselves and for audiences to experience and appreciate the beauty of Zimbabwean culture.`,
	},
	{
		eyebrow: "Looking Ahead",
		title: "Vision",
		text: `Our vision is to become a leading arts ensemble in Zimbabwe, recognized for our excellence in traditional dance, music, and drama. We aim to inspire a love of arts and culture in our community, and to contribute to the country's cultural education and development.`,
	},
];

function Aboutcontent() {
	return (
		<main className="mx-auto max-w-3xl px-5 py-14 sm:px-6">
			<blockquote className="mb-14 border-l-4 border-clay pl-6 font-display text-2xl italic leading-snug text-ink sm:text-3xl">
				"What began as a small circle of dancers in 1996 has grown into a living archive of Zimbabwean heritage —
				carried forward one performance at a time."
			</blockquote>

			<div className="flex flex-col gap-12">
				{sections.map((section) => (
					<div key={section.title}>
						<p className="mb-2 font-body text-sm uppercase tracking-[0.3em] text-clay">{section.eyebrow} </p>
						<h2 className="mb-3 font-display text-2xl font-bold uppercase text-ink">{section.title}</h2>
						<p className="font-body text-lg leading-relaxed      text-ink/80"> {section.text}</p>
					</div>
				))}
			</div>

			<Divider tone="light" />
		</main>
	);
}

export default Aboutcontent;
