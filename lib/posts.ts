// Blog / buying-guide content for Zhuxing Pyrotechnics.
// Topics chosen from real Google buyer-intent search patterns:
//  - "what is a cold spark machine" / "are cold spark machines safe indoor"
//  - "cold spark machine vs real fireworks"
//  - "how fireworks firing systems work / ematch wiring"
//  - "how to choose a fireworks firing system"
//  - "gender reveal smoke vs powder cannon"
//  - "cold spark machine wholesale / factory sourcing"
// Each article is unique long-form copy, factory-advantage framing, B2B inquiry CTAs.

export type Post = {
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified?: string;
  category: string;
  readingTime: string;
  cover: string;
  tldr: string[];
  keywords: string[];
  body: { heading: string; paragraphs: string[] }[];
  faq: { question: string; answer: string }[];
  cta: string;
};

export const posts: Post[] = [
  {
    slug: "what-is-a-cold-spark-machine",
    title: "What Is a Cold Spark Machine? The Complete 2026 Guide for Event Buyers & Resellers",
    description:
      "A factory guide to cold spark machines: how they work, what titanium powder does, safety indoors, wattage differences, and what to check before buying wholesale.",
    datePublished: "2026-09-18",
    category: "Cold Spark Machines",
    readingTime: "8 min read",
    cover: "/banners/gallery.jpg",
    tldr: [
      "A cold spark machine burns granular titanium powder to create a bright, smokeless fountain of sparks that are cool to the touch.",
      "Because there is no open flame, smoke or pyro smell, most venues approve them for indoor use.",
      "Key buying factors: wattage (spray height), control (remote vs DMX), IP rating, and reliable powder supply.",
      "Buying factory-direct lowers unit cost and secures a steady titanium powder supply for rental fleets."
    ],
    keywords: [
      "what is a cold spark machine",
      "cold spark machine guide",
      "cold sparkler machine wholesale",
      "cold spark machine indoor safe"
    ],
    body: [
      {
        heading: "What a cold spark machine actually does",
        paragraphs: [
          "A cold spark machine — also called a cold sparkler, cold fireworks machine or sparkular-style fountain — produces a tall, glittering column of sparks without fire. Instead of combustible pyrotechnic compound, it heats a granular titanium-based powder that ejects as brilliant sparks which cool almost instantly, so they are safe to stand beside at close range.",
          "The effect reads on camera like a fountain firework, which is exactly why it has become the signature moment for wedding entrances, first dances, concert intros and corporate product reveals. Unlike a real gerb or fountain, it leaves no smoke haze, no burning smell and no fallout to clean up."
        ]
      },
      {
        heading: "Why venues approve it indoors",
        paragraphs: [
          "The single biggest reason cold spark machines have exploded in popularity is venue approval. Traditional indoor pyrotechnics require permits, a licensed operator and often trip smoke detectors. Cold sparks generate no open flame and minimal smoke, so the vast majority of ballrooms, hotels and event halls will approve them — frequently with nothing more than a quick conversation with the venue manager.",
          "That said, professional operators still coordinate with the venue on detector placement and clearance distances. Positioning the machine away from sprinklers and low ceilings, and keeping the recommended clearance from guests, keeps the effect both spectacular and safe."
        ]
      },
      {
        heading: "How to compare machines before you buy",
        paragraphs: [
          "Wattage is the headline spec: a 400–600 W unit throws a shorter fountain suited to intimate rooms, while a 700 W machine like our CS-700 delivers the punchy height concert stages and large ballrooms demand. Match the wattage to the room, not the other way around.",
          "Next, look at control: a wireless remote is fastest for solo operators, while DMX lets the machine slot into an existing lighting desk for synchronized shows. An IP-rated housing (our CS-700 is IP66) matters if you work semi-outdoor gigs. Finally — and this is what separates a hobby purchase from a business one — confirm the powder supply. A machine is only useful while you can restock the titanium granulate that fuels it."
        ]
      },
      {
        heading: "The factory-direct advantage",
        paragraphs: [
          "As a manufacturer of both the machines and the titanium powder, we can offer event companies and resellers something a trading company cannot: a single, reliable source for hardware and consumables at factory pricing. That means lower landed cost per unit, guaranteed powder availability for your rental calendar, and the option to private-label the machines under your own brand.",
          "For rental fleets, the economics are simple — the machine is bought once, but the powder is bought again and again. Securing both from one factory protects your margin and your reputation for shows that always look the same, every single time."
        ]
      }
    ],
    faq: [
      {
        question: "Are cold spark machines safe to use indoors?",
        answer:
          "Yes. Because they produce no open flame and negligible smoke, most indoor venues approve them. Operators still follow clearance distances and coordinate detector placement with the venue."
      },
      {
        question: "How long does a bag of titanium powder last?",
        answer:
          "Our 200 g composite titanium powder delivers roughly 15–20 minutes of cumulative working time per charge, depending on the machine setting and desired fountain height."
      },
      {
        question: "Can I buy cold spark machines wholesale at factory prices?",
        answer:
          "Yes. We are the factory and support custom finishes and volume pricing. Contact us for a wholesale quotation."
      }
    ],
    cta: "Looking to stock cold spark machines and titanium powder at factory prices? Contact our team for wholesale pricing and volume options."
  },
  {
    slug: "cold-spark-machine-vs-fireworks",
    title: "Cold Spark Machine vs Real Fireworks: Which Effect Should You Offer Clients?",
    description:
      "Compare cold spark machines and traditional fireworks on safety, venue approval, cost, cleanup and visual impact — and learn which effect wins for indoor events.",
    datePublished: "2026-09-18",
    category: "Cold Spark Machines",
    readingTime: "7 min read",
    cover: "/banners/display.jpg",
    tldr: [
      "Cold sparks are cool-to-touch, smokeless and indoor-safe; real fireworks are hotter, louder and outdoor-only.",
      "Cold spark machines are reusable hardware; fireworks are single-use consumables.",
      "For weddings and indoor events, cold sparks win on venue approval; for large outdoor shows, fireworks still rule.",
      "Many event companies offer both — and source both from one factory to simplify supply."
    ],
    keywords: [
      "cold spark machine vs fireworks",
      "cold sparks vs real fireworks",
      "difference cold spark fireworks",
      "indoor sparkler vs fireworks"
    ],
    body: [
      {
        heading: "Heat, smoke and safety",
        paragraphs: [
          "The core difference is temperature. Cold spark fountains eject sparks that cool within a short distance, so they can be triggered metres from guests and performers. Traditional fireworks and gerbs burn with real flame and heat, demanding large safety perimeters and trained operators.",
          "Smoke is the second dividing line. Fireworks produce smoke and a distinctive pyro smell that lingers indoors and can trip fire-suppression systems. Cold sparks are effectively smokeless, which is why they clear venue rules that fireworks never could."
        ]
      },
      {
        heading: "Cost model: hardware vs consumable",
        paragraphs: [
          "Fireworks are a pure consumable — every show burns product you have to rebuy. A cold spark machine is durable hardware bought once, with only the titanium powder as an ongoing cost. Over a busy season, that reusable model can dramatically lower cost-per-event for a rental company.",
          "This is also why the two products suit different business models. A display company firing weekend shows lives on fireworks volume; a wedding and events company builds a rental fleet of cold spark machines that pays for itself over dozens of bookings."
        ]
      },
      {
        heading: "When to use which",
        paragraphs: [
          "Choose cold sparks for indoor weddings, ballroom galas, TV sets, nightclub moments and any venue with strict fire rules. Choose real fireworks and professional firing systems for large outdoor displays, festivals and finales where scale and sky-filling bursts are the point.",
          "The smartest event businesses do not choose — they offer both, matching the effect to the booking. Sourcing machines, powder, firing systems, igniters and tubes from a single manufacturer keeps that dual offering simple and profitable."
        ]
      }
    ],
    faq: [
      {
        question: "Do cold spark machines replace fireworks entirely?",
        answer:
          "No. They replace fireworks for indoor and close-proximity effects, but large outdoor displays still rely on real fireworks fired with professional firing systems."
      },
      {
        question: "Which is cheaper over a full season?",
        answer:
          "For frequent indoor events, cold spark machines are usually cheaper long-term because the machine is reusable and only powder is consumed. Fireworks cost recurs in full for every show."
      }
    ],
    cta: "Want to offer both cold sparks and professional fireworks equipment? Source everything from one factory — contact us for a full catalogue and pricing."
  },
  {
    slug: "how-fireworks-firing-systems-work",
    title: "How Fireworks Firing Systems Work: E-Match, Cues & Wireless Firing Explained",
    description:
      "A practical guide to how wireless fireworks firing systems work — cues, e-match igniters, connect wire and safe wiring — for display professionals and buyers.",
    datePublished: "2026-09-18",
    category: "Firing Systems",
    readingTime: "9 min read",
    cover: "/banners/display.jpg",
    tldr: [
      "A firing system sends an electrical pulse over cues to ignite e-matches connected to each effect.",
      "Wireless systems remove long firing lines and let the operator fire from a safe distance.",
      "Cue count determines how many independent effects you can choreograph.",
      "Reliable igniters and connect wire are as important as the firing box itself."
    ],
    keywords: [
      "how fireworks firing system works",
      "ematch wiring guide",
      "wireless fireworks firing system",
      "fireworks cue firing explained"
    ],
    body: [
      {
        heading: "The basic firing chain",
        paragraphs: [
          "Every electrically fired display follows the same chain: a firing system (the control box) sends a low-voltage pulse down a cue to an electric igniter — an e-match — which is inserted into the firework. When the pulse reaches the e-match, it ignites and lights the effect. Multiply that across dozens of cues and you have a choreographed show.",
          "The firing system is the brain, but the e-match and connect wire are the nervous system. A premium controller paired with unreliable igniters will still misfire, which is why professionals standardise on consistent, quality-controlled igniters across an entire display."
        ]
      },
      {
        heading: "Cues: how many effects can you control?",
        paragraphs: [
          "A 'cue' is one independently firable output. A 12-cue receiver like our LELT12R can fire twelve separate moments; a high-cue system like the AM04R-36 choreographs far larger, layered shows. The right cue count depends on your typical show size — buying too few limits your choreography, buying too many wastes budget.",
          "Many operators scale by combining receivers: start with a compact AM04R-3 for weddings and add matching receivers as show sizes grow, all driven from one transmitter."
        ]
      },
      {
        heading: "Why wireless changed the game",
        paragraphs: [
          "Traditional wired firing means running physical cable from the control box to every position — slow to set up, hazardous across roads or water, and vulnerable to damage. Wireless firing systems replace that with a secure radio link, so the operator fires from a comfortable, safe distance and setup time drops dramatically.",
          "For close-proximity work like weddings and indoor stages, wireless is not just convenient — it is safer, because the operator never has to be near the effects at the moment of ignition."
        ]
      },
      {
        heading: "Sourcing a complete, compatible kit",
        paragraphs: [
          "The hidden cost in firing systems is compatibility. Mixing a controller from one brand with igniters and wire from another can introduce firing inconsistencies. Sourcing the firing system, e-match igniters, connect wire, mortar tubes and racks from a single manufacturer guarantees they are designed to work together.",
          "As a factory producing the full firing chain — systems, igniters, wire, tubes and racks — we help display companies buy a complete, tested kit at wholesale pricing rather than assembling mismatched parts from multiple suppliers."
        ]
      }
    ],
    faq: [
      {
        question: "What is an e-match?",
        answer:
          "An e-match (electric match) is a small igniter with wire leads. The firing system sends current to it, and it ignites to light the connected firework or effect."
      },
      {
        question: "How many e-matches can one cue fire?",
        answer:
          "It depends on the system's output and your wiring (series/parallel). Always follow the firing system's maximum firing specification to ensure reliable ignition."
      },
      {
        question: "Is a wireless firing system reliable enough for big shows?",
        answer:
          "Yes. Professional wireless systems use secure radio links and are used for large synchronized displays worldwide. Cue count and range should match your show scale."
      }
    ],
    cta: "Building or expanding a firing kit? We manufacture firing systems, igniters, wire, tubes and racks — contact us for a compatible wholesale package."
  },
  {
    slug: "how-to-choose-fireworks-firing-system",
    title: "How to Choose a Fireworks Firing System: Cues, Range & Reliability Checklist",
    description:
      "A buyer's checklist for choosing the right fireworks firing system — cue count, wireless range, expandability, igniter compatibility and factory support.",
    datePublished: "2026-09-18",
    category: "Firing Systems",
    readingTime: "6 min read",
    cover: "/banners/hero.jpg",
    tldr: [
      "Match cue count to your typical show size, with room to expand.",
      "Check wireless range and reliability for your firing sites.",
      "Prefer systems that expand by adding receivers.",
      "Confirm igniter/wire compatibility and factory after-sales support."
    ],
    keywords: [
      "how to choose fireworks firing system",
      "best fireworks firing system",
      "fireworks firing system buying guide",
      "wireless firing system wholesale"
    ],
    body: [
      {
        heading: "Start with your show size",
        paragraphs: [
          "The first decision is cue count. A wedding or small corporate reveal may need only a handful of cues (AM04R-3), a mid-size municipal show fits a 12-cue receiver (LELT12R), and a large pyro-musical needs a high-cue controller (AM04R-36). Buy for the shows you actually book, plus a little headroom.",
          "Under-buying forces awkward workarounds on show night; over-buying ties up budget you could spend on igniters, tubes and racks. Right-sizing is the single most cost-effective decision you will make."
        ]
      },
      {
        heading: "Range, reliability and expandability",
        paragraphs: [
          "Confirm the wireless range covers your typical firing distance with margin, and that the radio link is secure and stable. Then check expandability: a system that grows by adding matched receivers protects your investment as your business scales, rather than forcing a full replacement.",
          "Reliability is non-negotiable — a misfire in front of a client is a reputation cost far greater than the hardware price. This is where consistent, factory-matched igniters and wire pay for themselves."
        ]
      },
      {
        heading: "Don't forget the ecosystem and support",
        paragraphs: [
          "A firing system is only one part of a working kit. Verify that the igniters, connect wire, mortar tubes and racks you will use are compatible and available from the same source. Buying the ecosystem together avoids firing inconsistencies and simplifies reordering.",
          "Finally, weigh after-sales support. As a manufacturer, we support our systems directly, advise on configuration, and keep compatible consumables in stock — the kind of backing a pure trading company cannot offer."
        ]
      }
    ],
    faq: [
      {
        question: "How many cues do I need?",
        answer:
          "Match cue count to your typical show: a few cues for weddings, 12 for mid-size shows, and high-cue systems for large synchronized displays. Add headroom for growth."
      },
      {
        question: "Can I expand a firing system later?",
        answer:
          "Yes — our systems scale by adding matched receivers driven from one transmitter, so you can start compact and grow with your business."
      }
    ],
    cta: "Not sure which firing system fits your shows? Tell us your typical show size and we'll recommend a factory-direct configuration."
  },
  {
    slug: "gender-reveal-smoke-vs-powder-cannon",
    title: "Gender Reveal Effects: Smoke Machine vs Powder Cannon — What Sells Best?",
    description:
      "Compare gender reveal color smoke machines and powder confetti cannons on impact, reusability, safety and reseller margin — and how to stock both wholesale.",
    datePublished: "2026-09-18",
    category: "Gender Reveal",
    readingTime: "6 min read",
    cover: "/products/color-smoke-machine/2.jpg",
    tldr: [
      "Color smoke machines give a sustained, photogenic plume and are reusable with refill fluid.",
      "Powder cannons are single-use, foolproof and great impulse retail items.",
      "Smoke machines build recurring fluid revenue; cannons drive high-volume unit sales.",
      "Stocking both covers rental and retail buyers — source from one factory."
    ],
    keywords: [
      "gender reveal smoke vs powder cannon",
      "gender reveal smoke machine wholesale",
      "gender reveal powder cannon supplier",
      "pink blue reveal effect"
    ],
    body: [
      {
        heading: "Two very different reveal moments",
        paragraphs: [
          "A color smoke machine releases a thick, sustained cloud of pink or blue smoke — the plume lingers long enough for the crowd to react and the camera to capture the full moment. A powder cannon, by contrast, delivers one instant, dramatic burst of colored powder and confetti on a single press.",
          "Neither is 'better' — they serve different buyers. Photographers and planners often prefer the controllable, longer-lasting smoke plume; families and party-goers love the instant, foolproof bang of a cannon."
        ]
      },
      {
        heading: "The reseller economics",
        paragraphs: [
          "For a reseller, the smoke machine is a razor-and-blades product: sell the reusable machine once, then sell refill smoke fluid again and again. That recurring fluid revenue is the backbone of a healthy reveal-effects range.",
          "Powder cannons are the volume play — low unit cost, high turnover, bought individually and by the carton. Together they capture both the rental/pro segment and the impulse-retail segment of the fast-growing gender reveal market."
        ]
      },
      {
        heading: "Stock both, source from one factory",
        paragraphs: [
          "Because reveal buyers split between these two products, the strongest catalogues carry both — plus refill fluid to lock in repeat orders. Sourcing machines, fluid and cannons from a single manufacturer simplifies logistics and protects margin.",
          "As a factory, we produce color smoke machines, refill smoke fluid and powder confetti cannons, with color options and private-label packaging for resellers building a branded reveal line."
        ]
      }
    ],
    faq: [
      {
        question: "Which gender reveal product is more profitable to sell?",
        answer:
          "Smoke machines create recurring revenue through refill fluid; powder cannons sell in high volume. Carrying both maximizes total margin across buyer types."
      },
      {
        question: "Can I get custom packaging for reveal products?",
        answer:
          "Yes. As the factory we offer color options and private-label packaging for resellers building their own branded reveal range."
      }
    ],
    cta: "Expanding into gender reveal effects? Stock smoke machines, refill fluid and powder cannons factory-direct — contact us for wholesale pricing."
  },
  {
    slug: "sourcing-pyrotechnic-equipment-from-china-factory",
    title: "Sourcing Cold Spark & Fireworks Equipment From a China Factory: A Buyer's Guide",
    description:
      "How to source cold spark machines, firing systems and fireworks equipment directly from a China factory — MOQ, customization, quality control, shipping and avoiding middlemen.",
    datePublished: "2026-09-18",
    category: "Sourcing & Wholesale",
    readingTime: "8 min read",
    cover: "/workshop/workshop-1.jpg",
    tldr: [
      "Buying factory-direct removes trading-company markup and gives you customization control.",
      "Confirm the supplier actually manufactures — ask for workshop photos and certifications.",
      "Clarify MOQ, lead time, customization and after-sales before ordering.",
      "A single factory for machines, powder, systems and hardware simplifies your supply chain."
    ],
    keywords: [
      "cold spark machine factory china",
      "fireworks equipment manufacturer china",
      "pyrotechnic equipment wholesale supplier",
      "cold sparkler wholesale manufacturer"
    ],
    body: [
      {
        heading: "Factory vs trading company: why it matters",
        paragraphs: [
          "Much of the cold spark and pyrotechnic equipment sold online passes through trading companies that add margin without adding value. Buying directly from the factory removes that markup, gives you direct control over customization and branding, and connects you to the people who actually build and support the product.",
          "The test is simple: a real manufacturer can show you the workshop, the production line and product certifications. Ask for them. A trading company usually cannot."
        ]
      },
      {
        heading: "What to confirm before you order",
        paragraphs: [
          "Nail down four things: minimum order quantity, lead time, customization options (colors, configurations, packaging) and after-sales support. For consumables like titanium powder and smoke fluid, also confirm ongoing supply reliability — your rental calendar depends on it.",
          "For regulated items like electric igniters, request compliance documentation such as an MSDS. A serious factory will have this ready, which also smooths your import and logistics."
        ]
      },
      {
        heading: "Consolidate your supply chain",
        paragraphs: [
          "The most efficient buyers source their entire range from one capable factory: cold spark machines and powder, gender-reveal effects, firing systems, igniters, wire, mortar tubes and racks. One supplier means one shipment, one point of contact, consistent quality and simpler reordering.",
          "Our factory in Yueyang, China manufactures across all of these categories, serving event companies, wedding professionals, display firms and resellers worldwide with customization support and direct after-sales."
        ]
      }
    ],
    faq: [
      {
        question: "What is your minimum order quantity?",
        answer:
          "MOQ varies by product. Contact us with the items and quantities you need and we'll provide a tailored quotation and lead time."
      },
      {
        question: "Do you provide customization options?",
        answer:
          "Yes. As the manufacturer we support custom colors, configurations and packaging across our product range."
      },
      {
        question: "Can you supply compliance documents like MSDS?",
        answer:
          "Yes. We can provide documentation such as the MSDS for electric igniters to support your import and safety requirements."
      }
    ],
    cta: "Ready to source factory-direct? Tell us your product list and target quantities for a fast wholesale quotation with customization options."
  },
  {
    slug: "cold-spark-machine-wedding-setup-guide",
    title: "Wedding Cold Spark Setup Guide: Placement, Timing & First-Dance Effects",
    description:
      "How to set up cold spark machines for weddings — machine placement, how many units, first-dance and send-off timing, and safety tips for flawless photos.",
    datePublished: "2026-09-18",
    category: "Cold Spark Machines",
    readingTime: "7 min read",
    cover: "/banners/gallery.jpg",
    tldr: [
      "Place machines in front of or beside the couple — never directly behind — to protect the wide photo shot.",
      "Two units suit a simple first dance; four create a fuller wall of sparks.",
      "Best moments: grand entrance, first dance and the send-off.",
      "Coordinate clearance and detector placement with the venue in advance."
    ],
    keywords: [
      "cold spark machine wedding setup",
      "cold sparkler first dance",
      "how many cold spark machines wedding",
      "wedding send off sparkler effect"
    ],
    body: [
      {
        heading: "Where to place the machines",
        paragraphs: [
          "Placement makes or breaks the shot. Positioning cold spark machines behind the couple throws sparks toward the camera and ruins the wide angle; placing them in front of or flanking the couple frames them inside the sparks for that iconic photo. Aim the fountains upward and slightly inward so the columns meet without crowding the performers.",
          "Keep the recommended clearance from guests and any low-hanging décor, and make sure the spray path is clear of drapes, floral arches and the cake table."
        ]
      },
      {
        heading: "How many machines do you need?",
        paragraphs: [
          "For an intimate first dance, two machines on opposite sides of the floor deliver a clean, symmetrical effect. For a bigger visual — a grand entrance or a dramatic send-off down an aisle — four machines create a fuller wall of sparks and a more immersive moment.",
          "Compact units like our mini cold spark machine are ideal here: planners buy them in pairs and fours to frame the whole floor, and their small footprint hides easily among the décor."
        ]
      },
      {
        heading: "Timing the key moments",
        paragraphs: [
          "The three highest-impact moments are the grand entrance, the first dance chorus, and the send-off. Cue the sparks to the musical peak of the first dance rather than the opening bar, so the effect lands with the emotional high point.",
          "Wireless or DMX control lets the operator or DJ trigger each moment precisely. A quick rehearsal cue before guests arrive ensures the timing is perfect when it counts."
        ]
      },
      {
        heading: "Equip your rental fleet the smart way",
        paragraphs: [
          "Wedding and events companies that offer cold sparks as a package build a fleet of reliable machines plus a steady titanium powder supply. Buying both from one factory keeps every booking looking identical and protects margin across a busy season.",
          "As the manufacturer of the machines and the powder, we help wedding professionals scale their cold-spark offering with factory pricing, matched multi-unit sets and custom options."
        ]
      }
    ],
    faq: [
      {
        question: "How many cold spark machines do I need for a wedding?",
        answer:
          "Two machines work for a simple first dance; four give a fuller effect for grand entrances or send-offs. It depends on the floor size and the look you want."
      },
      {
        question: "Where should cold spark machines be placed?",
        answer:
          "In front of or beside the couple, aimed upward and slightly inward — never directly behind them, which throws sparks toward the camera and spoils the wide shot."
      },
      {
        question: "Are cold sparks safe for a first dance?",
        answer:
          "Yes. The sparks cool almost instantly and are smokeless, so with proper clearance and venue coordination they are safe for close-proximity moments like a first dance."
      }
    ],
    cta: "Building a wedding cold-spark rental package? Get factory pricing on machines, powder and matched multi-unit sets — contact our team."
  },
  {
    slug: "cold-spark-machine-maintenance-troubleshooting",
    title: "Cold Spark Machine Maintenance & Troubleshooting: Keep Every Show Flawless",
    description:
      "A practical maintenance and troubleshooting guide for cold spark machines — cleaning powder residue, fixing weak sparks, powder feeding issues and storage tips.",
    datePublished: "2026-09-18",
    category: "Cold Spark Machines",
    readingTime: "6 min read",
    cover: "/products/cold-spark-machine/1.jpg",
    tldr: [
      "Clean powder residue after events to protect feed consistency and spark quality.",
      "Weak sparks usually mean low/damp powder or a dirty heating element.",
      "Use only dry, fresh titanium powder and store machines in a dry place.",
      "Routine care extends machine life and keeps rental units reliable."
    ],
    keywords: [
      "cold spark machine maintenance",
      "cold spark machine troubleshooting",
      "cold spark machine cleaning",
      "cold spark machine weak sparks fix"
    ],
    body: [
      {
        heading: "Why maintenance matters for rental fleets",
        paragraphs: [
          "A cold spark machine is a mechanical device feeding fine metal powder through a heating element. Residue builds up over time, and neglected machines start to feed inconsistently, produce weaker fountains, or fail mid-show — a disaster in front of a paying client.",
          "For rental companies running back-to-back events, a simple after-event maintenance routine is the difference between a fleet that performs identically every time and one that slowly degrades."
        ]
      },
      {
        heading: "Cleaning after each event",
        paragraphs: [
          "After the machine cools, invert it and shake out remaining powder, then use a small vacuum or crevice tool to clear residue from gaps and the output. Wipe accessible surfaces and inspect the output nozzle for buildup.",
          "Never leave spent powder inside a stored machine — residue absorbs moisture and clumps, which is the most common cause of poor feeding and weak sparks at the next event."
        ]
      },
      {
        heading: "Troubleshooting common issues",
        paragraphs: [
          "Weak or thin sparks usually trace to one of three causes: low powder level, damp or old powder, or a dirty heating element. Refill with fresh, dry powder and run a cleaning cycle before assuming a hardware fault.",
          "Inconsistent feeding often means residue in the feed path — a full clean typically restores it. If the machine warms but produces no sparks after cleaning and fresh powder, the heating element or motor may need service; contact your supplier before improvising repairs."
        ]
      },
      {
        heading: "Powder quality and storage",
        paragraphs: [
          "Spark quality is only as good as the powder. Consistent, correctly graded titanium composite powder burns evenly and feeds smoothly; cheap or inconsistent powder causes sputtering and residue. Store both powder and machines in a dry environment.",
          "Because we manufacture the machines and the powder together, our powder is graded specifically for our units — which means consistent sparks and less residue. Sourcing both from one factory keeps maintenance predictable and your fleet reliable."
        ]
      }
    ],
    faq: [
      {
        question: "Why is my cold spark machine producing weak sparks?",
        answer:
          "Usually low or damp powder, or a dirty heating element. Refill with fresh, dry powder and run a cleaning cycle before suspecting a hardware fault."
      },
      {
        question: "How often should I clean a cold spark machine?",
        answer:
          "Clean after each event or heavy use. Shake out leftover powder and clear residue from the feed path and output to protect spark quality."
      },
      {
        question: "Can I use any titanium powder in the machine?",
        answer:
          "Use powder graded for your machine. Inconsistent powder causes sputtering and residue. Our powder is graded for our units for consistent results."
      }
    ],
    cta: "Need machines and correctly graded titanium powder from one source? Contact us for factory-direct supply and support."
  },
  {
    slug: "how-to-choose-mortar-tube-size",
    title: "How to Choose Mortar Tube Size: Caliber, Material & Rack Setup Explained",
    description:
      "A display buyer's guide to choosing fireworks mortar tubes — matching shell caliber to tube size, fiberglass durability, and pairing tubes with the right racks.",
    datePublished: "2026-09-18",
    category: "Firing Systems",
    readingTime: "7 min read",
    cover: "/products/fiberglass-mortar-tube/1.jpg",
    tldr: [
      "Match tube caliber to the shell — never fire an undersized shell from an oversized tube.",
      "Fiberglass offers a strong, lightweight, reusable balance for professional use.",
      "Tube bore ranges from 2 inch up to 12 inch for different shell sizes.",
      "Pair tubes with the right rack — aluminum for portability, steel for heavy mortars."
    ],
    keywords: [
      "how to choose mortar tube size",
      "fireworks mortar tube caliber guide",
      "fiberglass mortar tube fireworks",
      "mortar rack setup"
    ],
    body: [
      {
        heading: "Match the tube to the shell",
        paragraphs: [
          "The single most important rule: the mortar tube caliber must match the shell it fires. A shell that is too small for the tube can shift or tilt, sending the effect off-axis; the tube's internal diameter is what defines the shell size it is designed to launch.",
          "Our fiberglass tubes come in a full bore range — 2, 2.5, 3, 4, 5, 6, 8, 10 and 12 inch — so a display company can stock the exact calibers its shows require rather than compromising with mismatched sizes."
        ]
      },
      {
        heading: "Why fiberglass for professional work",
        paragraphs: [
          "Fiberglass tubes hit the professional sweet spot: strong enough to withstand repeated firing, yet light enough to rack, carry and reposition quickly on a field. That strength-to-weight balance is why display crews favor fiberglass for touring shows.",
          "Fiberglass also lasts across many seasons, making it a durable-goods investment rather than a per-show consumable. Custom color and logo options let display firms brand their field hardware."
        ]
      },
      {
        heading: "Pairing tubes with the right rack",
        paragraphs: [
          "Tubes need racks to hold firing angle and geometry. For single-shot arrays of Roman candles and small calibers, a lightweight aluminum rack sets up fast and carries easily. For heavy mortars and high-volume firing, a rigid steel rack provides the stability to hold angle under recoil.",
          "The right combination depends on the show: light aluminum for speed and portability, steel for heavy-calibre stability. Many crews carry both and match the rack to each job."
        ]
      },
      {
        heading: "Source tubes, racks and igniters together",
        paragraphs: [
          "Tubes, racks, igniters and firing systems all work as one kit. Sourcing them from a single manufacturer guarantees compatible sizing and simplifies reordering across a display operation.",
          "As a factory producing fiberglass mortar tubes, aluminum and steel racks, igniters and firing systems, we help display companies assemble a complete, correctly-matched firing setup at wholesale pricing with custom branding."
        ]
      }
    ],
    faq: [
      {
        question: "What size mortar tube do I need?",
        answer:
          "Match the tube's internal diameter to your shell caliber. Never fire an undersized shell from an oversized tube, as it can shift and fire off-axis."
      },
      {
        question: "Are fiberglass mortar tubes better than cardboard?",
        answer:
          "For professional, repeated use, fiberglass is far more durable than cardboard and offers a strong, lightweight, reusable option for display work."
      },
      {
        question: "Which rack should I use with my tubes?",
        answer:
          "Aluminum racks for portability and single-shot arrays; steel racks for heavy mortars needing maximum stability. Many crews use both depending on the show."
      }
    ],
    cta: "Planning your mortar and rack inventory? We manufacture tubes, racks, igniters and firing systems — contact us for a matched wholesale kit."
  },
  {
    slug: "special-effects-trade-show-sourcing-guide",
    title: "Sourcing Special Effects Equipment at Trade Shows: A Buyer's Selection Guide",
    description:
      "How event and pyrotechnic buyers evaluate special effects suppliers at trade shows — what to check, questions to ask, and how to secure factory-direct deals.",
    datePublished: "2026-09-18",
    category: "Sourcing & Wholesale",
    readingTime: "6 min read",
    cover: "/workshop/workshop-2.jpg",
    tldr: [
      "Trade shows are ideal for comparing suppliers side by side — but prepare a checklist first.",
      "Prioritize actual manufacturers over trading companies for pricing and customization control.",
      "Ask about MOQ, lead time, customization, compliance docs and after-sales.",
      "Follow up with a sample or trial order before committing to volume."
    ],
    keywords: [
      "special effects equipment trade show",
      "pyrotechnic supplier selection",
      "cold spark machine supplier trade show",
      "fireworks equipment sourcing"
    ],
    body: [
      {
        heading: "Why trade shows still matter for sourcing",
        paragraphs: [
          "Trade shows let buyers see cold spark machines, firing systems and effects fire in person, compare multiple suppliers in an afternoon, and meet the people behind the products. For high-value equipment, that hands-on comparison is hard to replicate online.",
          "The buyers who get the most from a show arrive with a checklist and clear criteria, rather than browsing booth to booth without a plan."
        ]
      },
      {
        heading: "Manufacturer or middleman?",
        paragraphs: [
          "The first thing to establish at any booth is whether you are talking to the actual manufacturer or a trading company reselling someone else's products. Manufacturers offer better pricing, direct customization control and genuine technical support; middlemen add margin without added value.",
          "Ask to see workshop photos, production capability and certifications. A real factory answers confidently; a reseller deflects."
        ]
      },
      {
        heading: "The questions that separate serious suppliers",
        paragraphs: [
          "Run through a consistent checklist at each booth: minimum order quantity, lead time, customization and branding options, compliance documentation (such as MSDS for igniters), and after-sales support. Note how completely and confidently each supplier answers.",
          "For consumables like titanium powder and smoke fluid, ask about ongoing supply reliability — a great machine is useless if you cannot restock what it burns."
        ]
      },
      {
        heading: "From booth to purchase order",
        paragraphs: [
          "Don't commit to volume on the show floor. Collect quotes, request a sample or small trial order, and verify quality before scaling up. A supplier confident in their product will welcome a trial.",
          "As a manufacturer of cold spark machines, powder, firing systems, igniters, tubes and racks, we support buyers with samples, transparent factory pricing and customization options — whether you meet us at a show or reach out directly."
        ]
      }
    ],
    faq: [
      {
        question: "How do I know if a supplier is a real manufacturer?",
        answer:
          "Ask for workshop photos, production capability and certifications. Real factories share them readily; trading companies usually cannot."
      },
      {
        question: "What should I ask a special effects supplier before buying?",
        answer:
          "MOQ, lead time, customization options, compliance documents like MSDS, after-sales support, and consumable supply reliability."
      },
      {
        question: "Should I place a large order at a trade show?",
        answer:
          "Better to collect quotes and request a sample or trial order first, verify quality, then scale to volume once you are confident."
      }
    ],
    cta: "Evaluating suppliers for special effects equipment? Request a sample and factory-direct quote from a real manufacturer — contact us today."
  }
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
