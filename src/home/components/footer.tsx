import phoneicon from "../../assets/others/phone.png";
import locationicon from "../../assets/others/location.svg";
import emailicon from "../../assets/others/email.svg";
import facebook from "../../assets/others/faceblack.svg";
import instagram from "../../assets/others/instablack.svg";
import youtube from "../../assets/others/youtublack.svg";
import telegram from "../../assets/others/teleblack.svg";
import x from "../../assets/others/xblack.svg";
import whatsapp from "../../assets/others/whatsblack.svg";

interface Props {
	src: string;
	alt: string;
	href: string;
	className: string;
	target: string;
	rel: string;
}

function Footer() {
	const ImageLink = ({ src, alt, href, className, target = "_blank", rel = "noopener noreferrer" }: Props) => (
		<a href={href} target={target} rel={rel}>
			<img className={className} src={src} alt={alt} />
		</a>
	);

	return (
		<div className="bg-green-700">
			<h1 className="uppercase m-5 ml-2  pt-5 text-3xl font-bold">Contact Details</h1>
			<div className="m-5 ml-2 flex flex-col justify-center">
				<div className="flex items-center gap-5">
					<img src={locationicon} className=" my-3 w-10 h-10 " />
					<p className="max-[344px]:text-sm font-medium text-lg">Courthold Theatre CBD Mutare, ZW</p>
				</div>
				<div className="flex items-center gap-5">
					<img src={phoneicon} className="my-3 w-10 h-10 " />
					<p className="max-[344px]:text-sm font-medium text-lg">+263773000980</p>
				</div>
				<div className="flex items-center gap-5">
					<img src={emailicon} className="my-3 w-10 h-10  " />
					<p className=" max-[344px]:text-sm font-medium text-lg break-all">dapuraunanzvagroup@gmail.com</p>
				</div>
			</div>

			<div>
				<h1 className="uppercase mt-10 my-2 mx-2 text-3xl font-bold">follow us</h1>
			</div>

			<div className="grid grid-cols-6 mr-4">
				<ImageLink
					className="m-2 w-full h-full object-fill"
					src={facebook}
					alt="social media icon"
					href=""
					target={""}
					rel={""}
				/>
				<ImageLink
					className="m-2 w-full h-full object-fill"
					src={instagram}
					alt="social media icon"
					href=""
					target={""}
					rel={""}
				/>
				<ImageLink
					className="m-2 w-full h-full object-fill"
					src={youtube}
					alt="social media icon"
					href=""
					target={""}
					rel={""}
				/>
				<ImageLink
					className="m-2 w-full h-full object-fill"
					src={telegram}
					alt="social media icon"
					href=""
					target={""}
					rel={""}
				/>
				<ImageLink
					className="m-2 w-full h-full object-fill p-0.5"
					src={x}
					alt="social media icon"
					href=""
					target={""}
					rel={""}
				/>
				<ImageLink
					className="m-2 w-full h-full object-fill p-1"
					src={whatsapp}
					alt="social media icon"
					href="https://wa.me/263773000980"
					target={""}
					rel={""}
				/>
			</div>
			<hr className="mx-2 mt-3" />
			<p className=" ml-2 text-lg font-medium">&copy; Tapiwa John. All Rights Reserved. 2025</p>
		</div>
	);
}

export default Footer;
