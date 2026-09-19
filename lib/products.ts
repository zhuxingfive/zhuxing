// Product catalogue — Yueyang Zhuxing Technology Co., Ltd.
// Three categories: wedding cold sparklers & stage effects, gender reveal, fireworks display.
// Each product carries a strong SEO title, unique buyer-facing copy, spec table, and 5 main images.

export type ProductCategory = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
};

export type Product = {
  slug: string;
  categorySlug: string;
  model: string;
  name: string; // SEO-optimized title aligned with Google buyer search intent
  tagline: string;
  description: string; // multi-paragraph, unique per product
  features: string[];
  specs: Record<string, string>;
  applications: string[];
  keywords: string[];
  images: string[];
  relatedSlugs?: string[];
};

const img = (slug: string, count: number): string[] =>
  Array.from({ length: count }, (_, i) => `/products/${slug}/${i + 1}.jpg`);

export const productCategories: ProductCategory[] = [
  {
    slug: "wedding-cold-sparklers",
    name: "Wedding Cold Sparklers & Stage Effects",
    tagline: "Smokeless cold spark fountains and stage effect machines for indoor celebrations",
    description:
      "Cold spark machines, wireless fountain firing systems, handheld sparklers, bubble machines and titanium powder engineered for weddings, banquets and indoor events — bright sparkle effects with no flame, no smoke and safe close-range operation.",
    heroImage: "/banners/gallery.jpg"
  },
  {
    slug: "gender-reveal",
    name: "Color Smoke & Gender Reveal Effects",
    tagline: "Color smoke machines, smoke fluid and powder cannons for reveals, parties and photo shoots",
    description:
      "Vivid color smoke machines, refill smoke fluid and powder confetti cannons built for gender reveals, festivals, music videos, sports events and photogenic parties — dense, long-lasting color, safe non-toxic formulas and reliable activation for planners, studios and resellers.",
    heroImage: "/banners/gallery.jpg"
  },
  {
    slug: "fireworks-display",
    name: "Fireworks Display Equipment",
    tagline: "Firing systems, igniters, mortar tubes and racks for professional shows",
    description:
      "Remote fireworks firing systems, electric igniters, e-match wires, fiberglass mortar tubes and aluminum single-shot racks engineered for large-scale professional pyrotechnic displays — safety, precision and synchronized firing at scale.",
    heroImage: "/banners/display.jpg"
  }
];

