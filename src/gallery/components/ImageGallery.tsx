import next from "../../assets/others/chevron-direction-right.svg";
import prev from "../../assets/others/chevron-direction-left.svg";
import close from "../../assets/others/icons8-close-500.svg";
import { useEffect, useState, type MouseEvent, type TouchEvent } from "react";

interface image {
	id: number;
	image: string;
}

interface Props {
	images: image[];
	heading: string;
}

function ImageGallery({ images, heading }: Props) {
	const [selectedImage, setSelectedImage] = useState<image | undefined>(undefined);
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isGalleryOpen, setIsGalleryOpen] = useState(false);
	const [isNavVisible, setIsNavVisible] = useState(true);
	const [isZoomed, setIsZoomed] = useState(false);
	const [zoomLevel, setZoomLevel] = useState(1);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [initialMousePosition, setInitialMousePosition] = useState({ x: 0, y: 0 });
	const [isFullScreen, setIsFullScreen] = useState(false);

	const handleImageClick = (image: image) => {
		setSelectedImage(image);
		setCurrentIndex(images.findIndex((img) => img.id === image.id));
	};

	const handlePrevClick = () => {
		const newIndex = (currentIndex - 1 + images.length) % images.length;
		setCurrentIndex(newIndex);
		setSelectedImage(images[newIndex]);
	};

	const handleNextClick = () => {
		const newIndex = (currentIndex + 1) % images.length;
		setCurrentIndex(newIndex);
		setSelectedImage(images[newIndex]);
	};

	const handleCloseClick = () => {
		setSelectedImage(undefined);
		setIsZoomed(false);
		setZoomLevel(1);
		setPosition({ x: 0, y: 0 });
	};

	const toggleGallery = () => {
		setIsGalleryOpen(!isGalleryOpen);
	};

	const toggleNavVisibility = () => {
		setIsNavVisible(!isNavVisible);
	};

	const toggleZoom = () => {
		setIsZoomed(!isZoomed);
		setZoomLevel(isZoomed ? 1 : 2);
		setPosition({ x: 0, y: 0 });
	};

	const handleZoomMove = (e: globalThis.MouseEvent | globalThis.TouchEvent) => {
		if (!isZoomed) return;

		if (e.type === "touchmove") {
			const touch = (e as globalThis.TouchEvent).touches[0];
			const newX = position.x + (touch.clientX - initialMousePosition.x);
			const newY = position.y + (touch.clientY - initialMousePosition.y);
			setPosition({ x: newX, y: newY });
			setInitialMousePosition({
				x: touch.clientX,
				y: touch.clientY,
			});
		} else {
			const newX = position.x + ((e as globalThis.MouseEvent).clientX - initialMousePosition.x);
			const newY = position.y + ((e as globalThis.MouseEvent).clientY - initialMousePosition.y);
			setPosition({ x: newX, y: newY });
			setInitialMousePosition({
				x: (e as globalThis.MouseEvent).clientX,
				y: (e as globalThis.MouseEvent).clientY,
			});
		}
	};

	const handleZoomStart = (e: MouseEvent | TouchEvent) => {
		if (!isZoomed) return;

		const nativeEvent = e.nativeEvent;

		if (nativeEvent.type === "touchstart") {
			const touch = (nativeEvent as globalThis.TouchEvent).touches[0];
			setInitialMousePosition({
				x: touch.clientX,
				y: touch.clientY,
			});
		} else {
			const mouse = nativeEvent as globalThis.MouseEvent;
			setInitialMousePosition({
				x: mouse.clientX,
				y: mouse.clientY,
			});
		}
		window.addEventListener(
			nativeEvent.type === "touchstart" ? "touchmove" : "mousemove",
			handleZoomMove as EventListener,
		);
		window.addEventListener(nativeEvent.type === "touchstart" ? "touchend" : "mouseup", handleZoomEnd as EventListener);
	};

	const handleZoomEnd = () => {
		window.removeEventListener("mousemove", handleZoomMove as EventListener);
		window.removeEventListener("mouseup", handleZoomEnd);
		window.removeEventListener("touchmove", handleZoomMove as EventListener);
		window.removeEventListener("touchend", handleZoomEnd);
	};

	const toggleFullscreenClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.stopPropagation();
		if (isFullScreen) {
			setIsNavVisible(true);
		} else {
			setIsNavVisible(false);
		}
		setIsFullScreen(!isFullScreen);
	};

	const handleFullscreenTap = (e: MouseEvent<HTMLDivElement>) => {
		if (isZoomed) {
			return;
		}
		const clickX = e.clientX;
		const windowWidth = window.innerWidth;
		if (clickX < windowWidth * 0.33) {
			handlePrevClick();
		} else if (clickX > windowWidth * 0.66) {
			handleNextClick();
		} else {
			toggleNavVisibility();
		}
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (selectedImage) {
				if (e.key === "ArrowLeft") {
					handlePrevClick();
				} else if (e.key === "ArrowRight") {
					handleNextClick();
				} else if (e.key === "Escape") {
					handleCloseClick();
				}
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedImage, currentIndex]);

	return (
		<section className="mx-auto max-w-6xl px-5 py-10 sm:px-6">
			<button
				onClick={toggleGallery}
				className="mb-6 flex items-center gap-2 font-display text-2xl font-bold uppercase text-ink"
			>
				<span className="text-clay">{isGalleryOpen ? "−" : "+"}</span>
				{heading}
			</button>

			{isGalleryOpen && (
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
					{images.map((image) => (
						<img
							className="h-48 w-full cursor-pointer rounded-lg object-cover shadow-sm transition-transform duration 300 hover:scale-105"
							key={image.id}
							src={image.image}
							alt={`${heading} photo ${image.id}`}
							onClick={() => handleImageClick(image)}
						/>
					))}
				</div>
			)}

			{selectedImage && (
				<div
					onClick={isFullScreen ? handleFullscreenTap : undefined}
					className={`fixed inset-0 z-40 h-full w-full p-2 ${isFullScreen ? "bg-charcoal" : "bg-charcoal/90"}`}
				>
					<div className="relative flex h-full w-full items-center justify-center overflow-hidden">
						<img
							className="h-full max-w-full rounded-lg object-contain shadow-2xl transition-transform duration-300 ease-in-out"
							src={selectedImage.image}
							alt={`${heading} photo enlarged`}
							style={{
								transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
								cursor: isZoomed ? "grab" : "pointer",
							}}
							onClick={(e) => e.stopPropagation()}
							onMouseDown={handleZoomStart}
							onTouchStart={handleZoomStart}
						/>
						<div
							className={`absolute inset-0 transition-opacity duration-300 ${isNavVisible ? "opacity-100" : "opacity-0"}`}
						>
							<button
								onClick={(e) => {
									e.stopPropagation();
									handlePrevClick();
								}}
								aria-label="Previous image"
								className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 transition hover:opacity-75"
							>
								<img src={prev} alt="" className="h-8 w-5 invert" />
							</button>
							<button
								onClick={(e) => {
									e.stopPropagation();
									handleNextClick();
								}}
								aria-label="Next image"
								className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 transition hover:opacity-75"
							>
								<img src={next} alt="" className="h-8 w-5 invert" />
							</button>
							<button
								onClick={(e) => {
									e.stopPropagation();
									handleCloseClick();
								}}
								aria-label="Close image"
								className="absolute right-0 top-0 m-2  h-8 w-8 cursor-pointer"
							>
								<img src={close} alt="" className="invert" />
							</button>
							<div className="absolute left-0 top-0 m-2 font-body text-lg text-parchment">
								{currentIndex + 1}/{images.length}
							</div>
							<div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-4">
								<button
									onClick={toggleFullscreenClick}
									title="Toggle Fullscreen"
									className="rounded-full bg-charcoal/60 p-3 text-parchment"
								>
									<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
										<path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
									</svg>
								</button>
								<button
									onClick={(e) => {
										e.stopPropagation();
										toggleZoom();
									}}
									aria-label="Toggle zoom"
									className="rounded-full bg-charcoal/60 p-3 text-parchment"
								>
									{isZoomed ? (
										<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
											<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
										</svg>
									) : (
										<svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
											<path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14  9.5 11.99 14 9.5 14zM12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z" />
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</section>
	);
}

export default ImageGallery;
