export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  currency: string;
  imageIndex: number;
  imageAlt: string;
  featured?: boolean;
}

export interface CollectionItemDot {
  id: string;
  productId: string;
  label: string;
  x: number;
  y: number;
}

export interface Collection {
  id: string;
  slug: string;
  number: number;
  title: string;
  subtitle: string;
  description: string;
  imageIndex: number;
  imageAlt: string;
  productIds: string[];
  itemDots: CollectionItemDot[];
}

// South Asian heritage & contemporary fusion outfit fixtures.
// imageIndex references the nine supplied campaign images (0–8).
export const products: Product[] = [
  {
    id: "product-001",
    slug: "royal-zardozi-sherwani",
    name: "Royal Zardozi Sherwani",
    category: "Sherwani",
    description: "Imperial ivory raw silk sherwani adorned with handcrafted metallic Zari & dabka embroidery. Tailored mandarin collar with concealed front placket.",
    price: 340,
    currency: "USD",
    imageIndex: 0,
    imageAlt: "Royal ivory raw silk sherwani with intricate gold zardozi embroidery",
    featured: true,
  },
  {
    id: "product-002",
    slug: "banarasi-silk-saree",
    name: "Banarasi Katan Silk Saree",
    category: "Saree",
    description: "Pure handwoven Katan silk drape featuring intricate antique gold zari floral jaal with a regal pallu border. Mastercrafted in Varanasi.",
    price: 290,
    currency: "USD",
    imageIndex: 1,
    imageAlt: "Crimson Banarasi Katan silk saree with antique gold zari border",
    featured: true,
  },
  {
    id: "product-003",
    slug: "chanderi-silk-kurta",
    name: "Heritage Chanderi Kurta Set",
    category: "Kurta",
    description: "Hand-spun Chanderi cotton-silk blend kurta with tonal resham threadwork, paired with tailored ivory churidar trousers.",
    price: 145,
    currency: "USD",
    imageIndex: 2,
    imageAlt: "Ivory and sage handwoven Chanderi silk kurta set with churidar",
    featured: true,
  },
  {
    id: "product-004",
    slug: "tussar-handloom-panjabi",
    name: "Handloom Tussar Silk Panjabi",
    category: "Panjabi",
    description: "Wild textured Tussar wild silk panjabi with minimalist kantha stitch embroidery along the placket and cuffs. Effortlessly breathable.",
    price: 120,
    currency: "USD",
    imageIndex: 3,
    imageAlt: "Textured beige handloom Tussar silk panjabi with subtle kantha collar",
  },
  {
    id: "product-005",
    slug: "velvet-bandhgala-jodhpuri",
    name: "Midnight Velvet Bandhgala",
    category: "Bandhgala",
    description: "Structured royal Jodhpuri silhouette crafted in plush midnight blue velvet with bespoke handcrafted brass crest buttons.",
    price: 275,
    currency: "USD",
    imageIndex: 4,
    imageAlt: "Tailored midnight velvet bandhgala jacket with hammered brass buttons",
    featured: true,
  },
  {
    id: "product-006",
    slug: "chikankari-organza-anarkali",
    name: "Lucknowi Chikankari Anarkali",
    category: "Anarkali",
    description: "Ethereal hand-embroidered Lucknowi shadow-work chikankari gown in pure silk organza with delicate mukaish embellishments.",
    price: 210,
    currency: "USD",
    imageIndex: 5,
    imageAlt: "Pastel mint Lucknowi chikankari organza anarkali ensemble",
  },
  {
    id: "product-007",
    slug: "raw-silk-nehru-vest",
    name: "Raw Silk Bundi Nehru Vest",
    category: "Nehru Vest",
    description: "Sleek tailored Nehru waistcoat in textured Matka raw silk. Classic stand collar with welted breast pocket and horn buttons.",
    price: 135,
    currency: "USD",
    imageIndex: 6,
    imageAlt: "Structured ochre raw silk Nehru vest over an off-white kurta",
  },
  {
    id: "product-008",
    slug: "kashmiri-pashmina-shawl",
    name: "Kashmiri Jamawar Pashmina",
    category: "Pashmina",
    description: "Hand-spun high-altitude Himalayan cashmere shawl woven with heritage paisley jaal tapestry patterns from Srinagar.",
    price: 185,
    currency: "USD",
    imageIndex: 7,
    imageAlt: "Authentic hand-spun Kashmiri Jamawar pashmina shawl",
  },
  {
    id: "product-009",
    slug: "embroidered-silk-lehenga",
    name: "Gota Patti Raw Silk Lehenga",
    category: "Lehenga",
    description: "Contemporary flared raw silk lehenga ensemble with handcrafted gold gota patti borders, cropped choli, and scalloped dupatta.",
    price: 320,
    currency: "USD",
    imageIndex: 8,
    imageAlt: "Emerald raw silk lehenga with handcrafted gold gota patti embroidery",
  },
];

