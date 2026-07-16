import Events from "./components/Events";
import Gallerycover from "./components/gallerycover";
import ImageGallery from "./components/ImageGallery";
import Videos from "./components/videos";
import { fairImages, festivalImages, partyImages, generalImages } from "../assets/galleryMedia/gallerypictures";

function Gallery() {
	return (
		<div>
			<Gallerycover />
			<ImageGallery images={fairImages} heading="Event 1 Fair" />
			<ImageGallery images={festivalImages} heading="Event 2 Festival" />
			<ImageGallery images={partyImages} heading="Event 3 Party" />
			<ImageGallery images={generalImages} heading="General" />
			<Videos />
			<Events />
		</div>
	);
}

export default Gallery;
