export const colors = {
	COLOR_PRIMARY: "#f96163",
	COLOR_LIGHT: "#fff",
	COLOR_DARK: "#000",
	COLOR_DARK_ALT: "#262626",

};

//  Data for categories filter

export const categories = [
	{
		id: "01",
		category: "All Product",
	},
	{
		id: "02",
		category: "Ayurveda Product",
	},
	{
		id: "03",
		category: "Vitamins and Nutrition",
	},
	{
		id: "04",
		category: "Homeopathy",
	},
	{
		id: "05",
		category: "Personal Care",
	},
	
	{
		id: "06",
		category: "Diabetes",
	},
	
];

export const recipeList = [
	{
		id: "01",
		name: "Patanjali Honey",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.2",
		ingredients: ["flower Extract", "Fructose", "Glucose", ],
		price: "₹ 199",
		quantity: "500 gm",
		expiry: "01-01-2026",
		color: "#006A4E",
		description:
			" Patanjali Honey is a unique Sundarban honey and tulsi blend. It has a distinct taste, colour, flavour and thickness and is 100% pure honey. Each batch goes through a sugar addition test in an International laboratory to ensure purity. The honey collected from Sundarban forests was reported to contain more anti-oxidants and boost immunity naturally.",
		steps: [
			"It aids weight loss and helps in weight management",
			"Honey helps in maintaining healthy lipid levels in the body",
			"It serves as a healthy substitute for sugar",
			"It works as a natural remedy for cough, cold and seasonal allergies",
			"It helps to boost immunity and strengthens the immune system",
		],
	},
	{
		id: "02",
		name: "Himalaya Neem Face Wash",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.5",
		ingredients: ["Neem Extract", "Turmeric Extract", "Vitamin E", "Saponins"],
		price: "₹ 120",
		quantity: "150 ml",
		expiry: "01-01-2025",
		color: "#A0DB8E",
		description:
			"Himalaya's Neem Face Wash is a soap-free herbal formulation that gently removes impurities and prevents pimples. Enriched with Neem and Turmeric, it helps control acne and pimples, leaving your skin clean, refreshed, and problem-free. Neem is known for its antibacterial properties and helps control acne-causing bacteria. Turmeric has antiseptic properties that soothe your skin and prevent redness and inflammation.",
		steps: [
			"Gently massage over wet face and neck with fingertips, lather and rinse.",
			"Use twice daily, morning and evening.",
			"Suitable for all skin types.",
			"Follow with Himalaya Herbals face moisturizing lotion for best results.",
			"Avoid contact with eyes. If contact occurs, rinse eyes thoroughly with water.",
		],
	},
	{
		id: "03",
		name: "Boiron Arnica Montana 30C Pellets",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.7",
		ingredients: ["Arnica Montana"],
		price: "₹ 299",
		quantity: "80 pellets",
		expiry: "01-01-2025",
		color: "#FFD700",
		description:
			"Boiron Arnica Montana 30C Pellets are homeopathic medicine used to treat muscle pain, stiffness, swelling, and bruising from injuries or overexertion. These pellets dissolve quickly under the tongue and are easy to take without water. Arnica Montana is a natural remedy known for its anti-inflammatory properties and is commonly used by athletes and active individuals.",
		steps: [
			"Take 5 pellets, 3 times a day.",
			"Let pellets dissolve under the tongue.",
			"Reduce frequency with improvement.",
			"Keep out of reach of children.",
			"If pregnant or breastfeeding, ask a healthcare professional before use.",
		],
	},
	{
		id: "04",
		name: "Amway Nutrilite Daily Multivitamin",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.9",
		ingredients: ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin B", "Iron", "Calcium", "Zinc"],
		price: "₹ 599",
		quantity: "120 tablets",
		expiry: "01-01-2025",
		color: "#FF5733",
		description:
			"Amway Nutrilite Daily Multivitamin is a comprehensive blend of essential vitamins and minerals to support overall health and well-being. These tablets provide a balanced combination of nutrients that may be lacking in your diet. It helps fill nutritional gaps, supports energy metabolism, and promotes immune health.",
		steps: [
			"Take 1 tablet daily with meals.",
			"Do not exceed recommended dosage.",
			"Store in a cool, dry place.",
			"Keep out of reach of children.",
			"Consult healthcare professional before use if pregnant, nursing, or taking medication.",
		],
	},
	{
		id: "05",
		name: "Dabur Amla Hair Oil",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.6",
		ingredients: ["Amla Extract", "Mineral Oil", "Vegetable Oil"],
		price: "₹ 150",
		quantity: "200 ml",
		expiry: "01-01-2026",
		color: "#964B00",
		description:
			"Dabur Amla Hair Oil is enriched with the natural goodness of Amla (Indian Gooseberry), known for its hair nourishing properties. It helps strengthen hair from root to tip, prevents hair fall, and promotes hair growth. Regular use of this oil keeps your hair healthy, shiny, and manageable.",
		steps: [
			"Apply oil on the scalp and massage gently.",
			"Leave it overnight for best results.",
			"Wash off with a mild shampoo.",
			"Use at least twice a week.",
			"For external use only.",
		],
	},
	{
		id: "06",
		name: "MuscleBlaze Whey Gold Protein",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.8",
		ingredients: ["Whey Protein Concentrate", "Whey Protein Isolate", "Digestive Enzymes"],
		price: "₹ 2,199",
		quantity: "2 kg",
		expiry: "01-01-2025",
		color: "#FFD700",
		description:
			"MuscleBlaze Whey Gold Protein is a premium blend of Whey Protein Concentrate and Whey Protein Isolate, sourced from the finest international manufacturers. It provides 25g of protein per serving to support muscle growth and recovery. Enriched with digestive enzymes, it ensures better protein absorption and minimizes bloating.",
		steps: [
			"Mix 1 scoop (30g) with 180-200ml of water or milk.",
			"Shake well until dissolved.",
			"Consume immediately after workout or as directed by a healthcare professional.",
			"For best results, consume 1-2 servings daily.",
			"Not recommended for individuals with lactose intolerance.",
		],
	},
	{
		id: "07",
		name: "Patanjali Divya Triphala Churna",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.4",
		ingredients: ["Amla", "Harad", "Baheda"],
		price: "₹ 75",
		quantity: "100 gm",
		expiry: "01-01-2026",
		color: "#8A2BE2",
		description:
			"Patanjali Divya Triphala Churna is a traditional Ayurvedic formula made from three potent fruits: Amla, Harad, and Baheda. It supports digestive health, detoxifies the body, and promotes overall well-being. Triphala is rich in antioxidants and helps regulate bowel movements, relieve constipation, and improve nutrient absorption.",
		steps: [
			"Take 1-2 teaspoons (3-6g) with lukewarm water or as directed by a physician.",
			"Consume before bedtime for optimal results.",
			"Not recommended for children without medical advice.",
			"Store in a cool, dry place.",
			"Keep away from moisture and direct sunlight.",
		],
	},
	{
		id: "08",
		name: "Himalaya Liv.52 DS Tablets",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.6",
		ingredients: ["Caper Bush", "Wild Chicory", "Black Nightshade", "Arjuna", "Yarrow"],
		price: "₹ 180",
		quantity: "60 tablets",
		expiry: "01-01-2025",
		color: "#FF6347",
		description:
			"Himalaya Liv.52 DS Tablets are a double-strength hepatospecific formulation that helps maintain healthy liver functions. It promotes hepatocellular regeneration and improves liver detoxification. Liv.52 DS protects the liver from toxins, alcohol-induced liver damage, and supports liver health in individuals with liver disorders.",
		steps: [
			"Take 1-2 tablets twice daily with meals.",
			"For optimal results, use regularly.",
			"Consult a healthcare professional if pregnant, nursing, or taking medication.",
			"Keep out of reach of children.",
			"Store in a cool, dry place away from direct sunlight.",
		],
	},
	{
		id: "09",
		name: "Nivea Soft Moisturizing Cream",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.7",
		ingredients: ["Jojoba Oil", "Vitamin E", "Glycerin"],
		price: "₹ 279",
		quantity: "200 ml",
		expiry: "01-01-2026",
		color: "#87CEEB",
		description:
			"Nivea Soft Moisturizing Cream is a light, non-greasy formula enriched with Jojoba Oil and Vitamin E. It provides intense hydration and nourishment to the skin, leaving it soft, smooth, and supple. This versatile cream can be used on the face, hands, and body, and is suitable for all skin types.",
		steps: [
			"Apply liberally on clean, dry skin.",
			"Massage gently until fully absorbed.",
			"Use daily for best results.",
			"For external use only.",
			"Avoid contact with eyes.",
		],
	},
	{
		id: "10",
		name: "Baidyanath Aloe Vera Juice",
		image: require("../assets/images/honeydabur.png"),
		rating: "4.5",
		ingredients: ["Aloe Vera Juice", "Citric Acid"],
		price: "₹ 180",
		quantity: "1 liter",
		expiry: "01-01-2025",
		color: "#8FBC8F",
		description:
			"Baidyanath Aloe Vera Juice is extracted from fresh Aloe Vera leaves and processed under hygienic conditions to retain its natural properties. It is rich in vitamins, minerals, and antioxidants that support digestive health, detoxify the body, and boost immunity. Aloe Vera Juice also promotes healthy skin and hair.",
		steps: [
			"Take 30-60ml twice daily before meals.",
			"Mix with an equal amount of water or fruit juice for best taste.",
			"Shake well before use.",
			"Refrigerate after opening.",
			"Consume within 30 days after opening.",
		],
	},
	
];
