import { Routes, Route } from "react-router-dom";
import Home from "./home1/Home.tsx";
import About from "./about/About.tsx";
import Gallery from "./gallery/Gallery.tsx";
import Members from "./members/Members.tsx";
import Events from "./gallery/components/Events.tsx";
import Contact from "./contact/Contact.tsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/gallery" element={<Gallery />} />
			<Route path="/members" element={<Members />} />
			<Route path="/events" element={<Events />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
}

export default App;
