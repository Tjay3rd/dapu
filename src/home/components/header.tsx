import { Link } from "react-router-dom";
import openmenu from "../../assets/others/openmobmenu.svg";
import closemenu from "../../assets/others/closemobmenu.svg";
import { useState } from "react";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpen = () => {
		setIsOpen(true);
	};

	const handleClose = () => {
		setIsOpen(false);
	};

	return (
		<>
			<header className="w-full top-0 sticky h-32 z-10 bg-gradient-to-r from-red-500 via-green-700 to-yellow-300  max-[310px]:h-34">
				<h1 className="max-[420px]:text-xl max-[360px]:text-lg max-[310px]:text-md font-black text-2xl p-3 ">
					<span className="max-[420px]:text-3xl max-[360px]:text-2xl max-[310px]:text-xl text-4xl">DAPURAUNANZVA</span>
					<br /> ARTS ENSEMBLE
				</h1>
				<p className="pl-3 text-lg font-mono">Where tradition meets passion.</p>
				<button onClick={handleOpen}>
					{!isOpen && <img className="absolute w-12 m-3 right-0 top-7 z-50 lg:hidden" src={openmenu} />}
				</button>
				<ul className=" items-center pt-15 pl-6 text-3xl font-medium hidden absolute gap-3 w-0 right-145 top-0 z-50 min-[1024px]:flex">
					<li className="transition-transform duration-200 hover:scale-105" onClick={handleClose}>
						<Link to="/">Home</Link>
					</li>
					<li className="transition-transform duration-200 hover:scale-105" onClick={handleClose}>
						<Link to="/about">About</Link>
					</li>
					<li className="transition-transform duration-200 hover:scale-105" onClick={handleClose}>
						<Link to="/gallery">Gallery</Link>
					</li>
					<li className="transition-transform duration-200 hover:scale-105" onClick={handleClose}>
						<Link to="/members">Members</Link>
					</li>
					<li className="transition-transform duration-200 hover:scale-105" onClick={handleClose}>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</header>

			<div
				id="displaymenu"
				className={`fixed z-40 right-0 top-0 h-full lg:hidden bg-white w-3/4 ${isOpen ? "block" : "hidden"}`}
			>
				<ul className="flex flex-col items-start pt-15 pl-6 text-2xl font-medium">
					{/*bg-gradient-to-r from-red-500 via-green-700 to-yellow-300 bg-clip-text text-transparent*/}
					<li onClick={handleClose} className="py-2.5">
						<img className="absolute w-12 m-3 left-1 top-0 lg:hidden" src={closemenu} />{" "}
					</li>
					<li onClick={handleClose} className="py-2.5">
						<Link to="/">Home</Link>
					</li>
					<li onClick={handleClose} className="py-2.5">
						<Link to="/about">About</Link>
					</li>
					<li onClick={handleClose} className="py-2.5">
						<Link to="/gallery">Gallery</Link>
					</li>
					<li onClick={handleClose} className="py-2.5">
						<Link to="/members">Members</Link>
					</li>
					<li onClick={handleClose} className="py-2.5">
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</div>
			{isOpen && <div onClick={handleClose} className="fixed inset-0 bg-black opacity-50 z-30" />}
		</>
	);
};

export default Header;
