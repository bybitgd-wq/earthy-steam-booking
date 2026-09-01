export type Service = {
  id: string;
  name: string;
  duration: string;
  price: number;
  blurb: string;
  herbs: string[];
  tag?: string;
};

export const services: Service[] = [
  {
    id: "classic-steam",
    name: "Classic Yoni Steam",
    duration: "30 min",
    price: 45,
    blurb:
      "Our signature gentle steam with a balanced herbal blend — ideal for first visits and monthly upkeep.",
    herbs: ["Mugwort", "Calendula", "Rose petals"],
    tag: "Most booked",
  },
  {
    id: "cycle-reset",
    name: "Cycle Reset Steam",
    duration: "45 min",
    price: 65,
    blurb:
      "Timed to your follicular or luteal phase to ease cramping and support a more even flow.",
    herbs: ["Red raspberry leaf", "Yarrow", "Ginger root"],
  },
  {
    id: "postpartum",
    name: "Postpartum Restore",
    duration: "45 min",
    price: 75,
    blurb:
      "A warm, low-heat session for the fourth trimester, cleared for six weeks postpartum and beyond.",
    herbs: ["Plantain leaf", "Lavender", "Comfrey"],
  },
  {
    id: "fertility",
    name: "Fertility Nurture Steam",
    duration: "60 min",
    price: 85,
    blurb:
      "A slower ritual with womb massage and castor oil packing to encourage circulation and calm.",
    herbs: ["Damiana", "Motherwort", "Nettle"],
  },
  {
    id: "detox-clay",
    name: "Steam + Clay Womb Wrap",
    duration: "75 min",
    price: 110,
    blurb:
      "Steam followed by a mineral clay abdominal wrap and warm compress for deep grounding.",
    herbs: ["Mugwort", "Bentonite clay", "Eucalyptus"],
    tag: "Studio favourite",
  },
  {
    id: "moon-ritual",
    name: "New Moon Ritual Session",
    duration: "90 min",
    price: 140,
    blurb:
      "Extended steam with sound bowls, journaling prompts, herbal tea service and a take-home blend.",
    herbs: ["Rose", "Mugwort", "Blue lotus"],
  },
  {
    id: "consultation",
    name: "Herbal Consultation",
    duration: "25 min",
    price: 30,
    blurb:
      "A one-to-one intake to choose your blend, cadence and contraindications before steaming.",
    herbs: ["Personalised blend mapping"],
  },
  {
    id: "duo",
    name: "Duo Steam Room",
    duration: "60 min",
    price: 150,
    blurb: "Two private thrones side by side — for sisters, friends or mother and daughter.",
    herbs: ["Choice of two blends"],
  },
];

export type Membership = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  summary: string;
  perks: string[];
  featured?: boolean;
};

export const memberships: Membership[] = [
  {
    id: "seedling",
    name: "Seedling",
    price: 79,
    cadence: "per month",
    summary: "One steam a month to keep a steady rhythm.",
    perks: [
      "1 Classic Steam monthly",
      "10% off retail store",
      "Free herbal tea service",
      "Rollover credit for 60 days",
    ],
  },
  {
    id: "bloom",
    name: "Bloom",
    price: 149,
    cadence: "per month",
    summary: "Two sessions plus cycle-timed guidance from our herbalist.",
    perks: [
      "2 steams monthly (any 45-min service)",
      "Quarterly herbal consultation",
      "15% off retail store",
      "Priority weekend booking",
      "Bring a friend once per quarter",
    ],
    featured: true,
  },
  {
    id: "grove",
    name: "Grove",
    price: 269,
    cadence: "per month",
    summary: "Unlimited steaming for those in an active healing season.",
    perks: [
      "Unlimited standard steams",
      "1 Ritual Session monthly",
      "20% off retail store",
      "Custom blend milled for you",
      "Complimentary Duo Room twice yearly",
    ],
  },
];

export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Blends" | "Tools" | "Body" | "Kits";
  blurb: string;
};

export const products: Product[] = [
  {
    id: "blend-classic",
    name: "Classic Steam Blend — 8 steams",
    price: 32,
    category: "Blends",
    blurb: "Mugwort, calendula and rose, milled weekly in small batches.",
  },
  {
    id: "blend-cycle",
    name: "Cycle Support Blend",
    price: 36,
    category: "Blends",
    blurb: "Raspberry leaf and yarrow for heavy, cramp-forward cycles.",
  },
  {
    id: "blend-postpartum",
    name: "Postpartum Soothe Blend",
    price: 38,
    category: "Blends",
    blurb: "Low-heat friendly plantain, lavender and comfrey.",
  },
  {
    id: "throne",
    name: "Foldable Steam Seat",
    price: 89,
    category: "Tools",
    blurb: "Birchwood seat with a ceramic-safe cradle, folds flat for storage.",
  },
  {
    id: "pot",
    name: "Stoneware Steam Bowl",
    price: 42,
    category: "Tools",
    blurb: "Heat-retaining glazed bowl, sized for the foldable seat.",
  },
  {
    id: "oil",
    name: "Womb Massage Oil",
    price: 28,
    category: "Body",
    blurb: "Castor, sesame and ginger oil for pre-steam abdominal massage.",
  },
  {
    id: "salve",
    name: "Calendula Repair Salve",
    price: 24,
    category: "Body",
    blurb: "Unscented salve for post-steam or postpartum tenderness.",
  },
  {
    id: "kit-starter",
    name: "At-Home Starter Kit",
    price: 145,
    category: "Kits",
    blurb: "Seat, stoneware bowl, two blends and a printed ritual guide.",
  },
  {
    id: "kit-gift",
    name: "Gift Ritual Box",
    price: 78,
    category: "Kits",
    blurb: "One blend, massage oil, salve and a linen wrap in a keepsake box.",
  },
];
