import phoneicon from "../../assets/others/phone.png";
import locationicon from "../../assets/others/location.svg";
import emailicon from "../../assets/others/email.svg";
import facebook from "../../assets/others/faceblack.svg";
import instagram from "../../assets/others/instablack.svg";
import youtube from "../../assets/others/youtublack.svg";
import tiktok from "../../assets/others/tiktok.svg";
import x from "../../assets/others/xblack.svg";
import whatsapp from "../../assets/others/whatsblack.svg";

interface SocialLink {
	src: string;
	alt: string;
	href: string;
}

const socialLinks: SocialLink[] = [
	{ src: facebook, alt: "Facebook", href: "https://www.facebook.com/Dapuraunanzva-Arts-Ensemble" },
	{ src: instagram, alt: "Instagram", href: "https://www.instagram.com/dapuraunanzva" },
	{ src: youtube, alt: "YouTube", href: "https://www.youtube.com/@dapuraunanzvaa" },
	{ src: tiktok, alt: "TikTok", href: "https://www.tiktok.com/@dapuraunanzva" },
	{ src: x, alt: "X", href: "https://x.com/dapuraunanzva" },
	{
		src: whatsapp,
		alt: "WhatsApp",
		href: "https://wa.me/263773000980",
	},
];

function Footer() {
	return (
		<footer className="bg-forest text-parchment">
			<div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:px-6 md:grid-cols-3">
				<div>
					<h2 className="mb-4 font-display text-xl     font-bold uppercase"> Contact </h2>
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-4">
							<img src={locationicon} alt="" className="h-6 w-6 flex-shrink-0" />
							<p className="font-body text-base"> Courtauld Theatre, CBD Mutare, ZW</p>
						</div>
						<div className="flex items-center gap-4">
							<img src={phoneicon} alt="" className="h-6 w-6 flex-shrink-0" />
							<p className="font-body text-base"> +263 773 000 980 / +263 773 738 486</p>
						</div>
						<div className="flex items-center gap-4">
							<img src={emailicon} alt="" className="h-6 w-6 flex-shrink-0" />
							<p className="break-all font-body text-base"> dapuraunanzvagroup@gmail.com </p>
						</div>
					</div>
				</div>

				<div>
					<h2 className="mb-4 font-display text-xl font-bold uppercase"> Follow Us </h2>
					<div className="flex flex-wrap gap-3">
						{socialLinks.map((social) => (
							<a
								key={social.alt}
								href={social.href || undefined}
								target="_blank"
								rel="noopener noreferrer"
								aria-label={social.alt}
								className="flex h-10 w-10 items-center justify-center rounded-full bg-parchment/10 transition-colors hover:bg-parchment/20"
							>
								<img src={social.src} alt="" className="h-5 w-5 object-contain" />
							</a>
						))}
					</div>
				</div>

				<div>
					<h2 className="mb-4 font-display text-xl font-bold uppercase">Dapuraunanzva Arts Ensemble</h2>
					<p className="font-body text-base text-parchment/80">
						Where tradition meets passion. Traditional Zimbabwean dance and music for festivals, weddings, corporate
						events, and cultural celebrations.
					</p>
				</div>
			</div>

			<div className="border-t border-parchment/20 px-5 py-5 sm:px-6">
				<p className="mx-auto max-w-6xl font-body text-sm text-parchment/70">
					&copy; {new Date().getFullYear()} Dapuraunanzva Arts Ensemble. All Rights Reserved.
				</p>
				<p className="mx-auto max-w-6xl font-body text-xs text-parchment/50">Site by Tapiwa John</p>
			</div>
		</footer>
	);
}

export default Footer;
