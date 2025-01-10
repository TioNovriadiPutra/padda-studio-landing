import { Card, Navbar, Studio, TCText } from "@interfaces/page";
import { ImageSourcePropType } from "react-native";

export const navbarData: Navbar[] = [
	{
		title: "Home",
		toPath: "Home",
	},
	{
		title: "Pricing",
		toPath: "Pricing",
	},
	{
		title: "T & C",
		toPath: "TC",
	},
];

export const cardData: Card[] = [
	{
		icon: require("@assets/images/photographer.png"),
		title: "Skilled Photographer",
		desc: "Our studio is home to skilled photographers who combine creativity and expertise to deliver exceptional results every time.",
	},
	{
		icon: require("@assets/images/stair.png"),
		title: "State-of-The-Art Equipment",
		desc: "Our advanced equipment guarantees precision, clarity, and stunning results for every photoshoot.",
	},
	{
		icon: require("@assets/images/house.png"),
		title: "Cozy Studio Space",
		desc: "Our studio offers a warm and cozy atmosphere, making every photoshoot a comfortable and enjoyable experience.",
	},
];

export const studioButtonData: string[] = [
	"ALEXANDRIA",
	"CYCLORAMA",
	"HELENA",
	"TEMATIK JAPAN",
	"MAKEUP ROOM",
];

export const studioData: Studio[] = [
	{
		name: "ALEXANDRIA",
		desc: `Discover a room atmosphere that combines modern simplicity and classic touches. The room's elegant design and minimalist decoration create the perfect setting for your various creative needs. This space is ready to accommodate your vision with a versatile backdrop and lighting designed for the best results.`,
		image: require("@assets/images/alexandria.png"),
		pax: 6,
		pricePerHour: 145,
		pricePer3Hous: 350,
	},
	{
		name: "CYCLORAMA",
		desc: `A cyclorama is a large, concave curtain or wall that is positioned at the back of the stage to create a background. It is often used with special lighting to create the illusion of open space, sky, or great distance. The word "cyclorama" comes from the Greek words kyklos, meaning circle, and orama, meaning view.`,
		image: require("@assets/images/cyclorama.png"),
		pax: 10,
		pricePerHour: 200,
		pricePer3Hous: 550,
	},
	{
		name: "HELENA",
		desc: `Java sparrow is a popular cage bird, and has been introduced in a large number of other countries. Both Padda species are threatened by trapping for the cage bird trade. Many taxonomists now place this genus in Lonchura with the mannikins and munias.`,
		image: require("@assets/images/helena.png"),
		pax: 6,
		pricePerHour: 145,
		pricePer3Hous: 350,
	},
	{
		name: "TEMATIK JAPAN",
		desc: `Java sparrow is a popular cage bird, and has been introduced in a large number of other countries. Both Padda species are threatened by trapping for the cage bird trade. Many taxonomists now place this genus in Lonchura with the mannikins and munias.`,
		image: require("@assets/images/tematikJapan.png"),
		pax: 6,
		pricePerHour: 150,
		pricePer3Hous: 350,
	},
	{
		name: "MAKEUP ROOM",
		desc: `An exclusive makeup room with a large round glass and lights at several points that make you comfortable in preparing yourself to have photographs with pleasure. This room is also equipped with air conditioner and a closed changing room so you can keep your privacy in preparing yourself.`,
		image: require("@assets/images/makeupRoom.png"),
		pax: 6,
		sharing: 50,
		private: 350,
	},
];

export const carouselData: ImageSourcePropType[] = [
	require("@assets/images/slide1.png"),
	require("@assets/images/slide2.png"),
	require("@assets/images/slide3.png"),
	require("@assets/images/slide4.png"),
	require("@assets/images/slide5.png"),
];

