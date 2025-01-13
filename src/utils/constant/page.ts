import {
	ButtonListType,
	Card,
	Navbar,
	PriceListType,
	SpecialOfferType,
	Studio,
	TCText,
} from "@interfaces/page";
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

export const studioButtonData: ButtonListType[] = [
	{
		label: "ALEXANDRIA",
		to: 3662,
	},
	{
		label: "CYCLORAMA",
		to: 3662 + 660,
	},
	{
		label: "HELENA",
		to: 3662 + 660 * 2,
	},
	{
		label: "TEMATIK JAPAN",
		to: 3662 + 660 * 3,
	},
	{
		label: "MAKEUP ROOM",
		to: 3662 + 660 * 4,
	},
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

export const pricingButtonData: ButtonListType[] = [
	{
		label: "SPECIAL OFFER",
		to: 578,
	},
	{
		label: "WEDDING",
		to: 1316,
	},
	{
		label: "PREWEDDING",
	},
	{
		label: "MATERNITY",
	},
	{
		label: "GRADUATION",
	},

	{
		label: "SOLO & COUPLE",
	},
	{
		label: "GROUP",
	},
	{
		label: "PERSONAL",
	},
];

export const specialOfferData: SpecialOfferType = {
	package: "Tematik Japan Photoshoot",
	price: "IDR 60K / Person",
	pax: "Max. 6 PAX",
	desc: "Experience the charm and elegance of Japan with our best offer: a thematic Japanese photoshoot! Immerse yourself in a beautifully curated setting featuring authentic Japanese-inspired decor.",
	optional: ["20 Minutes", "Print 4r / Gantungan kunci (2 Foto)"],
	images: [
		require("@assets/images/special1.png"),
		require("@assets/images/special2.png"),
		require("@assets/images/special3.png"),
		require("@assets/images/special4.png"),
	],
	addOn: [
		"Extra Time IDR. 20K / 10 Minutes",
		"30% DP required for booking",
		"All payments are Non-Refundable.",
	],
};

export const specialOfferMobData: SpecialOfferType = {
	package: "Tematik Japan Photoshoot",
	price: "IDR 60K / Person",
	pax: "Max. 6 PAX",
	desc: "Experience the charm and elegance of Japan with our best offer: a thematic Japanese photoshoot! Immerse yourself in a beautifully curated setting featuring authentic Japanese-inspired decor.",
	optional: ["20 Minutes", "Print 4r / Gantungan kunci (2 Foto)"],
	images: [
		require("@assets/images/special1Mob.png"),
		require("@assets/images/special2Mob.png"),
		require("@assets/images/special3Mob.png"),
		require("@assets/images/special4Mob.png"),
	],
	addOn: [
		"Extra Time IDR. 20K / 10 Minutes",
		"30% DP required for booking",
		"All payments are Non-Refundable.",
	],
};

export const priceListData: PriceListType[] = [
	{
		header: {
			name: "WEDDING",
			desc: "Our wedding photography packages are crafted to capture every magical moment of your special day, from the smallest details to the grandest celebrations.",
			image: require("@assets/images/wedding.png"),
		},
		packages: [
			{
				name: "Executive",
				price: "IDR 3.000K",
				details: [
					"1 Photographer + Assistant",
					"2X Print 18 RS Frame Linen",
					"Album Magnetic + Cetak 4R-100 Pcs",
				],
			},
			{
				name: "Deluxe",
				price: "IDR 4.700K",
				details: [
					"2 Photographer + Assistant",
					"2X Print 20 RS Frame Linen",
					"1X Print 10 RS + Frame Minimalist",
					"Album Magnetic + Cetak 4R-100 Pcs",
				],
			},
			{
				name: "Suite",
				price: "IDR 6.500K",
				details: [
					"2 Photographer + Assistant",
					"2X Print 20 RS Frame Linen",
					"2X Print 10 RS + Frame Minimalist",
					"Album Magnetic + Print 4R-100 Lembar Photo",
				],
			},
		],
		tc: [
			"Enhance your package with a cinematic video for an additional IDR 2.000K*",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
		notes: "*For Executive and Deluxe package",
	},
	{
		header: {
			name: "PREWEDDING",
			desc: "Whether you envision a romantic outdoor session or a creative themed shoot, capture the love and excitement leading up to your big day.",
			image: require("@assets/images/prewedding.png"),
		},
		packages: [
			{
				name: "Silver",
				price: "IDR 1.000K",
				details: ["2x Print 18RS + Frame Linen", "4R Print 5 lembar"],
			},
			{
				name: "Gold",
				price: "IDR 2.500K",
				details: [
					"STUDIO + OUTDOOR",
					"2x Print 20RS + Frame Linen",
					"4R Print 5 LEMBAR",
				],
			},
		],
		tc: [
			"Enhance your package with a cinematic video for an additional IDR 1.000K",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
	},
	{
		header: {
			name: "MATERNITY",
			desc: "Crafted to celebrate this beautiful chapter of your life with elegance and love. Whether you prefer the comfort of our cozy studio or the charm of an outdoor setting.",
			image: require("@assets/images/maternity.png"),
		},
		packages: [
			{
				name: "Studio",
				price: "IDR 480K",
				details: [
					"1X PRINT 10 RS + FRAME LAMINATING",
					"5X PRINT 4R LAMINATING",
				],
			},
			{
				name: "Outdoor",
				price: "IDR 750K",
				details: [
					"1X PRINT 10 RS + FRAME LAMINATING",
					"5X PRINT 4R LAMINATING",
				],
			},
			{
				name: "Studio + Outdoor",
				price: "IDR 2.500K",
				details: [
					"1X PRINT 10 RS + FRAME LAMINATING",
					"5X PRINT 4R LAMINATING",
				],
			},
		],
		tc: [
			"Enhance your package with a cinematic video for an additional IDR 1.500K",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
		superNotes: "Max Duration 1 Hour and 2 Custom Edit",
	},
	{
		header: {
			name: "GRADUATION",
			desc: "We’ll tailor the session to reflect your personality and accomplishments. Professional photoshoot, expert editing, and high-quality images that capture your pride and joy.",
			image: require("@assets/images/graduation.png"),
		},
		packages: [
			{
				name: "Silver",
				price: "IDR 250K",
				details: [
					"2-5 Person",
					"15 Minutes",
					"5 Edit Photos",
					"1 Print 10rs With Frame",
				],
			},
			{
				name: "Gold",
				price: "IDR 450K",
				details: [
					"2-5 Person",
					"15 Minutes",
					"5 Edit Photos",
					"1 Print 18rs With Frame",
				],
			},
			{
				name: "Platinum",
				price: "IDR 600K",
				details: [
					"6-10 Person",
					"15 Minutes",
					"5 Edit Photos",
					"1 Print 10rs With Frame",
					"1 Print 18rs With Frame",
				],
			},
		],
		tc: [
			"Extra person IDR 20 K / Person",
			"Extra time IDR. 20K / 10 Minutes",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
		superNotes: "Required to use the graduation attribute",
	},
	{
		header: {
			name: "SOLO / COUPLE",
			desc: "Our solo or couple photography package is perfect for capturing your individuality or celebrating your bond with someone special.",
			image: require("@assets/images/couple.png"),
		},
		packages: [
			{
				name: "Jomblo",
				price: "IDR 150K",
				details: ["15 minutes", "5 Edit photos", "5 Print 4R"],
			},
			{
				name: "Bareng Doi",
				price: "IDR 100K / PERSON",
				details: ["30 minutes", "5 Edit photos", "Print 4R/Person"],
			},
		],
		tc: [
			"Extra time IDR. 20K / 10 Minutes",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
	},
	{
		header: {
			name: "GROUP",
			desc: "Whether you’re celebrating a special occasion or simply making memories, our group photo packages deliver stunning visuals you’ll cherish forever.",
			image: require("@assets/images/group.png"),
		},
		packages: [
			{
				name: "Paket Rame",
				price: "IDR 65K / PERSON",
				details: [
					"3-5 Person",
					"15 minutes",
					"5 Edit photos",
					"1 Print 4R/Person",
				],
			},
			{
				name: "Paket Rame Banget",
				price: "IDR 50K / PERSON",
				details: [
					"> 5 Person",
					"30 minutes",
					"5 Edit photos",
					"1 Print 4R/Person",
				],
			},
		],
		tc: [
			"Extra person IDR. 20K / Person",
			"Extra time IDR. 20K / 10 Minutes",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
		superNotes: "Max. 10 PAX",
	},
	{
		header: {
			name: "PERSONAL PORTRAIT",
			desc: "Showcase your individuality and capture your best self in stunning detail. With expert guidance we will ensure you feel comfortable and confident throughout the session.",
			image: require("@assets/images/personal.png"),
		},
		packages: [
			{
				name: "Formal",
				price: "IDR 250K",
				details: ["30 Minutes", "5 Edit photos", "Max 2 Costume"],
			},
			{
				name: "Unformal",
				price: "IDR 150K",
				details: ["30 minutes", "5 Edit photos", "Max 2 Costume"],
			},
		],
		tc: [
			"Extra time IDR. 20K / 10 Minutes",
			"30% DP required for booking",
			"All payments are Non-Refundable.",
		],
	},
];

export const pricingMobileData: string[] = [
	"Wedding",
	"Prewedding",
	"Maternity",
	"Graduation",
	"Solo & Couple",
	"Group",
	"Personal",
];
