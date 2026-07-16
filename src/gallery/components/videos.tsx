import { useState } from "react";

interface VideoItem {
	id: string;
	title: string;
}

// » Replace with real YouTube video IDs (the part
// after "v=" in the URL) and real titles.
const videos: VideoItem[] = [
	{ id: "VIDEO_ID_1", title: "Performance Highlight 1" },
	{ id: "VIDEO_ID_2", title: "Performance Highlight 2" },
	{ id: "VIDEO_ID_3", title: "Performance Highlight 3" },
];

function Videos() {
	const [activeVideo, setActiveVideo] = useState<VideoItem | null>(null);

	return (
		<section className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
			<p className="mb-2 font-body text-sm uppercase tracking-[0.3em] text-clay">Watch Us Perform</p>
			<h2 className="mb-8 font-display text-3xl font-bold uppercase text-ink"> Videos</h2>

			<div className="grid grid-cols-1 gap-5         sm:grid-cols-2 lg:grid-cols-3">
				{videos.map((video, index) => (
					<button
						key={`${video.id}-${index}`}
						onClick={() => setActiveVideo(video)}
						className="group relative overflow-hidden rounded-lg text-left shadow-sm transition-shadow hover:shadow-md"
					>
						<img
							className="aspect-video w-full object-cover"
							src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
							alt={video.title}
						/>
						<div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition-colors group-hover:bg-charcoal/50">
							<div className="flex h-14 w-14 items-center justify-center rounded-full bg-clay/90 transition-transform group-hover:scale-110">
								<svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-parchment">
									<path d="M8 5v14l11-7z" />
								</svg>
							</div>
						</div>
						<p className="bg-parchment px-3 py-3 font-body text-sm font-medium text-ink">{video.title}</p>
					</button>
				))}
			</div>

			{activeVideo && (
				<div
					onClick={() => setActiveVideo(null)}
					className="fixed inset-0 z-40 flex items-center justify-center bg-charcoal/90 p-4"
				>
					<div onClick={(e) => e.stopPropagation()} className="relative aspect-video w-full max-w-3xl">
						<iframe
							className="h-full w-full rounded-lg"
							src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
							title={activeVideo.title}
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							allowFullScreen
						/>
						<button
							onClick={() => setActiveVideo(null)}
							aria-label="Close video"
							className="absolute -top-10 right-0 font-body text-sm uppercase tracking-wide text-parchment"
						>
							Close ✕
						</button>
					</div>
				</div>
			)}
		</section>
	);
}

export default Videos;
