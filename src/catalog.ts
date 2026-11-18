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
}

export interface Look {
  id: string;
  title: string;
  description: string;
  productIds: string[];
}

// Illustrative local fixtures only; these are not an official or live catalog.
// imageIndex references supplied campaign artwork (indices 0 through 8).
export const products: Product[] = [
  { id: "product-001", slug: "linen-shirt", name: "Linen Shirt", category: "Clothing", description: "A relaxed-fit linen shirt.", price: 68, currency: "USD", imageIndex: 0, imageAlt: "Campaign image 1" },
  { id: "product-002", slug: "canvas-tote", name: "Canvas Tote", category: "Accessories", description: "A roomy everyday canvas tote.", price: 32, currency: "USD", imageIndex: 1, imageAlt: "Campaign image 2" },
  { id: "product-003", slug: "ceramic-vase", name: "Ceramic Vase", category: "Home", description: "A handcrafted-look ceramic vase.", price: 54, currency: "USD", imageIndex: 2, imageAlt: "Campaign image 3" },
  { id: "product-004", slug: "cotton-scarf", name: "Cotton Scarf", category: "Accessories", description: "A soft woven cotton scarf.", price: 45, currency: "USD", imageIndex: 3, imageAlt: "Campaign image 4" },
  { id: "product-005", slug: "striped-tshirt", name: "Striped T-Shirt", category: "Clothing", description: "A classic striped cotton T-shirt.", price: 38, currency: "USD", imageIndex: 4, imageAlt: "Campaign image 5" },
  { id: "product-006", slug: "table-lamp", name: "Table Lamp", category: "Home", description: "A compact table lamp for warm light.", price: 110, currency: "USD", imageIndex: 5, imageAlt: "Campaign image 6" },
  { id: "product-007", slug: "leather-wallet", name: "Leather Wallet", category: "Accessories", description: "A slim everyday wallet.", price: 72, currency: "USD", imageIndex: 6, imageAlt: "Campaign image 7" },
  { id: "product-008", slug: "cotton-trousers", name: "Cotton Trousers", category: "Clothing", description: "Straight-leg cotton trousers.", price: 84, currency: "USD", imageIndex: 7, imageAlt: "Campaign image 8" },
  { id: "product-009", slug: "throw-blanket", name: "Throw Blanket", category: "Home", description: "A lightweight woven throw blanket.", price: 96, currency: "USD", imageIndex: 8, imageAlt: "Campaign image 9" },
];

export const looks: Look[] = [
  { id: "weekend-edit", title: "Weekend Edit", description: "An illustrative relaxed weekend selection.", productIds: ["product-001", "product-002", "product-005"] },
  { id: "calm-home", title: "Calm Home", description: "An illustrative collection for a considered home.", productIds: ["product-003", "product-006", "product-009"] },
];
