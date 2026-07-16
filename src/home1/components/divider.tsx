function Divider({ tone = "light" }: { tone?: "light" | "dark" }) {
	const color = tone === "light" ? "bg-clay/60" : "bg-marigold/70";

	return (
		<div aria-hidden="true" className="my-6 flex h-2 w-full gap-[2px] overflow-hidden">
			{Array.from({ length: 60 }).map((_, i) => (
				<span key={i} className={`h-2 w-2 flex-shrink-0 rotate-45 ${color}`} />
			))}
		</div>
	);
}

export default Divider;
