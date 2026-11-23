export type ProductColor = {
  name: string;
  hex: string;
  is_default: boolean;
};

export type ProductImages = {
  hero_flatlay: string | null;
  hanging_view: string | null;
  fabric_macro_detail: string | null;
  back_view: string | null;
  folded_view: string | null;
  styling_packshot?: string | null;
};

export interface Product {
  id: string;
  name: string;
  subtitle_or_tagline: string | null;
  category: string;
  collection: string;
  gender: string;
  price_bdt: number;
  original_price_bdt: number | null;
  badge: string | null;
  description: string;
  fabric: string;
  craft_technique: string;
  colors: ProductColor[];
  sizes: string[];
  stock_status: string;
  images: ProductImages;
  has_3d_view: boolean;
  has_virtual_try_on: boolean;
  avatar_preview_id: string | null;
  fit_recommendation: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    "id": "OOT-PAN-001",
    "name": "Embroidered Ivory Panjabi",
    "subtitle_or_tagline": "Atelier Piece 01 / Handloom Craft",
    "category": "Panjabi",
    "collection": "The New Bangladeshi Edit",
    "gender": "Men",
    "price_bdt": 2490,
    "original_price_bdt": 2990,
    "badge": "NEW",
    "description": "Hand-finished cotton-silk Panjabi tailored with delicate tonal threadwork along the mandarin collar and placket. Cut for an effortless drape in breathable heritage muslin blend.",
    "fabric": "80% Organic Handloom Cotton, 20% Mulberry Silk",
    "craft_technique": "Dhakai Tonal Hand-Embroidery",
    "colors": [
      {
        "name": "Ivory",
        "hex": "#FDFCFA",
        "is_default": true
      },
      {
        "name": "Charcoal",
        "hex": "#242424",
        "is_default": false
      },
      {
        "name": "Deep Olive",
        "hex": "#3A4A3F",
        "is_default": false
      },
      {
        "name": "Muted Ochre",
        "hex": "#B89758",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-ivory-front.jpg",
      "hanging_view": "/assets/products/panjabi-ivory-hang.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-ivory-embroidery-zoom.jpg",
      "back_view": "/assets/products/panjabi-ivory-back.jpg",
      "folded_view": "/assets/products/panjabi-ivory-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_ivory_01",
    "fit_recommendation": "Tailored Fit",
    "featured": true
  },
  {
    "id": "OOT-SAR-002",
    "name": "Handloom Jamdani Saree",
    "subtitle_or_tagline": "Heritage Weave / 6 Yards Muslin",
    "category": "Saree",
    "collection": "The New Bangladeshi Edit",
    "gender": "Women",
    "price_bdt": 8900,
    "original_price_bdt": 10500,
    "badge": "LIMITED",
    "description": "Authentic Dhakai Jamdani woven on pit looms using fine count translucent muslin threads. Geometrical flora motifs painstakingly laid with supplementary weft technique.",
    "fabric": "100% Fine Count Khadi Muslin",
    "craft_technique": "Traditional Shitalakhya Jamdani Weave",
    "colors": [
      {
        "name": "Pale Gold Muslin",
        "hex": "#EDE5D8",
        "is_default": true
      },
      {
        "name": "Raw Sand",
        "hex": "#DCD3C1",
        "is_default": false
      }
    ],
    "sizes": [
      "Free Size (6 Yards)"
    ],
    "stock_status": "Low Stock — 3 Pieces Remaining",
    "images": {
      "hero_flatlay": "/assets/products/saree-jamdani-hero.jpg",
      "hanging_view": "/assets/products/saree-jamdani-drape.jpg",
      "fabric_macro_detail": "/assets/products/saree-jamdani-pallu-zoom.jpg",
      "back_view": null,
      "folded_view": "/assets/products/saree-jamdani-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Classic Drape",
    "featured": true
  },
  {
    "id": "OOT-BLZ-003",
    "name": "Tailored Olive Linen Blazer",
    "subtitle_or_tagline": "Modern Structured Outerwear",
    "category": "Blazer",
    "collection": "The New Bangladeshi Edit",
    "gender": "Men",
    "price_bdt": 6500,
    "original_price_bdt": null,
    "badge": "NEW",
    "description": "Unstructured single-breasted blazer woven from Belgian flax linen and lined with breathable Bengali cupro. Features horn buttons and natural soft shoulders.",
    "fabric": "100% Breathable European Linen",
    "craft_technique": "Sartorial Half-Canvas Tailoring",
    "colors": [
      {
        "name": "Deep Forest Olive",
        "hex": "#3A4A3F",
        "is_default": true
      },
      {
        "name": "Warm Sand",
        "hex": "#CFC5B2",
        "is_default": false
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/blazer-olive-front.jpg",
      "hanging_view": "/assets/products/blazer-olive-hanger.jpg",
      "fabric_macro_detail": "/assets/products/blazer-olive-lapel.jpg",
      "back_view": "/assets/products/blazer-olive-back.jpg",
      "folded_view": "/assets/products/blazer-olive-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_blazer_olive_01",
    "fit_recommendation": "Modern Slim",
    "featured": true
  },
  {
    "id": "OOT-TRP-004",
    "name": "Raw Silk Three-Piece Ensemble",
    "subtitle_or_tagline": "Atelier Festive Capsule",
    "category": "Three-Piece",
    "collection": "The New Bangladeshi Edit",
    "gender": "Women",
    "price_bdt": 4800,
    "original_price_bdt": 5500,
    "badge": "NEW",
    "description": "Comprising an A-line kurti with handcrafted neck piping, matching tapered cigarette trousers, and a lightweight organza dupatta edged with raw fringe.",
    "fabric": "Pure Rajshahi Raw Silk & Silk Organza",
    "craft_technique": "Ari & Zardozi Threadwork",
    "colors": [
      {
        "name": "Warm Sand Taupe",
        "hex": "#CBBBA7",
        "is_default": true
      },
      {
        "name": "Soft Charcoal",
        "hex": "#302E2B",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/threepiece-rawsilk-flatlay.jpg",
      "hanging_view": "/assets/products/threepiece-rawsilk-hanger.jpg",
      "fabric_macro_detail": "/assets/products/threepiece-neckline.jpg",
      "back_view": "/assets/products/threepiece-back.jpg",
      "folded_view": "/assets/products/threepiece-folded.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_threepiece_sand_01",
    "fit_recommendation": "Fluid Regular",
    "featured": true
  },
  {
    "id": "OOT-PAN-005",
    "name": "Zardozi Embroidered Silk Kurta",
    "subtitle_or_tagline": "The Eid Edit / Midnight Chocolate",
    "category": "Panjabi",
    "collection": "The Eid Edit",
    "gender": "Men",
    "price_bdt": 7200,
    "original_price_bdt": 8500,
    "badge": "LIMITED",
    "description": "Opulent deep espresso silk kurta adorned with antique gold zardozi bullion embroidery on collar, chest placket, and sleeve cuffs. Designed for celebratory evening wear.",
    "fabric": "100% Rajshahi Tussar Silk",
    "craft_technique": "Old-Dhaka Antique Zardozi Work",
    "colors": [
      {
        "name": "Deep Chocolate Brown",
        "hex": "#2B1F1D",
        "is_default": true
      },
      {
        "name": "Obsidian Black",
        "hex": "#191919",
        "is_default": false
      }
    ],
    "sizes": [
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "Limited Release — 5 Units Left",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-zardozi-flat.jpg",
      "hanging_view": "/assets/products/panjabi-zardozi-stand.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-zardozi-macro.jpg",
      "back_view": "/assets/products/panjabi-zardozi-back.jpg",
      "folded_view": "/assets/products/panjabi-zardozi-stack.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_zardozi_01",
    "fit_recommendation": "Atelier Tailored",
    "featured": true
  },
  {
    "id": "OOT-SAR-006",
    "name": "Antique Gold Zardozi Tissue Saree",
    "subtitle_or_tagline": "Bridal & Festive Heritage Edit",
    "category": "Saree",
    "collection": "The Eid Edit",
    "gender": "Women",
    "price_bdt": 16500,
    "original_price_bdt": 18900,
    "badge": "EXCLUSIVE",
    "description": "Woven with golden metallic threads over an ivory gossamer silk warp. Embellished with fine seed pearls and matte gold sequins along scalloped hand-cut borders.",
    "fabric": "Pure Tissue Silk & Metallic Zari",
    "craft_technique": "Hand-laid Mukaish & Zardozi Borders",
    "colors": [
      {
        "name": "Champagne Gold",
        "hex": "#D4C29D",
        "is_default": true
      }
    ],
    "sizes": [
      "Free Size (6.5 Yards with Blouse Piece)"
    ],
    "stock_status": "Made-to-Order (7 Days Dispatch)",
    "images": {
      "hero_flatlay": "/assets/products/saree-gold-tissue.jpg",
      "hanging_view": "/assets/products/saree-tissue-drape.jpg",
      "fabric_macro_detail": "/assets/products/saree-tissue-zari-zoom.jpg",
      "back_view": null,
      "folded_view": "/assets/products/saree-tissue-box.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Fluid Regal Drape",
    "featured": true
  },
  {
    "id": "OOT-SHT-007",
    "name": "Mandarin Cotton Everyday Shirt",
    "subtitle_or_tagline": "Atelier Signatures / Monochromatic Essential",
    "category": "Shirts",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 1950,
    "original_price_bdt": null,
    "badge": null,
    "description": "Clean, unembellished poplin shirt with architectural stand collar, concealed mother-of-pearl button placket, and curved minimalist hemline.",
    "fabric": "100% Combed Long-Staple Cotton",
    "craft_technique": "Single-Needle Fine Stitching",
    "colors": [
      {
        "name": "Optic White",
        "hex": "#FFFFFF",
        "is_default": true
      },
      {
        "name": "Warm Sand",
        "hex": "#E3D8C8",
        "is_default": false
      },
      {
        "name": "Washed Olive",
        "hex": "#4C5B4F",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/shirt-mandarin-white-front.jpg",
      "hanging_view": "/assets/products/shirt-mandarin-white-hang.jpg",
      "fabric_macro_detail": "/assets/products/shirt-mandarin-collar.jpg",
      "back_view": "/assets/products/shirt-mandarin-white-back.jpg",
      "folded_view": "/assets/products/shirt-mandarin-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_shirt_mandarin_white",
    "fit_recommendation": "Regular Relaxed",
    "featured": true
  },
  {
    "id": "OOT-PNT-008",
    "name": "Pleated Raw-Sand Linen Trousers",
    "subtitle_or_tagline": "Atelier Signatures / Architectural Fit",
    "category": "Pants",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 2800,
    "original_price_bdt": 3200,
    "badge": null,
    "description": "Double forward pleats, extended tab waistband with side adjusters, and a gentle tapered leg. Breathable raw sand linen ideal for subtropical Dhaka climate.",
    "fabric": "100% Pure Raw Flax Linen",
    "craft_technique": "Bespoke Sartorial Waistband Construction",
    "colors": [
      {
        "name": "Raw Sand",
        "hex": "#D8CDBA",
        "is_default": true
      },
      {
        "name": "Off-White Alabaster",
        "hex": "#F4F0E8",
        "is_default": false
      },
      {
        "name": "Dark Umber",
        "hex": "#302622",
        "is_default": false
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/trouser-linen-sand-flat.jpg",
      "hanging_view": "/assets/products/trouser-linen-sand-hang.jpg",
      "fabric_macro_detail": "/assets/products/trouser-linen-pleat-zoom.jpg",
      "back_view": "/assets/products/trouser-linen-sand-back.jpg",
      "folded_view": "/assets/products/trouser-linen-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_trouser_sand_01",
    "fit_recommendation": "Tapered Relaxed",
    "featured": true
  },
  {
    "id": "OOT-SAR-009",
    "name": "Katan Silk Handloom Saree",
    "subtitle_or_tagline": "Atelier Signatures / Heritage Gold",
    "category": "Saree",
    "collection": "Atelier Signatures",
    "gender": "Women",
    "price_bdt": 11200,
    "original_price_bdt": 13500,
    "badge": "LIMITED",
    "description": "Heavyweight emerald green katan silk body juxtaposed with a solid burnished antique gold zari border. Soft drape with lustrous natural sheen.",
    "fabric": "100% Pure Mulberry Silk with Metallic Zari",
    "craft_technique": "Mirpur Handloom Katan Weave",
    "colors": [
      {
        "name": "Emerald & Antique Gold",
        "hex": "#27402F",
        "is_default": true
      },
      {
        "name": "Imperial Maroon",
        "hex": "#4A171E",
        "is_default": false
      }
    ],
    "sizes": [
      "Free Size (6 Yards)"
    ],
    "stock_status": "In Stock — 4 Units Remaining",
    "images": {
      "hero_flatlay": "/assets/products/saree-katan-emerald-hero.jpg",
      "hanging_view": "/assets/products/saree-katan-drape.jpg",
      "fabric_macro_detail": "/assets/products/saree-katan-border.jpg",
      "back_view": null,
      "folded_view": "/assets/products/saree-katan-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Classic Drape",
    "featured": false
  },
  {
    "id": "OOT-SUT-010",
    "name": "Structured Wool Two-Piece Suit",
    "subtitle_or_tagline": "Atelier Signatures / Modern Tailoring",
    "category": "Suit",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 14500,
    "original_price_bdt": null,
    "badge": "EXCLUSIVE",
    "description": "Architectural midnight charcoal two-piece suit crafted from super-120s lightweight tropical wool. Features notched lapels and flat-front trousers.",
    "fabric": "100% Tropical Merino Wool (Super 120s)",
    "craft_technique": "Full Floating Canvas Construction",
    "colors": [
      {
        "name": "Midnight Charcoal",
        "hex": "#1F2326",
        "is_default": true
      },
      {
        "name": "Deep Espresso",
        "hex": "#2C221E",
        "is_default": false
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/suit-charcoal-front.jpg",
      "hanging_view": "/assets/products/suit-charcoal-hang.jpg",
      "fabric_macro_detail": "/assets/products/suit-charcoal-weave.jpg",
      "back_view": "/assets/products/suit-charcoal-back.jpg",
      "folded_view": "/assets/products/suit-charcoal-garmentbag.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_suit_charcoal_01",
    "fit_recommendation": "Structured Modern Fit",
    "featured": false
  },
  {
    "id": "OOT-PAN-011",
    "name": "Dhakai Handloom Embroidered Panjabi",
    "subtitle_or_tagline": "New Atelier Collection / Quick View Feature",
    "category": "Panjabi",
    "collection": "The New Bangladeshi Edit",
    "gender": "Men",
    "price_bdt": 6800,
    "original_price_bdt": 7500,
    "badge": "NEW ATELIER",
    "description": "Hand-spun Bangladeshi cotton enriched with intricate geometric threadwork along the placket. Cut with clean high slits for fluid movement and comfort.",
    "fabric": "100% Hand-Spun Deshi Cotton Muslin",
    "craft_technique": "Dhakai Fine Needle Handwork",
    "colors": [
      {
        "name": "Ivory Alabaster",
        "hex": "#F7F5EE",
        "is_default": true
      },
      {
        "name": "Deep Forest Olive",
        "hex": "#304033",
        "is_default": false
      },
      {
        "name": "Matte Charcoal",
        "hex": "#212121",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-dhakai-handloom-hero.jpg",
      "hanging_view": "/assets/products/panjabi-dhakai-hang.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-dhakai-zoom.jpg",
      "back_view": "/assets/products/panjabi-dhakai-back.jpg",
      "folded_view": "/assets/products/panjabi-dhakai-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_dhakai_01",
    "fit_recommendation": "Comfort Tailored",
    "featured": false
  },
  {
    "id": "OOT-SHT-012",
    "name": "Atelier Linen Overshirt",
    "subtitle_or_tagline": "Account Order #OOT-84920 Delivered Item",
    "category": "Shirts",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 4850,
    "original_price_bdt": null,
    "badge": null,
    "description": "Heavyweight washed linen overshirt with dual utility chest flap pockets, horn buttons, and straight boxy hemline designed for layering over t-shirts or kurtas.",
    "fabric": "100% French Heavyweight Washed Linen",
    "craft_technique": "Garment Enriched Enzyme Wash",
    "colors": [
      {
        "name": "Deep Olive",
        "hex": "#3A4A3F",
        "is_default": true
      },
      {
        "name": "Raw Sand",
        "hex": "#DACFBD",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/overshirt-olive-front.jpg",
      "hanging_view": "/assets/products/overshirt-olive-hanger.jpg",
      "fabric_macro_detail": "/assets/products/overshirt-olive-pocket.jpg",
      "back_view": "/assets/products/overshirt-olive-back.jpg",
      "folded_view": "/assets/products/overshirt-olive-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_overshirt_olive_01",
    "fit_recommendation": "Relaxed Boxy",
    "featured": false
  },
  {
    "id": "OOT-LHN-013",
    "name": "Botanical Jamdani Weave Lehenga",
    "subtitle_or_tagline": "Couture Bridal Capsule",
    "category": "Lehenga",
    "collection": "The Eid Edit",
    "gender": "Women",
    "price_bdt": 28500,
    "original_price_bdt": 32000,
    "badge": "LIMITED",
    "description": "Sixteen-panel flaring lehenga skirt hand-woven with heritage Jamdani vines using gold zari and silk threads over natural ecru base. Paired with a fitted silk choli.",
    "fabric": "Pure Khadi Muslin & Tussar Silk",
    "craft_technique": "Handloom Kalidar Jamdani Weave",
    "colors": [
      {
        "name": "Ecru & Pale Gold",
        "hex": "#EDE5D8",
        "is_default": true
      }
    ],
    "sizes": [
      "Custom Atelier Sizing (XS - XL)"
    ],
    "stock_status": "Bespoke Order (14 Days Crafting)",
    "images": {
      "hero_flatlay": "/assets/products/lehenga-jamdani-front.jpg",
      "hanging_view": "/assets/products/lehenga-jamdani-mannequin.jpg",
      "fabric_macro_detail": "/assets/products/lehenga-jamdani-motifs.jpg",
      "back_view": "/assets/products/lehenga-jamdani-back.jpg",
      "folded_view": "/assets/products/lehenga-jamdani-case.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Custom Waist & Flare",
    "featured": false
  },
  {
    "id": "OOT-PAN-014",
    "name": "Obsidian Black Minimal Panjabi",
    "subtitle_or_tagline": "Virtual Try-On 3D Featured Preset",
    "category": "Panjabi",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 3200,
    "original_price_bdt": null,
    "badge": null,
    "description": "Matte black combed cotton-modal Panjabi with concealed placket and tonal matte gunmetal snaps. Architectural side slit finishing for streamlined silhouette.",
    "fabric": "60% Combed Cotton, 40% Lenzing Modal",
    "craft_technique": "Concealed Placket Precision Tailoring",
    "colors": [
      {
        "name": "Obsidian Black",
        "hex": "#121212",
        "is_default": true
      },
      {
        "name": "Ivory Alabaster",
        "hex": "#F8F5F0",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-black-front.jpg",
      "hanging_view": "/assets/products/panjabi-black-hang.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-black-collar.jpg",
      "back_view": "/assets/products/panjabi-black-back.jpg",
      "folded_view": "/assets/products/panjabi-black-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_black_01",
    "fit_recommendation": "Tailored Slim",
    "featured": false
  },
  {
    "id": "OOT-KID-015",
    "name": "Junior Ivory Jamdani Panjabi Set",
    "subtitle_or_tagline": "The Little Edit / Festive Collection",
    "category": "Kids",
    "collection": "The Little Edit",
    "gender": "Kids",
    "price_bdt": 2200,
    "original_price_bdt": null,
    "badge": "NEW",
    "description": "Hypoallergenic organic cotton Panjabi tailored for young boys with breathable jamdani yoke accent. Includes matching cotton pajama trousers with elasticized waistband.",
    "fabric": "100% GOTS Certified Organic Cotton",
    "craft_technique": "Gentle Handloom Weave & Soft Seaming",
    "colors": [
      {
        "name": "Natural Ivory",
        "hex": "#FAF7F2",
        "is_default": true
      },
      {
        "name": "Soft Sage",
        "hex": "#B6C3B9",
        "is_default": false
      }
    ],
    "sizes": [
      "2-3Y",
      "4-5Y",
      "6-7Y",
      "8-9Y",
      "10-12Y"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/kids-panjabi-ivory-flat.jpg",
      "hanging_view": "/assets/products/kids-panjabi-ivory-hang.jpg",
      "fabric_macro_detail": "/assets/products/kids-panjabi-collar.jpg",
      "back_view": "/assets/products/kids-panjabi-ivory-back.jpg",
      "folded_view": "/assets/products/kids-panjabi-ivory-folded.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Comfort Kidswear Fit",
    "featured": false
  },
  {
    "id": "OOT-KID-016",
    "name": "Girls Fine Chanderi Kurti Set",
    "subtitle_or_tagline": "The Little Edit / Heritage Festive",
    "category": "Kids",
    "collection": "The Little Edit",
    "gender": "Kids",
    "price_bdt": 2650,
    "original_price_bdt": null,
    "badge": null,
    "description": "Two-piece festive kurti set in pale blush Chanderi with golden booti motifs and scalloped hemline. Paired with soft dhoti-style cotton salwar.",
    "fabric": "Chanderi Cotton-Silk with Mulmul Lining",
    "craft_technique": "Hand-blocked Foil & Thread Finish",
    "colors": [
      {
        "name": "Pale Blush",
        "hex": "#EBDCD6",
        "is_default": true
      },
      {
        "name": "Butter Ivory",
        "hex": "#F4EEDC",
        "is_default": false
      }
    ],
    "sizes": [
      "3-4Y",
      "5-6Y",
      "7-8Y",
      "9-10Y"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/kids-kurti-blush-flat.jpg",
      "hanging_view": "/assets/products/kids-kurti-blush-hang.jpg",
      "fabric_macro_detail": "/assets/products/kids-kurti-booti.jpg",
      "back_view": "/assets/products/kids-kurti-blush-back.jpg",
      "folded_view": "/assets/products/kids-kurti-blush-folded.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Relaxed A-Line",
    "featured": false
  },
  {
    "id": "OOT-KUR-017",
    "name": "Asymmetric Mulberry Silk Kurti",
    "subtitle_or_tagline": "Womenswear / Minimal Day-to-Evening",
    "category": "Kurti",
    "collection": "The New Bangladeshi Edit",
    "gender": "Women",
    "price_bdt": 3600,
    "original_price_bdt": 4200,
    "badge": null,
    "description": "Contemporary high-low tunic in raw tussar silk featuring a mock cowl neck and structured side slit with horn button accents.",
    "fabric": "100% Indigenous Mulberry Silk",
    "craft_technique": "Precision Bias-Cut Silhouette",
    "colors": [
      {
        "name": "Warm Putty",
        "hex": "#D1C7BA",
        "is_default": true
      },
      {
        "name": "Espresso",
        "hex": "#2C221E",
        "is_default": false
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/kurti-silk-putty-flat.jpg",
      "hanging_view": "/assets/products/kurti-silk-putty-hang.jpg",
      "fabric_macro_detail": "/assets/products/kurti-cowl-zoom.jpg",
      "back_view": "/assets/products/kurti-silk-putty-back.jpg",
      "folded_view": "/assets/products/kurti-silk-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_kurti_putty_01",
    "fit_recommendation": "Fluid Architectural",
    "featured": false
  },
  {
    "id": "OOT-SLW-018",
    "name": "Classic Tangail Cotton Salwar Kameez",
    "subtitle_or_tagline": "Heritage Daytime Edit",
    "category": "Salwar Kameez",
    "collection": "Atelier Signatures",
    "gender": "Women",
    "price_bdt": 3950,
    "original_price_bdt": null,
    "badge": null,
    "description": "Authentic Tangail handloom cotton three-piece suite woven with understated fish-scale motifs along border. Paired with pure cotton churidar trousers.",
    "fabric": "100% Hand-loomed Tangail Cotton",
    "craft_technique": "Tangail Handloom Border Jacquard",
    "colors": [
      {
        "name": "Natural Ecru",
        "hex": "#F4EFE6",
        "is_default": true
      },
      {
        "name": "Indigo Charcoal",
        "hex": "#2B323D",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/salwar-tangail-flat.jpg",
      "hanging_view": "/assets/products/salwar-tangail-hang.jpg",
      "fabric_macro_detail": "/assets/products/salwar-tangail-border.jpg",
      "back_view": "/assets/products/salwar-tangail-back.jpg",
      "folded_view": "/assets/products/salwar-tangail-folded.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Standard Tailored",
    "featured": false
  },
  {
    "id": "OOT-PAN-019",
    "name": "Festive Fine-Khadi Panjabi",
    "subtitle_or_tagline": "Hand-spun Comilla Khadi Capsule",
    "category": "Panjabi",
    "collection": "The Eid Edit",
    "gender": "Men",
    "price_bdt": 3890,
    "original_price_bdt": 4500,
    "badge": "LIMITED",
    "description": "Textured hand-spun Comilla Khadi Panjabi featuring wooden stud buttons and subtle contrast inner yoke binding.",
    "fabric": "100% Artisan-Spun Comilla Khadi Cotton",
    "craft_technique": "Indigenous Hand-Spinning & Weaving",
    "colors": [
      {
        "name": "Warm Oatmeal",
        "hex": "#DDD4C5",
        "is_default": true
      },
      {
        "name": "Muted Moss",
        "hex": "#6C7A6D",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-khadi-oat-flat.jpg",
      "hanging_view": "/assets/products/panjabi-khadi-oat-hang.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-khadi-texture.jpg",
      "back_view": "/assets/products/panjabi-khadi-oat-back.jpg",
      "folded_view": "/assets/products/panjabi-khadi-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_khadi_01",
    "fit_recommendation": "Classic Straight",
    "featured": false
  },
  {
    "id": "OOT-PNT-020",
    "name": "Tailored Charcoal Wool Trousers",
    "subtitle_or_tagline": "Menswear Essentials",
    "category": "Pants",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 3400,
    "original_price_bdt": null,
    "badge": null,
    "description": "Mid-rise trousers with crisp front center crease, horn button fly, and tailored blind hem cuffs.",
    "fabric": "90% Tropical Wool, 10% Silk",
    "craft_technique": "Bespoke Split-Curtain Waistband",
    "colors": [
      {
        "name": "Charcoal Grey",
        "hex": "#2E3033",
        "is_default": true
      },
      {
        "name": "Deep Black",
        "hex": "#1A1A1A",
        "is_default": false
      }
    ],
    "sizes": [
      "30",
      "32",
      "34",
      "36",
      "38"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/trouser-charcoal-flat.jpg",
      "hanging_view": "/assets/products/trouser-charcoal-hang.jpg",
      "fabric_macro_detail": "/assets/products/trouser-charcoal-zoom.jpg",
      "back_view": "/assets/products/trouser-charcoal-back.jpg",
      "folded_view": "/assets/products/trouser-charcoal-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_trouser_charcoal_01",
    "fit_recommendation": "Slim Straight",
    "featured": false
  },
  {
    "id": "OOT-SAR-021",
    "name": "Monochrome Muslin Jamdani Saree",
    "subtitle_or_tagline": "Modern Heritage Collector Edition",
    "category": "Saree",
    "collection": "The New Bangladeshi Edit",
    "gender": "Women",
    "price_bdt": 14200,
    "original_price_bdt": 16000,
    "badge": "LIMITED",
    "description": "Ultra-lightweight black muslin ground decorated with geometric diamond motifs in pure white cotton thread. Minimalist luxury statement.",
    "fabric": "100% Superfine Handloom Muslin",
    "craft_technique": "Supplementary Weft Needle Weave",
    "colors": [
      {
        "name": "Obsidian & Chalk",
        "hex": "#1E1E1E",
        "is_default": true
      }
    ],
    "sizes": [
      "Free Size (6 Yards)"
    ],
    "stock_status": "2 Units Remaining",
    "images": {
      "hero_flatlay": "/assets/products/saree-jamdani-black-hero.jpg",
      "hanging_view": "/assets/products/saree-jamdani-black-drape.jpg",
      "fabric_macro_detail": "/assets/products/saree-jamdani-black-zoom.jpg",
      "back_view": null,
      "folded_view": "/assets/products/saree-jamdani-black-folded.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Architectural Drape",
    "featured": false
  },
  {
    "id": "OOT-SHT-022",
    "name": "Pleated Bib Tuxedo Shirt",
    "subtitle_or_tagline": "Evening & Formal Collection",
    "category": "Shirts",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 2950,
    "original_price_bdt": null,
    "badge": null,
    "description": "Crisp 140s two-ply cotton shirt featuring micro-pin-tuck front bib, French cuffs, and wingtip collar.",
    "fabric": "100% Giza Egyptian Cotton",
    "craft_technique": "Precision Micro-Pin-Tuck Pleating",
    "colors": [
      {
        "name": "Starch White",
        "hex": "#FFFFFF",
        "is_default": true
      }
    ],
    "sizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/shirt-tuxedo-front.jpg",
      "hanging_view": "/assets/products/shirt-tuxedo-hang.jpg",
      "fabric_macro_detail": "/assets/products/shirt-tuxedo-bib.jpg",
      "back_view": "/assets/products/shirt-tuxedo-back.jpg",
      "folded_view": "/assets/products/shirt-tuxedo-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_shirt_tuxedo_white",
    "fit_recommendation": "Sartorial Fitted",
    "featured": false
  },
  {
    "id": "OOT-BLZ-023",
    "name": "Sand Raw Silk Bandhgala Jacket",
    "subtitle_or_tagline": "Traditional Eastern Formalwear",
    "category": "Blazer",
    "collection": "The Eid Edit",
    "gender": "Men",
    "price_bdt": 8800,
    "original_price_bdt": 9900,
    "badge": "EXCLUSIVE",
    "description": "High stand-collar Bandhgala jacket constructed from textured Rajshahi Matka silk with hand-turned brass buttons and chest welt pocket.",
    "fabric": "100% Pure Rajshahi Matka Silk",
    "craft_technique": "Hand-stitched Structured Tailoring",
    "colors": [
      {
        "name": "Warm Sand",
        "hex": "#D1C6B4",
        "is_default": true
      },
      {
        "name": "Midnight Charcoal",
        "hex": "#232628",
        "is_default": false
      }
    ],
    "sizes": [
      "38R",
      "40R",
      "42R",
      "44R"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/bandhgala-sand-front.jpg",
      "hanging_view": "/assets/products/bandhgala-sand-hang.jpg",
      "fabric_macro_detail": "/assets/products/bandhgala-collar-zoom.jpg",
      "back_view": "/assets/products/bandhgala-sand-back.jpg",
      "folded_view": "/assets/products/bandhgala-sand-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_bandhgala_sand_01",
    "fit_recommendation": "Structured Royal",
    "featured": false
  },
  {
    "id": "OOT-TRP-024",
    "name": "Chanderi Gold Leaf Three-Piece",
    "subtitle_or_tagline": "Womenswear Festive Collection",
    "category": "Three-Piece",
    "collection": "The Eid Edit",
    "gender": "Women",
    "price_bdt": 6200,
    "original_price_bdt": 7200,
    "badge": "NEW",
    "description": "Subtle metallic shimmer Chanderi straight kurta, paired with wide palazzo pants and a sheer Kota Doria dupatta with subtle sequin edging.",
    "fabric": "Chanderi Silk-Cotton Blend & Kota Doria",
    "craft_technique": "Hand-done Aari Sequin Embroidery",
    "colors": [
      {
        "name": "Muted Pale Gold",
        "hex": "#DFD3BA",
        "is_default": true
      },
      {
        "name": "Soft Sage Mist",
        "hex": "#C4CEC5",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/threepiece-chanderi-flat.jpg",
      "hanging_view": "/assets/products/threepiece-chanderi-hang.jpg",
      "fabric_macro_detail": "/assets/products/threepiece-chanderi-border.jpg",
      "back_view": "/assets/products/threepiece-chanderi-back.jpg",
      "folded_view": "/assets/products/threepiece-chanderi-folded.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_threepiece_gold_01",
    "fit_recommendation": "Relaxed Straight",
    "featured": false
  },
  {
    "id": "OOT-PAN-025",
    "name": "Self-Textured Tussar Panjabi",
    "subtitle_or_tagline": "Atelier Signatures",
    "category": "Panjabi",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 4400,
    "original_price_bdt": null,
    "badge": null,
    "description": "Textured Tussar silk Panjabi featuring woven micro-rib stripes, mandarin collar with loop buttons, and deep side pocket engineering.",
    "fabric": "Pure Tussar Silk with Cotton Slub",
    "craft_technique": "Jacquard Self-Texture Rib Weave",
    "colors": [
      {
        "name": "Alabaster Cream",
        "hex": "#F6F2E8",
        "is_default": true
      },
      {
        "name": "Charcoal Black",
        "hex": "#1C1D1E",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-tussar-cream-flat.jpg",
      "hanging_view": "/assets/products/panjabi-tussar-cream-hang.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-tussar-rib.jpg",
      "back_view": "/assets/products/panjabi-tussar-cream-back.jpg",
      "folded_view": "/assets/products/panjabi-tussar-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_tussar_01",
    "fit_recommendation": "Tailored Regular",
    "featured": false
  },
  {
    "id": "OOT-SAR-026",
    "name": "Matka Silk Minimalist Saree",
    "subtitle_or_tagline": "Atelier Contemporary Weaves",
    "category": "Saree",
    "collection": "Atelier Signatures",
    "gender": "Women",
    "price_bdt": 7900,
    "original_price_bdt": null,
    "badge": null,
    "description": "Hand-spun Matka raw silk saree in natural biscuit tone with a fine selvedge finished in midnight charcoal thread. Drapes with crisp, sculptural grace.",
    "fabric": "100% Hand-spun Mulberry Matka Silk",
    "craft_technique": "Artisanal Pit-Loom Plain Weave",
    "colors": [
      {
        "name": "Natural Biscuit",
        "hex": "#E0D7C6",
        "is_default": true
      }
    ],
    "sizes": [
      "Free Size (6 Yards)"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/saree-matka-biscuit-hero.jpg",
      "hanging_view": "/assets/products/saree-matka-biscuit-drape.jpg",
      "fabric_macro_detail": "/assets/products/saree-matka-selvedge.jpg",
      "back_view": null,
      "folded_view": "/assets/products/saree-matka-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "Sculptural Crisp",
    "featured": false
  },
  {
    "id": "OOT-PNT-027",
    "name": "Drawstring Relaxed Silk-Linen Pants",
    "subtitle_or_tagline": "Modern Lounge & Festive Trousers",
    "category": "Pants",
    "collection": "The New Bangladeshi Edit",
    "gender": "Men",
    "price_bdt": 2600,
    "original_price_bdt": null,
    "badge": null,
    "description": "Elasticated back waistband with tonal woven drawstring, slanted welt pockets, and relaxed tapered ankle with subtle vented hem.",
    "fabric": "65% Fine Linen, 35% Mulberry Raw Silk",
    "craft_technique": "Garment-softened Hand Wash",
    "colors": [
      {
        "name": "Ivory Alabaster",
        "hex": "#F5F2EB",
        "is_default": true
      },
      {
        "name": "Deep Forest Olive",
        "hex": "#3A4A3F",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/pants-drawstring-ivory-flat.jpg",
      "hanging_view": "/assets/products/pants-drawstring-ivory-hang.jpg",
      "fabric_macro_detail": "/assets/products/pants-drawstring-waistband.jpg",
      "back_view": "/assets/products/pants-drawstring-ivory-back.jpg",
      "folded_view": "/assets/products/pants-drawstring-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_pants_drawstring_01",
    "fit_recommendation": "Relaxed Tapered",
    "featured": false
  },
  {
    "id": "OOT-SHT-028",
    "name": "Band-Collar Indigo Khadi Shirt",
    "subtitle_or_tagline": "Heritage Plant-Dye Collection",
    "category": "Shirts",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 2250,
    "original_price_bdt": null,
    "badge": null,
    "description": "Natural plant-dyed indigo khadi cotton shirt with tonal bone buttons, curved hem, and double-stitched reinforced yoke.",
    "fabric": "100% Handloom Khadi Cotton",
    "craft_technique": "Natural Indigo Fermentation Dyeing",
    "colors": [
      {
        "name": "Deep Natural Indigo",
        "hex": "#273248",
        "is_default": true
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/shirt-indigo-khadi-flat.jpg",
      "hanging_view": "/assets/products/shirt-indigo-khadi-hang.jpg",
      "fabric_macro_detail": "/assets/products/shirt-indigo-slub.jpg",
      "back_view": "/assets/products/shirt-indigo-khadi-back.jpg",
      "folded_view": "/assets/products/shirt-indigo-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_shirt_indigo_01",
    "fit_recommendation": "Casual Tailored",
    "featured": false
  },
  {
    "id": "OOT-LHN-029",
    "name": "Tissue Organza Minimal Lehenga",
    "subtitle_or_tagline": "Modern Festive Collection",
    "category": "Lehenga",
    "collection": "The Eid Edit",
    "gender": "Women",
    "price_bdt": 22500,
    "original_price_bdt": 26000,
    "badge": "LIMITED",
    "description": "Voluminous sheer organza lehenga skirt featuring hand-appliqued tissue borders, tonal cord embroidery, and raw silk bustier top.",
    "fabric": "Silk Tissue Organza & Tussar Silk",
    "craft_technique": "Hand-cut Scalloped Applique & Dori Work",
    "colors": [
      {
        "name": "Muted Warm Sand",
        "hex": "#E6D8C3",
        "is_default": true
      }
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL"
    ],
    "stock_status": "Made-to-Order (10 Days)",
    "images": {
      "hero_flatlay": "/assets/products/lehenga-organza-sand-flat.jpg",
      "hanging_view": "/assets/products/lehenga-organza-sand-mannequin.jpg",
      "fabric_macro_detail": "/assets/products/lehenga-organza-dori.jpg",
      "back_view": "/assets/products/lehenga-organza-sand-back.jpg",
      "folded_view": "/assets/products/lehenga-organza-box.jpg"
    },
    "has_3d_view": false,
    "has_virtual_try_on": false,
    "avatar_preview_id": null,
    "fit_recommendation": "High-Waist Flared",
    "featured": false
  },
  {
    "id": "OOT-PAN-030",
    "name": "Monochrome Minimalist Linen Panjabi",
    "subtitle_or_tagline": "Atelier Signatures Capsule",
    "category": "Panjabi",
    "collection": "Atelier Signatures",
    "gender": "Men",
    "price_bdt": 3490,
    "original_price_bdt": null,
    "badge": "NEW",
    "description": "Understated European linen Panjabi cut with high side vents and hidden mother-of-pearl closures for minimal architectural presence.",
    "fabric": "100% Belgian Washed Linen",
    "craft_technique": "Precision French Seaming",
    "colors": [
      {
        "name": "Warm Sand",
        "hex": "#DCD3C1",
        "is_default": true
      },
      {
        "name": "Deep Olive",
        "hex": "#3A4A3F",
        "is_default": false
      },
      {
        "name": "Ivory Alabaster",
        "hex": "#FAF6EE",
        "is_default": false
      }
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "stock_status": "In Stock — Dhaka Atelier",
    "images": {
      "hero_flatlay": "/assets/products/panjabi-linen-sand-flat.jpg",
      "hanging_view": "/assets/products/panjabi-linen-sand-hang.jpg",
      "fabric_macro_detail": "/assets/products/panjabi-linen-texture.jpg",
      "back_view": "/assets/products/panjabi-linen-sand-back.jpg",
      "folded_view": "/assets/products/panjabi-linen-folded.jpg"
    },
    "has_3d_view": true,
    "has_virtual_try_on": true,
    "avatar_preview_id": "tryon_panjabi_linen_sand_01",
    "fit_recommendation": "Modern Straight",
    "featured": false
  }
];
