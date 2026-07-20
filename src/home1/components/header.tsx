import { Link } from "react-router-dom";
import { useState } from "react";
import openmenu from "../../assets/others/openmobmenu.svg";
import closemenu from "../../assets/others/closemobmenu.svg";

const NAV_LINKS = [
	{ to: "/", label: "Home" },
	{ to: "/about", label: "About" },
	{ to: "/gallery", label: "Gallery" },
	{ to: "/members", label: "Members" },
	{ to: "/contact", label: "Contact" },
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<header className="sticky top-0 z-20 w-full bg-charcoal px-4 py-4 text-parchment sm:px-6">
				<div className="mx-auto flex max-w-6xl items-center justify-between">
					<h1 className="font-display text-xl font-bold uppercase leading-tight sm:text-2xl">
						Dapuraunanzva
						<span className="block text-sm font-normal tracking-[0.2em] text-marigold sm:text-base">Arts Ensemble</span>
					</h1>

					<nav aria-label="Primary" className="hidden lg:block">
						<ul className="flex items-center gap-8 font-body text-base font-medium uppercase tracking-wide">
							{NAV_LINKS.map((link) => (
								<li key={link.to} className="transition-colors hover:text-marigold">
									<Link to={link.to}>{link.label}</Link>
								</li>
							))}
						</ul>
					</nav>

					<button onClick={() => setIsOpen(true)} aria-label="Open menu" className="lg:hidden">
						<img className="w-9 text-marigold" src={openmenu} alt="" />
					</button>
				</div>
			</header>

			<div
				className={`fixed right-0 top-0 z-40 h-full w-3/4 max-w-xs bg-parchment text-ink shadow-2xl transition-transform duration-300 lg:hidden
                ${isOpen ? "translate-x-0" : "translate-x-full"}`}
			>
				<button onClick={() => setIsOpen(false)} aria-label="Close menu" className="absolute left-4 top-4">
					<img className="w-9" src={closemenu} alt="" />
				</button>
				<ul className="flex flex-col gap-1 pl-6 pt-20 font-body text-xl font-medium">
					{NAV_LINKS.map((link) => (
						<li key={link.to} className="py-3">
							<Link to={link.to} onClick={() => setIsOpen(false)}>
								{link.label}
							</Link>
						</li>
					))}
				</ul>
			</div>

			{isOpen && <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-30 bg-black/50 lg:hidden" />}
		</>
	);
};

export default Header;