export const collections: Collection[] = [
  {
    id: "morning-edit",
    slug: "morning-edit",
    number: 1,
    title: "The Morning Edit",
    subtitle: "Soft layers for unhurried starts",
    description: "Easy, considered pieces for the quiet hours before the day begins. Relaxed silhouettes and tactile fabrics for a morning routine worth taking your time over.",
    imageIndex: 0,
    imageAlt: "Collection 01: Layered morning neutrals in wool and linen",
    productIds: ["product-001", "product-003", "product-004"],
    itemDots: [
      { id: "dot-1-1", productId: "product-001", label: "Zardozi Sherwani", x: 48, y: 36 },
      { id: "dot-1-2", productId: "product-003", label: "Chanderi Kurta", x: 44, y: 52 },
      { id: "dot-1-3", productId: "product-004", label: "Tussar Panjabi", x: 50, y: 60 },
    ],
  },
  {
    id: "office-hours",
    slug: "office-hours",
    number: 2,
    title: "Office Hours",
    subtitle: "Structure without stiffness",
    description: "Composed, polished, and genuinely comfortable. Pieces that work across meetings and commutes without sacrificing an inch of ease.",
    imageIndex: 1,
    imageAlt: "Collection 02: Tailored linen and blazer for a composed workday",
    productIds: ["product-005", "product-002", "product-008"],
    itemDots: [
      { id: "dot-2-1", productId: "product-005", label: "Velvet Bandhgala", x: 46, y: 38 },
      { id: "dot-2-2", productId: "product-002", label: "Katan Saree", x: 50, y: 68 },
      { id: "dot-2-3", productId: "product-008", label: "Kashmiri Pashmina", x: 42, y: 50 },
    ],
  },
  {
    id: "weekend-ease",
    slug: "weekend-ease",
    number: 3,
    title: "Weekend Ease",
    subtitle: "Familiar fabrics, forgiving fits",
    description: "The pieces that make Saturday feel like a decision you got right. Relaxed fits in natural fabrics that move with you.",
    imageIndex: 2,
    imageAlt: "Collection 03: Relaxed cotton and denim for an easy weekend",
    productIds: ["product-004", "product-007", "product-003"],
    itemDots: [
      { id: "dot-3-1", productId: "product-004", label: "Oxford Shirt", x: 48, y: 42 },
      { id: "dot-3-2", productId: "product-007", label: "Straight Jeans", x: 52, y: 70 },
      { id: "dot-3-3", productId: "product-003", label: "Ribbed Crewneck", x: 46, y: 54 },
    ],
  },
  {
    id: "layer-game",
    slug: "layer-game",
    number: 4,
    title: "The Layer Game",
    subtitle: "Autumn depth, strategic weight",
    description: "When the temperature drops and the light shifts, the right layers carry you from morning coffee to evening plans without a wardrobe change.",
    imageIndex: 3,
    imageAlt: "Collection 04: Autumn layering in merino and canvas",
    productIds: ["product-009", "product-008", "product-002"],
    itemDots: [
      { id: "dot-4-1", productId: "product-009", label: "Canvas Jacket", x: 48, y: 38 },
      { id: "dot-4-2", productId: "product-008", label: "Merino Turtleneck", x: 44, y: 52 },
      { id: "dot-4-3", productId: "product-002", label: "Wide-Leg Trousers", x: 54, y: 72 },
    ],
  },
  {
    id: "coastal-weekend",
    slug: "coastal-weekend",
    number: 5,
    title: "Coastal Weekend",
    subtitle: "Light weaves and salt-air textures",
    description: "Breathable naturals and relaxed silhouettes for the kind of weekend that happens slowly, by the water or somewhere close to it.",
    imageIndex: 4,
    imageAlt: "Collection 05: Linen and cotton for a coastal escape",
    productIds: ["product-002", "product-004", "product-003"],
    itemDots: [
      { id: "dot-5-1", productId: "product-002", label: "Wide-Leg Trousers", x: 50, y: 66 },
      { id: "dot-5-2", productId: "product-004", label: "Oxford Shirt", x: 46, y: 44 },
      { id: "dot-5-3", productId: "product-003", label: "Ribbed Crewneck", x: 54, y: 52 },
    ],
  },
  {
    id: "golden-hour",
    slug: "golden-hour",
    number: 6,
    title: "Golden Hour",
    subtitle: "Evening ease with quiet polish",
    description: "The slipping-between-day-and-evening hour. Soft drape, burnished tone, the kind of dressing that feels like a natural transition.",
    imageIndex: 5,
    imageAlt: "Collection 06: Soft satin slip and knitwear in evening light",
    productIds: ["product-006", "product-008", "product-005"],
    itemDots: [
      { id: "dot-6-1", productId: "product-006", label: "Slip Midi Dress", x: 50, y: 54 },
      { id: "dot-6-2", productId: "product-008", label: "Merino Turtleneck", x: 44, y: 42 },
      { id: "dot-6-3", productId: "product-005", label: "Tailored Blazer", x: 56, y: 36 },
    ],
  },
  {
    id: "city-dusk",
    slug: "city-dusk",
    number: 7,
    title: "City Dusk",
    subtitle: "Sharp lines after sundown",
    description: "Evening in the city. Dark tones, clean silhouettes, the right weight of denim. Composed enough for dinner, relaxed enough for whatever comes next.",
    imageIndex: 6,
    imageAlt: "Collection 07: Denim and tailoring for an evening in the city",
    productIds: ["product-007", "product-005", "product-008"],
    itemDots: [
      { id: "dot-7-1", productId: "product-007", label: "Straight Jeans", x: 52, y: 68 },
      { id: "dot-7-2", productId: "product-005", label: "Tailored Blazer", x: 46, y: 38 },
      { id: "dot-7-3", productId: "product-008", label: "Merino Turtleneck", x: 44, y: 52 },
    ],
  },
  {
    id: "studio-day",
    slug: "studio-day",
    number: 8,
    title: "Studio Day",
    subtitle: "Utility with an editorial edge",
    description: "For the days when comfort and intention matter equally. Hardworking canvas and dependable knitwear built for sustained focus.",
    imageIndex: 7,
    imageAlt: "Collection 08: Canvas workwear and merino for a focused studio day",
    productIds: ["product-009", "product-003", "product-007"],
    itemDots: [
      { id: "dot-8-1", productId: "product-009", label: "Canvas Jacket", x: 48, y: 36 },
      { id: "dot-8-2", productId: "product-003", label: "Ribbed Crewneck", x: 44, y: 52 },
      { id: "dot-8-3", productId: "product-007", label: "Straight Jeans", x: 52, y: 70 },
    ],
  },
  {
    id: "clean-lines",
    slug: "clean-lines",
    number: 9,
    title: "Clean Lines",
    subtitle: "Monochrome discipline, textile warmth",
    description: "Nothing extraneous. Warm neutrals and precise cuts that speak for themselves — the wardrobe distilled to its essential confidence.",
    imageIndex: 8,
    imageAlt: "Collection 09: Monochrome neutrals in linen and merino",
    productIds: ["product-001", "product-002", "product-008"],
    itemDots: [
      { id: "dot-9-1", productId: "product-001", label: "Wool Overcoat", x: 48, y: 36 },
      { id: "dot-9-2", productId: "product-002", label: "Wide-Leg Trousers", x: 52, y: 70 },
      { id: "dot-9-3", productId: "product-008", label: "Merino Turtleneck", x: 44, y: 52 },
    ],
  },
];
