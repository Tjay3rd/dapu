import { Link } from "react-router-dom";

interface EventItem {
	title: string;
	venue: string;
	date: string;
	description: string;
}

// » Placeholder data — replace with real events.
const upcomingEvents: EventItem[] = [
	{
		title: "Harare Cultural Festival",
		venue: "Harare Gardens, Harare",
		date: "2026-08-14",
		description: "A full showcase of traditional dance and drum performance.",
	},
	{
		title: "Mutare Heritage Day",
		venue: "Courthold Theatre, Mutare",
		date: "2026-09-02",
		description: "Celebrating local heritage with music, dance, and drama.",
	},
];

const pastEvents: EventItem[] = [
	{
		title: "Victoria Falls Carnival",
		venue: "Victoria Falls",
		date: "2026-05-10",
		description: "Performed for an international audience of festival-goers.",
	},
	{
		title: "Zimbabwe Culture Week",
		venue: "National Gallery, Harare",
		date: "2026-03-22",
		description: "Opening performance for the annual culture week celebration.",
	},
];

function formatDate(dateStr: string) {
	const date = new Date(dateStr);
	return {
		day: date.getDate(),
		month: date.toLocaleString("en-US", {
			month: "short",
		}),
	};
}

function EventCard({ event, variant }: { event: EventItem; variant: "upcoming" | "past" }) {
	const { day, month } = formatDate(event.date);

	return (
		<div className="flex gap-4 rounded-lg bg-parchment      p-5 shadow-sm">
			<div
				className={`flex h-16 w-16 flex-shrink-0 flex-col items-center justify-center rounded-lg font-display ${variant === "upcoming" ? "bg-clay text-parchment" : "bg-ink/10 text-ink/70"}`}
			>
				<span className="text-xl font-bold leading-none">{day}</span>
				<span className="text-xs uppercase tracking-wide leading-none">{month}</span>
			</div>
			<div>
				<h3 className="font-display text-lg font-bold text-ink"> {event.title}</h3>
				<p className="mb-1 font-body text-sm uppercase tracking-wide text-clay"> {event.venue}</p>
				<p className="font-body text-base text-ink/70">{event.description}</p>
			</div>
		</div>
	);
}

function Events() {
	return (
		<section className="mx-auto max-w-4xl px-5 py-14 sm:px-6">
			<p className="mb-2 font-body text-sm uppercase         tracking-[0.3em] text-clay">Come Watch Us</p>
			<h1 className="mb-10 font-display text-3xl        font-bold uppercase text-ink"> Events </h1>

			<div className="mb-14">
				<h2 className="mb-5 font-display text-xl          font-bold text-ink"> Upcoming Shows </h2>
				<div className="flex flex-col gap-4">
					{upcomingEvents.map((event) => (
						<EventCard key={event.title} event={event} variant="upcoming" />
					))}
				</div>
			</div>

			<div>
				<h2 className="mb-5 font-display text-xl            font-bold text-ink"> Recently Performed</h2>
				<div className="flex flex-col gap-4">
					{pastEvents.map((event) => (
						<EventCard key={event.title} event={event} variant="past" />
					))}
				</div>
			</div>

			<Link
				to="/contact"
				className="mt-10 inline-block rounded-lg  bg-ink px-6 py-4 font-body text-sm font-semibold uppercase tracking-wide text-parchment transition-transform       hover:scale-105"
			>
				Book Us For Your Event
			</Link>
		</section>
	);
}

export default Events;