export const tcData: TCText[][] = [
	[
		{
			text: "Setiap space sudah memiliki layout dan list properti yang ditentukan.",
			type: "regular",
		},
		{
			text: "Jika menggunakan properti milik space selain yang dirental, wajib menginformasikan kepada staff studio",
			type: "bold",
		},
		{
			text: "dan tidak mengganggu sesi foto klien rental lainnya.",
			type: "regular",
		},
	],
	[
		{
			text: "Properti milik space lain tidak dapat di keep penggunaannya, namun dapat digunakan hanya apabila tidak sedang digunakan oleh klien lain pada sesi rental tersebut.",
			type: "bold",
		},
		{
			text: "Apabila dalam waktu tersebut masuk bookingan yang dimana properti tersebut adalah bagian dari space yang akan digunakan klien, maka properti wajib dikembalikan untuk digunakan oleh klien tersebut sesuai layout dan list properti yang telah ditentukan oleh studio.",
			type: "regular",
		},
	],
	[
		{
			text: "Apabila ingin",
			type: "regular",
		},
		{
			text: "keep properti dari space lain selain dari space yang dirental maka wajib melakukan booking",
			type: "bold",
		},
		{
			text: "untuk space yang propertinya digunakan.",
			type: "regular",
		},
	],
	[
		{
			text: "Setiap space disediakan 1 flash studio yang dapat digunakan selama sesi rental.",
			type: "regular",
		},
		{
			text: "Klien bisa menggunakan maksimal 2 lighting selama sesi rental (Apabila tidak digunakan oleh klien lainnya).",
			type: "bold",
		},
		{
			text: "[Equipment studio tidak boleh dipindahkan tanpa pemberitahuan dan persetujuan dari staf studio].",
			type: "regular",
		},
	],
	[
		{
			text: "Apabila klien ingin",
			type: "regular",
		},
		{
			text: "keep lebih dari 1 flash / lighting selama sesi rental maka akan dikenakan charge",
			type: "bold",
		},
		{
			text: "add-on equipment.",
			type: "regular",
		},
	],
	[
		{
			text: "Untuk",
			type: "regular",
		},
		{
			text: "penggunaan lighting Continuous dan Trigger wajib menginformasikan ke admin WhatsApp",
			type: "bold",
		},
		{
			text: "untuk keep saat sesi rental studio.",
			type: "regular",
		},
	],
	[
		{
			text: "Jika",
			type: "regular",
		},
		{
			text: "menggunakan lebih dari 2 lighting maka lighting / flash tambahan dikenakan charge",
			type: "bold",
		},
		{
			text: "add-on equipment.",
			type: "regular",
		},
	],
	[
		{
			text: "Harap memastikan",
			type: "regular",
		},
		{
			text: "jumlah orang yang akan datang ke dalam space sesuai dengan ketentuan space",
			type: "bold",
		},
		{
			text: "yang berlaku.",
			type: "regular",
		},
	],
	[
		{
			text: "Penyewa bertanggung jawab penuh atas semua orang yang dibawa ke dalam studio selama masa rental. (Termasuk menjaga mereka tidak menggunakan space lain atau menjaga kebersihan serta kelengkapan studio.)",
			type: "regular",
		},
	],
	[
		{
			text: "Penyewa bertanggung jawab penuh atas semua aktivitas yang dilakukan oleh pihak ketiga",
			type: "bold",
		},
		{
			text: "(vendor dekorasi, makeup, hairdo, dll.) selama masa rental studio. Penyewa wajib hadir dan memastikan segala kegiatan berjalan sesuai dengan peraturan studio. Studio tidak bertanggung jawab atas tindakan atau kelalaian yang dilakukan oleh vendor.",
			type: "regular",
		},
	],
	[
		{
			text: "Staf studio bertugas untuk memberikan dukungan teknis dan memastikan kelancaran operasional studio.",
			type: "regular",
		},
		{
			text: "Staf studio tidak memiliki kewajiban untuk membantu dalam pemindahan properti, pemasangan instalasi, atau tugas-tugas pribadi penyewa.",
			type: "bold",
		},
		{
			text: "Penyewa wajib membawa asisten pribadi jika membutuhkan bantuan tambahan selama sesi rental.",
			type: "regular",
		},
	],
	[
		{
			text: "Dilarang menyeret properti di lantai,",
			type: "bold",
		},
		{
			text: "harap diangkat untuk menghindari lantai dari goresan atau kerusakan.",
			type: "regular",
		},
	],
];
