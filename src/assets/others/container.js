import business from "./briefcase.svg";
import social from "./social.png";
import arts from "./arts.png";
import privaat from "./private.png";
import home from "./home-icon.svg";
import telephone from "./black-telephone.svg";
import email from "./email.svg";

const criterion = [
	{
		title: "Business Events",
		text: "Corporate events such as conferences and serminars. Not excluding potential sponsored advertising gigs.",
		image: business,
	},
	{
		title: "Social Events",
		text: "Reception of an honoured guest like a political figure, a national hero, a sports team etc, music shows.",
		image: social,
	},
	{
		title: "Arts and Cultural Events",
		text: "Music and Arts Festivals and Culture Expos such as the ME!FEST Expo.",
		image: arts,
	},
	{
		title: "Private Events",
		text: "These include weddings, private parties, birthdays parties  and other like celebrations.",
		image: privaat,
	},
];

const minimem = [
	{
		name: "Keaven",
		title: "Team Leader",
		text: "Enthusiastic natural born leader.",
		image: "https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/p_pics/team-leader.jpg?updatedAt=1783525785940",
	},
	{
		name: "Tatenda Zano",
		title: "Dancer",
		text: "Just a girl who found her voice in drums and her freedom in dance. Hounoring where I come from and sharing it with the world🥰.",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260708-WA0067.jpg",
	},
	{
		name: "Shellon Saungweme",
		title: "Dancer and Vocalist",
		text: "Creative and vibrant personality.",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0024.jpg",
	},
	{
		name: "Gilbert Farai Mhikuro",
		title: "Choreographer and Trainer",
		text: "Skillfull artist, unmatched in his craft.",
		image: "https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/p_pics/IMG-20260708-WA0062.jpg",
	},
];
const mems = [
	{
		name: "Keaven",
		title: "Team Leader",
		text: "Enthusiastic natural born leader.",
		image: "https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/p_pics/team-leader.jpg?updatedAt=1783525785940",
	},
	{
		name: "Tatenda Zano",
		title: "Dancer",
		text: "Just a girl who found her voice in drums and her freedom in dance. Hounoring where I come from and sharing it with the world🥰.",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260708-WA0067.jpg",
	},
	{
		name: "Shellon Saungweme",
		title: "Dancer and Vocalist",
		text: "Creative and vibrant personality.",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0024.jpg",
	},
	{
		name: "Gilbert Farai Mhikuro",
		title: "Choreographer and Trainer",
		text: "Skillfull artist, unmatched in his craft.",
		image: "https://ik.imagekit.io/dapuraunanzva01/dapuraunanzva_images/p_pics/IMG-20260708-WA0062.jpg",
	},
	{
		name: "Charity, 'Baby Girl' ",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0035.jpg",
	},
	{
		name: "Tadiwa",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260710-WA0004.jpg",
	},
	{
		name: "Esnath Rutendo Pegara",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260708-WA0059.jpg",
	},
	{
		name: "Patience Ruhukwa",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0027.jpg",
	},
	{
		name: "Christian Nendanga",
		title: "Dancer and Disciplinarian",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0026.jpg",
	},
	{
		name: "Isabel Chigamba",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260708-WA0064.jpg",
	},
	{
		name: "Promise Munjoma",
		title: "Dancer, Vocalist and Percussionist",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0031.jpg",
	},
	{
		name: "Nason 'Jahwa' Chiweshe",
		title: "Dancer and Media Manager",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0029.jpg",
	},
	{
		name: "Takunda Bvuweyi",
		title: "Drummer and Percussionist",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0025.jpg",
	},
	{
		name: "Oswald 'Kiddo' Nhambu",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0028.jpg",
	},
	{
		name: "Emily Madhowo",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0032.jpg",
	},
	{
		name: "Leonard Kadiramwando",
		title: "Trainer and Chief Drummist",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0023.jpg",
	},
	{
		name: "Clarence Noku Mhikuro",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260709-WA0030.jpg",
	},
	{
		name: "Daina Nhau",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/IMG-20260717-WA0006.jpg",
	},
	{
		name: "Panashe Mumanyi",
		title: "Dancer",
		text: "Bio",
		image: "https://ik.imagekit.io/avlsp9ggi/Dapuraunanzva/profile_pictures/20250629_06365.jpg",
	},
];

const contacts = [
	{ icon: home, title: "Physical Address", content: " Sakubva Beit Hall, Mutare, ZW" },
	{ icon: telephone, title: "Phone Number", content: "+263 77 300 0980" },
	{ icon: email, title: "Email Address", content: "dapuraunanzvagroup@gmail.com" },
];

export { criterion, minimem, mems, contacts };