export const products: Product[] = [
  // ========== WEDDING COLD SPARKLERS & STAGE EFFECTS ==========
  {
    slug: "ed08",
    categorySlug: "wedding-cold-sparklers",
    model: "ED08",
    name: "ED08 Wireless Cold Spark Fountain Firing System – 8 Cue Pyrotechnic Stage Igniter",
    tagline: "8-channel wireless firing box for cold pyro fountains and stage sparks",
    description:
      "The ED08 is an eight-cue wireless firing system built for planners who cue multiple cold-spark fountains from a single handheld remote. Each of its eight channels fires an independent effect, so a wedding first dance, a stage reveal and a finale burst can be sequenced without a single cable running across the venue.\n\nBecause it drives smokeless cold pyro fountains rather than open flame, the ED08 is safe to trigger metres from guests, indoors and under low ceilings. The lightweight plastic housing keeps the whole kit portable for touring event teams, and the remote's clear channel layout means an operator can learn the box in minutes rather than hours.\n\nSold factory-direct, the ED08 suits wedding studios, event rental companies and stage production houses that need dependable, repeatable ignition across an eight-effect show. Contact us for wholesale pricing, OEM branding and volume lead times.",
    features: [
      "8 independently controllable wireless firing cues",
      "Drives smokeless, flameless cold spark fountains",
      "Handheld remote control — no venue cabling required",
      "Lightweight plastic body for touring and rental use",
      "Ideal for weddings, birthdays and New Year stage shows",
      "Factory-direct with OEM branding available"
    ],
    specs: {
      Model: "ED08",
      Material: "Plastic",
      Effect: "Cold spark",
      Channels: "8 cues",
      Control: "Wireless remote",
      Application: "Wedding / birthday party / New Year",
      "Single Gross Weight": "1.7 kg",
      "Package Size": "25 × 14 × 25 cm"
    },
    applications: ["Weddings", "Birthday parties", "New Year celebrations", "Stage productions"],
    keywords: [
      "wireless fireworks firing system",
      "remote control fireworks firing system",
      "8 cue cold pyro firing system",
      "cold spark fountain stage firing system"
    ],
    images: img("ed08", 5),
    relatedSlugs: ["ed12", "cold-spark-machine", "h001"]
  },
  {
    slug: "ed12",
    categorySlug: "wedding-cold-sparklers",
    model: "ED12",
    name: "ED12 Indoor 12 Cue Remote Fountain Fireworks Firing System – Smokeless Cold Spark",
    tagline: "12-channel indoor firing system for cold spark fountain sequences",
    description:
      "Stepping up from eight cues to twelve, the ED12 gives production teams the extra channels needed to choreograph longer, more layered fountain sequences. Twelve independent outputs let an operator build a running effect down an aisle, ripple sparks across a stage front, or hold channels in reserve for a synchronized finale.\n\nEngineered specifically for indoor use, the ED12 fires cold spark fountains that stay cool to the touch and produce no smoke, so it clears the safety bar for hotel ballrooms, wedding halls and televised sets where haze and heat are unacceptable. Wireless triggering removes trip hazards and lets the box sit discreetly backstage.\n\nAt roughly 2.4 kg the ED12 remains a one-hand carry, and its plastic enclosure shrugs off the knocks of frequent transport. It is a natural fit for wedding planners, AV rental fleets and New Year event organisers who have outgrown smaller firing boxes. Ask us about bulk configuration and private-label options.",
    features: [
      "12 independently addressable firing cues",
      "Optimised for indoor smokeless cold spark fountains",
      "Wireless remote sequencing for layered effects",
      "No smoke, no flame — ballroom and broadcast safe",
      "Rugged plastic housing for repeated transport",
      "Wholesale and OEM configurations available"
    ],
    specs: {
      Model: "ED12",
      Material: "Plastic",
      Effect: "Cold spark",
      Channels: "12 cues",
      Control: "Wireless remote",
      Application: "Wedding / birthday party / New Year",
      "Single Gross Weight": "2.4 kg",
      "Package Size": "31 × 24 × 15 cm"
    },
    applications: ["Indoor weddings", "Ballroom events", "TV and stage sets", "New Year celebrations"],
    keywords: [
      "fountains fireworks firing system",
      "12 cue remote control firing system",
      "indoor cold spark firing system",
      "smokeless fireworks firing system wedding"
    ],
    images: img("ed12", 5),
    relatedSlugs: ["ed08", "cold-spark-machine", "mini-cold-spark-machine"]
  },
  {
    slug: "h001",
    categorySlug: "wedding-cold-sparklers",
    model: "H001",
    name: "H001 Handheld Cold Sparkler Gun – Stage Firing System for Weddings & Cold Fireworks",
    tagline: "Portable handheld cold sparkler launcher for first-dance moments",
    description:
      "The H001 puts a cold sparkler effect directly into the performer's hand. Weighing just 350 grams, this handheld firing device is designed for the moment a couple walks in, a singer hits the chorus, or a host wants a burst of sparkle on cue — no rigging, no stand, no cabling.\n\nThe effect is a genuine cold spark: bright, photogenic and cool enough to hold at arm's length, which is exactly why photographers love it for close-up wedding shots. Its slim plastic body loads quickly between takes, making it practical for back-to-back events and rental turnarounds.\n\nBecause it ships small and light, the H001 is an easy add-on for distributors building a wedding-effects range, and an easy upsell for planners who already run fountain systems. Reach out for carton quantities, replacement consumables and branded packaging.",
    features: [
      "Handheld 350 g cold sparkler — no stand required",
      "Instant sparkle effect for entrances and reveals",
      "Cool cold-spark output, safe at close range",
      "Fast reload between takes for busy event days",
      "Compact plastic body, easy to ship and store",
      "Great distributor add-on to fountain systems"
    ],
    specs: {
      Model: "H001",
      Material: "Plastic",
      Effect: "Cold spark",
      Type: "Handheld sparkler gun",
      Application: "Wedding / birthday party / New Year",
      "Single Gross Weight": "0.35 kg",
      "Package Size": "31 × 10 × 10 cm"
    },
    applications: ["Wedding entrances", "First dance", "Stage performances", "Party reveals"],
    keywords: [
      "handheld firing system",
      "cold sparkler gun",
      "handheld cold sparkler firing system",
      "wedding cold fireworks handheld"
    ],
    images: img("h001", 5),
    relatedSlugs: ["ed08", "cold-spark-machine", "titanium-powder"]
  },
  {
    slug: "titanium-powder",
    categorySlug: "wedding-cold-sparklers",
    model: "Ti-200",
    name: "200g Composite Titanium Powder for Cold Spark Machines – Indoor & Outdoor Ti Powder",
    tagline: "Consumable titanium granulate that fuels cold spark fountains",
    description:
      "Every cold spark machine is only as good as the powder it burns, and the ED-series and stage fountains in our range run on this composite titanium granulate. Supplied in 200-gram bags, it produces the signature silver-gold spark plume that defines a modern cold-pyro effect.\n\nThe grain is engineered for a controlled burn: depending on the machine setting, one charge delivers a fountain roughly one to five metres tall and keeps working for fifteen to twenty minutes of cumulative run time. That consistency matters for operators who need the third fountain of the night to look exactly like the first.\n\nAs a pure consumable, titanium powder is the repeat-purchase heart of any cold-spark rental business, which makes it a strategic wholesale line rather than a one-off sale. It ships as a compact, stackable bag. Contact us for case pricing, mixed-pallet orders and private-label bagging.",
    features: [
      "Composite titanium granulate for cold spark machines",
      "Signature silver-gold spark plume",
      "Adjustable fountain height of roughly 1–5 m",
      "15–20 minutes of working time per charge",
      "Indoor and outdoor compatible",
      "High-repeat consumable — ideal wholesale line"
    ],
    specs: {
      Model: "Ti-200",
      Color: "Silver",
      Packing: "200 g / bag",
      Weight: "200 g",
      "Fountain Height": "1 m – 5 m",
      "Working Time": "15–20 minutes",
      Use: "Indoor / outdoor cold spark machines"
    },
    applications: ["Cold spark machines", "Stage fountains", "Wedding effects", "Event rentals"],
    keywords: [
      "titanium powder for fireworks",
      "cold fireworks titanium powder",
      "composite titanium metal powder",
      "stage ti powder cold spark"
    ],
    images: img("titanium-powder", 3),
    relatedSlugs: ["cold-spark-machine", "mini-cold-spark-machine", "ed12"]
  },
  {
    slug: "cold-spark-machine",
    categorySlug: "wedding-cold-sparklers",
    model: "CS-700",
    name: "700W Cold Spark Machine with Flight Case – IP66 Cold Sparkler Fountain for Weddings",
    tagline: "700W cold spark fountain machine, remote controlled, road-case ready",
    description:
      "This 700-watt cold spark machine is the workhorse fountain for professional event floors. It throws a dense, bright column of cold sparks on command via wireless remote or DMX, and its IP66-rated housing lets it run in demanding indoor and semi-outdoor conditions without missing a cue.\n\nWe ship it as a factory kit: two machines paired with a remote and a fitted flight case, so a rental company can pull a ready-to-work pair off the truck and set up in minutes. The road case protects the units between gigs and keeps the whole package inventory-friendly.\n\nRated at 700 W, it delivers the punchy fountain height that ballrooms and concert stages demand while remaining a true cold effect — safe near guests and performers. It is built for wedding studios, nightclubs and production companies buying by the pair or the pallet. Ask about multi-case pricing and OEM finishes.",
    features: [
      "700W cold spark fountain output",
      "Wireless remote and DMX control",
      "IP66-rated housing for tough venues",
      "Ships as 2 machines + remote + flight case",
      "Cold, flameless effect safe near crowds",
      "Rental-ready packaging for fast turnaround"
    ],
    specs: {
      Model: "CS-700",
      Power: "700 W",
      Protection: "IP66",
      Control: "Remote control / DMX",
      Package: "2 pcs + remote + flight case",
      Effect: "Cold spark fountain",
      Application: "Wedding / concert / event"
    },
    applications: ["Weddings", "Concerts", "Nightclubs", "Corporate events"],
    keywords: [
      "cold spark machine",
      "cold spark machine wedding",
      "cold spark machine with flight case",
      "700w cold sparkler machine"
    ],
    images: img("cold-spark-machine", 5),
    relatedSlugs: ["mini-cold-spark-machine", "titanium-powder", "ed12"]
  },
  {
    slug: "mini-cold-spark-machine",
    categorySlug: "wedding-cold-sparklers",
    model: "CS-Mini",
    name: "Mini Cold Spark Machine DMX Remote – Indoor Outdoor Wedding Sparkler Fountain",
    tagline: "Compact DMX cold spark machine for tight stages and small venues",
    description:
      "When floor space is tight, the mini cold spark machine delivers the same eye-catching fountain in a footprint barely larger than a coffee mug. At 135 × 135 × 170 mm and 2 kg it hides easily on a crowded stage, tucks onto a cake table, or lines a narrow aisle where a full-size unit simply will not fit.\n\nDespite its size it is a serious tool: DMX control lets it slot straight into an existing lighting desk, while a fast three-to-five-minute warm-up gets it show-ready quickly. It sprays a clean cold-spark column three to six metres high and runs on standard 110/220 V mains, so it travels internationally without fuss.\n\nThe mini is the volume seller of any cold-spark line — planners buy them in fours and sixes to frame a whole set. It is ideal for wedding decorators, small-venue operators and resellers. Contact us for tiered pricing and matched multi-unit sets.",
    features: [
      "Palm-sized 135 × 135 × 170 mm body",
      "DMX control for lighting-desk integration",
      "Fast 3–5 minute warm-up",
      "3–6 m spray height",
      "Dual 110/220 V mains compatibility",
      "Buy in multiples to frame a full stage"
    ],
    specs: {
      Model: "CS-Mini",
      "Warm-up Time": "3–5 min",
      Control: "DMX",
      Power: "AC 220V / 110V ±10% 50Hz",
      "Spray Height": "3–6 m",
      Size: "135 × 135 × 170 mm",
      Weight: "2 kg"
    },
    applications: ["Small venues", "Wedding tables", "Indoor stages", "Outdoor events"],
    keywords: [
      "mini cold spark machine",
      "dmx cold spark machine",
      "indoor outdoor cold spark machine",
      "wedding event cold sparkler"
    ],
    images: img("mini-cold-spark-machine", 5),
    relatedSlugs: ["cold-spark-machine", "titanium-powder", "ed08"]
  },
  {
    slug: "bubble-machine",
    categorySlug: "wedding-cold-sparklers",
    model: "BM-01",
    name: "Professional Bubble Machine for Weddings & Stage – High Output Party Bubble Maker",
    tagline: "High-output bubble machine for soft, romantic event atmospheres",
    description:
      "Not every moment calls for sparks — sometimes a room needs a soft drift of bubbles, and this bubble machine delivers that dreamy, photogenic atmosphere on demand. It pushes a dense stream of bubbles across a dance floor or stage, filling the air for first dances, children's parties and whimsical stage cues.\n\nBuilt for repeat professional use, it pairs a generous fluid reservoir with a high-output fan so it keeps producing without constant refills, and it is simple enough that any venue staffer can run it. As part of a dual-effect stage line, it complements our cold spark machines perfectly: sparks for the big beat, bubbles for the tender one.\n\nCompact and easy to transport, it is a low-cost, high-margin add-on for event rental fleets and wedding decorators who want to broaden their effect menu. Get in touch for wholesale quantities, matching bubble fluid and OEM options.",
    features: [
      "High-output continuous bubble stream",
      "Large fluid reservoir for long run time",
      "Simple operation for any venue staff",
      "Pairs with cold spark machines for dual effects",
      "Compact and easy to transport",
      "High-margin rental add-on"
    ],
    specs: {
      Model: "BM-01",
      Type: "Bubble machine",
      Effect: "Bubbles",
      Control: "Manual / remote",
      Application: "Wedding / party / stage",
      Use: "Indoor / outdoor"
    },
    applications: ["Weddings", "Children's parties", "Stage shows", "Corporate events"],
    keywords: [
      "bubble machine wedding",
      "professional bubble machine",
      "stage bubble maker",
      "party bubble machine wholesale"
    ],
    images: img("bubble-machine", 4),
    relatedSlugs: ["cold-spark-machine", "mini-cold-spark-machine", "h001"]
  },

  // ========== GENDER REVEAL EFFECTS ==========
  {
    slug: "color-smoke-machine",
    categorySlug: "gender-reveal",
    model: "GR-Smoke",
    name: "Gender Reveal Color Smoke Machine – Pink Blue Smoke Effect for Reveal Parties",
    tagline: "Vivid pink or blue smoke output for the big reveal moment",
    description:
      "The reveal is the whole point of a gender reveal party, and this color smoke machine makes that moment unmistakable. It releases a thick, saturated cloud of pink or blue smoke that photographs beautifully against any backdrop — the kind of shot parents frame and share for years.\n\nUnlike a hand-held smoke stick that fizzles in seconds, a machine gives the operator control: a sustained, even plume that lasts long enough for the crowd to react and the camera to catch it. That reliability is why event photographers and reveal-party planners prefer a dedicated machine over disposables.\n\nAs a reusable centrepiece paired with our refill smoke fluid, it turns a one-off consumable sale into an ongoing supply relationship. It is a strong retail and rental line for party stores and event companies expanding into the fast-growing reveal category. Contact us for color options, wholesale pricing and OEM branding.",
    features: [
      "Thick, saturated pink or blue smoke output",
      "Sustained plume for photo-perfect reveals",
      "Reusable machine, not a disposable stick",
      "Pairs with refillable color smoke fluid",
      "Camera-friendly, dense color payload",
      "Growing category for party retailers"
    ],
    specs: {
      Model: "GR-Smoke",
      Type: "Color smoke machine",
      Colors: "Pink / Blue",
      Effect: "Colored smoke",
      Application: "Gender reveal / party / photoshoot",
      Use: "Indoor / outdoor"
    },
    applications: ["Gender reveals", "Photoshoots", "Parties", "Promotional events"],
    keywords: [
      "gender reveal smoke machine",
      "pink blue smoke machine",
      "color smoke machine",
      "gender reveal smoke effect"
    ],
    images: img("color-smoke-machine", 5),
    relatedSlugs: ["color-smoke-oil", "confetti-cannon", "cold-spark-machine"]
  },
  {
    slug: "color-smoke-oil",
    categorySlug: "gender-reveal",
    model: "GR-Fluid",
    name: "Color Smoke Fluid for Gender Reveal Machines – Pink & Blue Smoke Oil Refill",
    tagline: "Refill smoke oil that keeps color smoke machines running",
    description:
      "Behind every vivid reveal cloud is the fluid that makes it, and this color smoke oil is formulated to deliver dense, true-tone pink and blue smoke through a color smoke machine. It is the consumable that turns a machine sale into a repeat-order relationship.\n\nThe blend is tuned for rich color saturation and a clean plume, so the smoke reads clearly on camera rather than washing out to a pale haze. Because it is a refill, operators keep a machine working season after season simply by restocking fluid — no new hardware required.\n\nFor distributors, smoke fluid is the recurring-revenue backbone of a reveal-effects range: low unit cost, high reorder rate, easy to ship and stock. It bottles compactly for pallet-friendly logistics. Reach out for case quantities, mixed pink/blue orders and private-label bottling.",
    features: [
      "Dense, true-tone pink and blue smoke",
      "Formulated for on-camera color saturation",
      "Refill consumable for color smoke machines",
      "High reorder rate — recurring revenue line",
      "Compact bottling for efficient shipping",
      "Private-label bottling available"
    ],
    specs: {
      Model: "GR-Fluid",
      Type: "Color smoke fluid",
      Colors: "Pink / Blue",
      Use: "Color smoke machine refill",
      Application: "Gender reveal / party / photoshoot"
    },
    applications: ["Gender reveals", "Photoshoots", "Parties", "Event rentals"],
    keywords: [
      "color smoke oil",
      "gender reveal smoke fluid",
      "pink blue smoke oil refill",
      "smoke machine color fluid"
    ],
    images: img("color-smoke-oil", 5),
    relatedSlugs: ["color-smoke-machine", "confetti-cannon", "titanium-powder"]
  },
  {
    slug: "confetti-cannon",
    categorySlug: "gender-reveal",
    model: "GR-Cannon",
    name: "Gender Reveal Confetti Powder Cannon – Long-Range Pink Blue Powder Launcher",
    tagline: "Single-press powder and confetti cannon for reveal moments",
    description:
      "For a reveal that lands with a bang, the powder confetti cannon fires a burst of pink or blue powder and confetti high into the air on a single press. It is the classic, foolproof reveal tool — no power, no setup, just point, twist and celebrate.\n\nThe charge is built for reach and spread, throwing color well overhead so a whole crowd sees the answer at once and cameras capture a full, dramatic cloud. Discreet packaging keeps the color a secret until the moment arrives, which is exactly what buyers of reveal products expect.\n\nBecause it is a self-contained consumable, the cannon is an easy, high-turnover retail item for party shops, online sellers and event planners — bought individually by families and by the carton for reveal-party packages. Contact us for wholesale cartons, powder-versus-confetti fill options and neutral or branded packaging.",
    features: [
      "Single-press launch — no power or setup",
      "Long-range pink or blue powder and confetti",
      "Wide overhead spread for full-crowd reveals",
      "Discreet packaging keeps the reveal secret",
      "Self-contained, foolproof operation",
      "High-turnover retail and carton sales"
    ],
    specs: {
      Model: "GR-Cannon",
      Type: "Powder / confetti cannon",
      Colors: "Pink / Blue",
      Activation: "Single-press twist",
      Fill: "Powder / confetti",
      Application: "Gender reveal / party"
    },
    applications: ["Gender reveals", "Parties", "Photoshoots", "Celebrations"],
    keywords: [
      "gender reveal confetti cannon",
      "gender reveal powder cannon",
      "pink blue powder cannon",
      "confetti powder launcher wholesale"
    ],
    images: img("confetti-cannon", 5),
    relatedSlugs: ["color-smoke-machine", "color-smoke-oil", "h001"]
  },

  // ========== FIREWORKS DISPLAY EQUIPMENT ==========
  {
    slug: "firework-fuse-wire",
    categorySlug: "fireworks-display",
    model: "FW-500",
    name: "500m Firework Fuse Wire 0.4mm – Blast Connect Wire with Spark Effect for Firing Systems",
    tagline: "500-metre copper connect wire that links firing systems to effects",
    description:
      "Every firing system needs wire to reach the effects, and this 500-metre roll of 0.4 mm copper connect wire is the backbone that ties a display together. It carries the firing pulse from the system out to each cue, and its own spark effect adds visual life along the run.\n\nBought by the roll, it is the kind of high-consumption staple that professional display crews reorder constantly — every show consumes metres of it, and running out mid-setup is not an option. A 500 m roll keeps a pyrotechnician stocked across multiple firings.\n\nThe copper conductor is chosen for reliable current delivery so cues fire when they should, and the roll format keeps storage and transport tidy. It is a core wholesale line for pyrotechnic suppliers and display companies. Contact us for multi-roll pricing, gauge options and bulk logistics.",
    features: [
      "500 m roll of 0.4 mm copper connect wire",
      "Carries firing pulse with a visible spark effect",
      "Reliable copper conductor for dependable cues",
      "High-consumption reorder staple for display crews",
      "Tidy roll format for storage and transport",
      "Core wholesale line for pyro suppliers"
    ],
    specs: {
      Model: "FW-500",
      Material: "Copper wire",
      Diameter: "0.4 mm",
      Length: "500 m / roll",
      Effect: "Spark effect",
      Occasion: "Firework display"
    },
    applications: ["Fireworks displays", "Firing system wiring", "Pyrotechnic shows"],
    keywords: [
      "firework connect wire",
      "firework fuse wire",
      "blast explosion wire",
      "500m fireworks fuse wire firing system"
    ],
    images: img("firework-fuse-wire", 5),
    relatedSlugs: ["electric-igniter", "talon-igniter", "am04r-36"]
  },
  {
    slug: "electric-igniter",
    categorySlug: "fireworks-display",
    model: "Ematch",
    name: "Ematch Electric Igniter for Fireworks – 0.3m to 5m Pyrotechnic Display Ignition Wire",
    tagline: "Copper-wire e-match igniters in five lead lengths",
    description:
      "The electric igniter — or e-match — is the tiny component that actually lights the show. Ours uses a durable copper wire lead and comes in 0.3 m, 1 m, 2 m, 3 m and 5 m lengths so a pyrotechnician can match the lead to the distance between the firing rail and each device.\n\nHaving the full length range from one manufacturer matters: a crew can standardise on a single trusted igniter for close-in stage effects and long-run field cues alike, instead of mixing brands with inconsistent firing behaviour. Consistent ignition is the difference between a clean, synchronised display and a mistimed one.\n\nAs a per-shot consumable, e-matches are ordered in large quantities for every display, making them a cornerstone wholesale product for pyrotechnic distributors and professional firing teams. Contact us for bulk pricing across the length range, custom lead lengths and OEM packaging.",
    features: [
      "Durable copper-wire electric match igniter",
      "Available in 0.3 m, 1 m, 2 m, 3 m and 5 m leads",
      "Consistent ignition for synchronized firing",
      "One trusted igniter for stage and field cues",
      "High-volume per-shot consumable",
      "Custom lengths and OEM packaging available"
    ],
    specs: {
      Model: "Ematch",
      Material: "Durable copper wire",
      Lengths: "0.3 m / 1 m / 2 m / 3 m / 5 m",
      Type: "Electric match igniter",
      Occasion: "Firework display"
    },
    applications: ["Fireworks displays", "Firing systems", "Stage pyrotechnics"],
    keywords: [
      "electric igniter",
      "electric igniter for fireworks",
      "electric match igniter",
      "ematch pyrotechnic firing system igniter"
    ],
    images: img("electric-igniter", 5),
    relatedSlugs: ["talon-igniter", "firework-fuse-wire", "am04r-3"]
  },
  {
    slug: "talon-igniter",
    categorySlug: "fireworks-display",
    model: "Talon",
    name: "Talon Fireworks Igniter – Electric Safe Fuse 0.5m to 5m for Fireworks & Party Shows",
    tagline: "Talon-style safe fuse igniters from 0.5m to 5m",
    description:
      "The talon igniter is a safe-fuse style electric igniter built for pyrotechnicians who want quick, reliable connection to fused devices. With durable copper-wire leads offered in 0.5 m, 1 m, 2 m, 3 m and 5 m, it bridges the gap between a firing system and traditional fused fireworks.\n\nWhere a bare e-match lights a bare device, the talon is designed to marry cleanly to safe fuse, making it the go-to for crews firing cakes, candles and fused effects at weddings, parties and mid-size shows. That specialisation is why many operators stock both the talon and a standard e-match side by side.\n\nSold as a consumable across a full length range, it is an easy companion line for any distributor already carrying igniters and wire, rounding out a complete firing-accessory catalogue. Contact us for wholesale quantities, length mixes and branded packaging.",
    features: [
      "Talon-style electric safe-fuse igniter",
      "Copper-wire leads: 0.5 m, 1 m, 2 m, 3 m, 5 m",
      "Connects cleanly to traditional safe fuse",
      "Ideal for cakes, candles and fused effects",
      "Complements standard e-match igniters",
      "Full-range consumable for distributors"
    ],
    specs: {
      Model: "Talon",
      Material: "Durable copper wire",
      Lengths: "0.5 m / 1 m / 2 m / 3 m / 5 m",
      Type: "Safe fuse igniter",
      Occasion: "Firework display / wedding / party"
    },
    applications: ["Fireworks displays", "Weddings", "Parties", "Fused effects"],
    keywords: [
      "talon igniter",
      "fireworks safe fuse",
      "electric talon fireworks igniter",
      "fireworks igniter wedding party"
    ],
    images: img("talon-igniter", 5),
    relatedSlugs: ["electric-igniter", "firework-fuse-wire", "fiberglass-mortar-tube"]
  },
  {
    slug: "am04r-3",
    categorySlug: "fireworks-display",
    model: "AM04R-3",
    name: "AM04R-3 Wireless Fireworks Firing System – Remote Pyrotechnic Ignition Controller",
    tagline: "Compact wireless firing system for smaller synchronized shows",
    description:
      "The AM04R-3 is a wireless remote firing system for pyrotechnicians who need dependable, cable-free ignition on smaller and mid-size displays. It receives firing commands over a secure radio link and triggers connected igniters precisely on cue, so effects fire in the sequence the operator intends.\n\nWireless control transforms setup on difficult sites: no long firing lines to run across roads, water or crowds, and the operator stays at a safe, comfortable firing position. For close-proximity work — weddings, private events, indoor stages — that flexibility and safety margin is a genuine advantage.\n\nBuilt as part of a scalable firing-system family, the AM04R-3 lets a display company start compact and expand with matching receivers as show sizes grow. It suits event firms, wedding pyro specialists and rental operators. Contact us for system bundles, channel configurations and OEM options.",
    features: [
      "Secure wireless radio firing control",
      "Precise on-cue ignition of connected igniters",
      "No long firing lines across the site",
      "Safe operator firing distance",
      "Scalable within a matched receiver family",
      "System bundles and OEM options available"
    ],
    specs: {
      Model: "AM04R-3",
      Type: "Wireless firing system",
      Control: "Remote radio control",
      Effect: "Sequenced ignition",
      Application: "Fireworks display / wedding / event"
    },
    applications: ["Fireworks displays", "Weddings", "Private events", "Indoor stages"],
    keywords: [
      "firework firing system",
      "wireless fireworks firing system",
      "remote control fireworks firing system",
      "pyrotechnic ignition controller"
    ],
    images: img("am04r-3", 5),
    relatedSlugs: ["am04r-36", "lelt12r", "electric-igniter"]
  },
  {
    slug: "am04r-36",
    categorySlug: "fireworks-display",
    model: "AM04R-36",
    name: "AM04R-36 Multi-Cue Wireless Fireworks Firing System – Professional Display Controller",
    tagline: "High-channel wireless firing system for large professional shows",
    description:
      "The AM04R-36 scales the AM04R platform up to the channel count professional display companies demand. With many independent cues under one secure wireless link, it choreographs large, complex shows where dozens of effects must fire in exact sequence and rhythm.\n\nBig displays live and die on synchronisation, and a high-cue system lets a pyrotechnician map an entire choreography — ripples, chases, and a tightly timed finale — into one controller. Reliable radio firing keeps every cue honest across a wide firing field, without the risk and labour of massive cable runs.\n\nEngineered for the top of the firing-system range, the AM04R-36 is the tool for established display firms and pyro-musical productions running serious shows. It pairs naturally with our igniters, wire and mortar tubes to complete a full professional firing kit. Contact us for large-system quotes, spare receivers and configuration support.",
    features: [
      "High independent cue count for big shows",
      "Secure wireless firing across a wide field",
      "Choreograph ripples, chases and finales",
      "Reliable synchronization at scale",
      "Integrates with igniters, wire and tubes",
      "Professional display-grade controller"
    ],
    specs: {
      Model: "AM04R-36",
      Type: "Multi-cue wireless firing system",
      Control: "Remote radio control",
      Effect: "Large synchronized displays",
      Application: "Professional fireworks display"
    },
    applications: ["Professional displays", "Pyro-musicals", "Festivals", "Large events"],
    keywords: [
      "fireworks firing system",
      "multi cue firing system",
      "professional fireworks firing system",
      "wireless pyrotechnic display controller"
    ],
    images: img("am04r-36", 5),
    relatedSlugs: ["am04r-3", "lelt12r", "firework-fuse-wire"]
  },
  {
    slug: "lelt12r",
    categorySlug: "fireworks-display",
    model: "LELT12R",
    name: "LELT12R Wireless Fireworks Firing System – 12 Cue Remote Pyrotechnic Firing Receiver",
    tagline: "12-cue wireless firing receiver for mid-size displays",
    description:
      "The LELT12R is a twelve-cue wireless firing receiver that hits the sweet spot for mid-size displays — enough channels to build a real sequence, in a package that stays fast to deploy. Each cue fires independently over a secure radio link, giving operators clean control without a tangle of wire.\n\nTwelve cues is a practical, popular count: it covers a full wedding finale, a corporate launch or a small municipal show without the cost and complexity of a large-format system. Operators can also run multiple LELT12R receivers together to expand coverage when a bigger show comes along.\n\nAs a mid-range receiver, it is a versatile inventory item for rental fleets and event pyro teams who need to right-size firepower to each booking. It works hand-in-hand with our e-match igniters and connect wire. Contact us for receiver pricing, multi-unit sets and transmitter pairing details.",
    features: [
      "12 independent wireless firing cues",
      "Secure radio link, no wire tangle",
      "Right-sized for mid-scale displays",
      "Combine multiple receivers to scale up",
      "Fast to deploy for rental fleets",
      "Works with our igniters and connect wire"
    ],
    specs: {
      Model: "LELT12R",
      Type: "Wireless firing receiver",
      Channels: "12 cues",
      Control: "Remote radio control",
      Application: "Fireworks display / event"
    },
    applications: ["Mid-size displays", "Weddings", "Corporate launches", "Municipal shows"],
    keywords: [
      "12 cue fireworks firing system",
      "wireless firing receiver",
      "remote fireworks firing system",
      "pyrotechnic firing receiver"
    ],
    images: img("lelt12r", 4),
    relatedSlugs: ["am04r-3", "am04r-36", "electric-igniter"]
  },
  {
    slug: "fiberglass-mortar-tube",
    categorySlug: "fireworks-display",
    model: "MT-FG",
    name: "Fiberglass Mortar Tubes for Fireworks – 2 to 12 Inch Custom Color Logo Firing Tubes",
    tagline: "Fiberglass mortar tubes from 2-inch up to 12-inch bore",
    description:
      "Mortar tubes are the launch platform of any aerial display, and our fiberglass mortar tubes are built to send shells skyward safely and repeatably. Offered in a broad bore range — 2, 2.5, 3, 4, 5, 6, 8, 10 and 12 inch — they cover everything from small comet cues to heavy display shells.\n\nFiberglass is the professional's choice for its strength-to-weight ratio: light enough to rack, transport and reposition quickly, yet tough enough to withstand repeated firing. Custom color and logo options let display companies and resellers put their own brand on the field, which matters for firms building a recognisable identity.\n\nSold across the full size range, tubes are a foundational hardware line that pairs with our racks, igniters and firing systems to outfit a complete display operation. They ship efficiently and stock well. Contact us for size-mix pricing, custom branding and rack-compatible configurations.",
    features: [
      "Fiberglass construction — strong yet light",
      "Bore range from 2 inch up to 12 inch",
      "Withstands repeated professional firing",
      "Custom color and logo branding available",
      "Pairs with racks and firing systems",
      "Full-range hardware line for display firms"
    ],
    specs: {
      Model: "MT-FG",
      Material: "Fiberglass",
      Sizes: "2 / 2.5 / 3 / 4 / 5 / 6 / 8 / 10 / 12 inch",
      Customization: "Custom color / logo",
      Occasion: "Firework display"
    },
    applications: ["Fireworks displays", "Aerial shells", "Professional shows"],
    keywords: [
      "fiberglass mortar tube",
      "mortar tubes fireworks",
      "fiber glass mortar tube fireworks",
      "custom fireworks mortar tubes"
    ],
    images: img("fiberglass-mortar-tube", 5),
    relatedSlugs: ["aluminum-single-shot-rack", "iron-rack", "electric-igniter"]
  },
  {
    slug: "aluminum-single-shot-rack",
    categorySlug: "fireworks-display",
    model: "Rack-AL",
    name: "Aluminum Single Shot Fireworks Racks – 1.2 & 2 Inch Roman Candle Display Racks",
    tagline: "Lightweight aluminum single-shot racks for display arrays",
    description:
      "A great display needs its tubes held at exactly the right angles, and these aluminum single-shot racks lock a firing array into a clean, repeatable geometry. Built for 1.2-inch and 2-inch single shots, they organise Roman candles and single-shot tubes into fans, rows and rising sequences.\n\nAluminium is the material of choice here for one clear reason: weight. A pyrotechnician racking dozens of positions on a field needs hardware that carries easily and sets fast, and aluminium delivers strength without the back-breaking mass of steel. Faster setup means more time for cueing and safety checks.\n\nAs reusable field hardware, racks are a durable-goods line that display companies buy in quantity and use season after season. They complement our tubes, igniters and firing systems to build a turnkey display kit. Contact us for multi-shot configurations, angle options and wholesale pricing.",
    features: [
      "Aluminum single-shot firing rack",
      "Sized for 1.2 inch and 2 inch shots",
      "Organises Roman candles into clean arrays",
      "Lightweight for fast field setup",
      "Reusable, durable field hardware",
      "Configurable shot counts and angles"
    ],
    specs: {
      Model: "Rack-AL",
      Material: "Aluminum",
      Sizes: "1.2 inch / 2 inch",
      Type: "Single-shot display rack",
      Occasion: "Firework display / wedding"
    },
    applications: ["Fireworks displays", "Roman candle arrays", "Weddings", "Professional shows"],
    keywords: [
      "fireworks single shot racks",
      "fireworks display rack",
      "aluminum roman candle rack",
      "single shot aluminum fireworks rack"
    ],
    images: img("aluminum-single-shot-rack", 5),
    relatedSlugs: ["iron-rack", "fiberglass-mortar-tube", "am04r-36"]
  },
  {
    slug: "iron-rack",
    categorySlug: "fireworks-display",
    model: "Rack-FE",
    name: "Steel Fireworks Display Rack – Heavy-Duty Iron Mortar Rack for Professional Shows",
    tagline: "Rugged steel rack for heavy mortar and display work",
    description:
      "Where the aluminium rack prioritises portability, the steel iron rack prioritises brute stability. For heavy mortars and high-volume field firing, its rigid steel frame plants tubes firmly and holds angle under the recoil and vibration of repeated large-calibre launches.\n\nMass is a feature here, not a drawback: a heavier frame resists shifting on uneven ground and shrugs off the punishment of professional touring use. Display companies that fire big shells season after season want hardware that will not flex, and steel answers that need.\n\nBuilt as the heavy-duty counterpart to our aluminium racks, the iron rack lets a display operator pick the right frame for each job — light for speed, steel for stability. It rounds out a complete firing-hardware catalogue alongside our tubes and firing systems. Contact us for frame sizes, capacity options and wholesale quotes.",
    features: [
      "Heavy-duty steel display rack",
      "Rock-solid stability for large mortars",
      "Holds firing angle under recoil",
      "Resists shifting on uneven ground",
      "Built for repeated professional touring",
      "Heavy-duty counterpart to aluminum racks"
    ],
    specs: {
      Model: "Rack-FE",
      Material: "Steel / iron",
      Type: "Heavy-duty mortar rack",
      Use: "Large mortars / high-volume firing",
      Occasion: "Firework display"
    },
    applications: ["Fireworks displays", "Heavy mortars", "Touring shows", "Festivals"],
    keywords: [
      "fireworks display rack",
      "steel fireworks rack",
      "heavy duty mortar rack",
      "iron fireworks firing rack"
    ],
    images: img("iron-rack", 5),
    relatedSlugs: ["aluminum-single-shot-rack", "fiberglass-mortar-tube", "am04r-36"]
  }
];

export function getCategory(slug: string) {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsByCategory(categorySlug: string) {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product) {
  return (product.relatedSlugs ?? [])
    .map((s) => getProduct(s))
    .filter((p): p is Product => Boolean(p));
}
