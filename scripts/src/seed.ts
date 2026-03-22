import { db } from "@workspace/db";
import { categoriesTable, bikesTable } from "@workspace/db/schema";

async function seed() {
  console.log("Seeding Siva Motors database...");

  await db.delete(bikesTable);
  await db.delete(categoriesTable);

  const [ekoTejas, venumotors] = await db
    .insert(categoriesTable)
    .values([
      {
        name: "Eko Tejas",
        slug: "eko-tejas",
        description: "High-performance electric scooters from Eko Tejas — built for Indian roads.",
        imageUrl: "/images/models/axel-pro.png",
      },
      {
        name: "Venumotors",
        slug: "venumotors",
        description: "Venumotors electric scooters — stylish, reliable, and energy-efficient.",
        imageUrl: "/images/models/icon.png",
      },
    ])
    .returning();

  console.log("Categories seeded:", ekoTejas.name, venumotors.name);

  await db.insert(bikesTable).values([
    // ── Eko Tejas ─────────────────────────────────────────────────────────
    {
      name: "Eko Tejas Axel",
      slug: "eko-tejas-axel",
      categoryId: ekoTejas.id,
      price: "55000.00",
      rangeKm: 100,
      topSpeedKph: 45,
      motorWatts: 1000,
      batteryCapacityWh: 2160,
      weightKg: "85.0",
      shortDescription: "Everyday commuter — up to 100 km+ range. Graphene & Lithium battery options.",
      description:
        "The Eko Tejas Axel is the perfect everyday electric commuter. Available in multiple battery variants: Graphene options (48V 32Ah: 45–55 km, 60V 32Ah: 55–60 km, 72V 32Ah: 70–80 km — 1 year warranty) and premium Lithium options (48V 32Ah: 75–85 km, 60V 32Ah: 80–90 km, 60V 36Ah: 90–100 km+ — 3 year 2+1 warranty). Features LED headlamp, digital display, disc brakes, telescopic suspension, and reverse mode. Choose the range that fits your daily ride.",
      imageUrl: "/images/models/axel.png",
      galleryUrls: [],
      features: [
        "LED Headlamp",
        "Digital Display",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "Graphene Battery — up to 70–80 km",
        "Lithium Battery — up to 90–100 km+",
        "1 Year Warranty (Graphene)",
        "3 Year Warranty 2+1 (Lithium)",
      ],
      isFeatured: false,
      inStock: true,
    },
    {
      name: "Eko Tejas Axel Pro",
      slug: "eko-tejas-axel-pro",
      categoryId: ekoTejas.id,
      price: "75000.00",
      rangeKm: 100,
      topSpeedKph: 55,
      motorWatts: 1500,
      batteryCapacityWh: 2160,
      weightKg: "90.0",
      shortDescription: "Premium Eko Tejas — up to 100 km+ range. Graphene & Lithium variants available.",
      description:
        "The Eko Tejas Axel Pro delivers premium performance with the same versatile battery range as the Axel. Choose from Graphene variants (48V 32Ah: 45–55 km, 60V 32Ah: 55–60 km, 72V 32Ah: 70–80 km — 1 year warranty) or Lithium variants (48V 32Ah: 75–85 km, 60V 32Ah: 80–90 km, 60V 36Ah: 90–100 km+ — 3 year 2+1 warranty). The Axel Pro adds enhanced styling and upgraded body graphics for riders who want a premium look with long-range capability.",
      imageUrl: "/images/models/axel-pro.png",
      galleryUrls: [],
      features: [
        "LED Headlamp",
        "Digital Display",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "Premium Styling & Body Graphics",
        "Graphene Battery — up to 70–80 km",
        "Lithium Battery — up to 90–100 km+",
        "1 Year Warranty (Graphene)",
        "3 Year Warranty 2+1 (Lithium)",
      ],
      isFeatured: true,
      inStock: true,
    },

    // ── Venumotors ────────────────────────────────────────────────────────
    {
      name: "Venumotors Spot",
      slug: "venumotors-spot",
      categoryId: venumotors.id,
      price: "52000.00",
      rangeKm: 60,
      topSpeedKph: 45,
      motorWatts: 1000,
      batteryCapacityWh: 1920,
      weightKg: "82.0",
      shortDescription: "Sporty city scooter with bold blue styling and two battery options.",
      description:
        "The Venumotors Spot is a bold, sporty electric scooter built for confident urban riding. Available in two variants: 48V 32Ah giving 45–50 km range (6–7 hrs charge) and 60V 32Ah giving 55–60 km range (6–8 hrs charge). Features LED headlamp, digital display, disc brakes, telescopic suspension, reverse mode, and USB charging. Backed by a 1-year warranty.",
      imageUrl: "/images/models/spot.jpg",
      galleryUrls: [
        "/images/models/spot-front.jpg",
        "/images/models/spot-front2.jpg",
        "/images/models/spot-side.jpg",
      ],
      features: [
        "LED Headlamp",
        "Digital Display",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "USB Charging",
        "48V 32Ah — 45–50 km range",
        "60V 32Ah — 55–60 km range",
        "1 Year Warranty",
      ],
      isFeatured: false,
      inStock: true,
    },
    {
      name: "Venumotors Thunder",
      slug: "venumotors-thunder",
      categoryId: venumotors.id,
      price: "72000.00",
      rangeKm: 70,
      topSpeedKph: 55,
      motorWatts: 1500,
      batteryCapacityWh: 1920,
      weightKg: "88.0",
      shortDescription: "Bold steel-blue scooter with 60V 32Ah battery and 60–70 km range.",
      description:
        "The Venumotors Thunder commands the road with its striking steel-blue finish and aggressive \"THUNDER\" body graphics. Powered by a 60V 32Ah lead acid battery delivering 60–70 km of range per charge. Features LED headlamp, digital meter, disc brakes, telescopic suspension, and reverse mode. A powerful choice for daily riders who want style and performance. 1-year warranty on motor, controller, and battery.",
      imageUrl: "/images/models/thunder.jpg",
      galleryUrls: [
        "/images/models/thunder-front.jpg",
        "/images/models/thunder-front2.jpg",
        "/images/models/thunder-rear.jpg",
        "/images/models/thunder-side.jpg",
      ],
      features: [
        "LED Headlamp",
        "Digital Meter",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "Stylish Body Graphics",
        "60V 32Ah — 60–70 km range",
        "1 Year Warranty (Motor, Controller, Battery)",
      ],
      isFeatured: true,
      inStock: true,
    },
    {
      name: "Venumotors Icon",
      slug: "venumotors-icon",
      categoryId: venumotors.id,
      price: "78000.00",
      rangeKm: 90,
      topSpeedKph: 60,
      motorWatts: 2000,
      batteryCapacityWh: 2304,
      weightKg: "92.0",
      shortDescription: "Iconic 80–90 km scooter — available in teal and red. Same variants as E-Fly.",
      description:
        "The Venumotors Icon brings premium styling and long-range capability together. Available in two variants: 72V 32Ah (80–90 km range, 7–8 hrs charge) and 60V 40Ah (80–90 km range, 7–8 hrs charge). Features front disc brake, LED headlamp, digital meter, telescopic suspension, reverse mode, and bold \"iCON\" body graphics with lightning bolt badge. Comes in stylish teal and red colour options. 1-year warranty on motor, controller, and battery.",
      imageUrl: "/images/models/icon.jpg",
      galleryUrls: [
        "/images/models/icon-teal-front.jpg",
        "/images/models/icon-teal-rear.jpg",
        "/images/models/icon-red.jpg",
        "/images/models/icon-red-front.jpg",
        "/images/models/icon-red-rear.jpg",
      ],
      features: [
        "LED Headlamp",
        "Digital Meter",
        "Front Disc Brake",
        "Telescopic Suspension",
        "Reverse Mode",
        "Stylish Body Graphics",
        "Lightning Bolt Badge",
        "Available in Teal & Red",
        "72V 32Ah — 80–90 km range",
        "60V 40Ah — 80–90 km range",
        "1 Year Warranty (Motor, Controller, Battery)",
      ],
      isFeatured: true,
      inStock: true,
    },
    {
      name: "Venumotors E-Fly",
      slug: "venumotors-e-fly",
      categoryId: venumotors.id,
      price: "82000.00",
      rangeKm: 90,
      topSpeedKph: 60,
      motorWatts: 2000,
      batteryCapacityWh: 2304,
      weightKg: "90.0",
      shortDescription: "Premium E-Fly with 80–90 km range — available in teal and red.",
      description:
        "The Venumotors E-Fly is the flagship long-range scooter at Siva Motors. Available in two high-capacity variants: 72V 32Ah (80–90 km range, 7–8 hrs charge) and 60V 40Ah (80–90 km range, 7–8 hrs charge). Featuring front disc brakes, LED headlamp, digital meter, telescopic suspension, reverse mode, and striking body graphics. Comes in beautiful teal and red colour options. Backed by a 1-year warranty on motor and battery.",
      imageUrl: "/images/models/e-fly.jpg",
      galleryUrls: [
        "/images/models/e-fly-front.jpg",
        "/images/models/e-fly-rear.jpg",
        "/images/models/e-fly-red.jpg",
        "/images/models/e-fly-red-front.jpg",
        "/images/models/e-fly-red-rear.jpg",
      ],
      features: [
        "LED Headlamp",
        "Digital Meter",
        "Front Disc Brake",
        "Telescopic Suspension",
        "Reverse Mode",
        "USB Charging",
        "Stylish Body Graphics",
        "Available in Teal & Red",
        "72V 32Ah — 80–90 km range",
        "60V 40Ah — 80–90 km range",
        "1 Year Warranty (Motor, Battery)",
      ],
      isFeatured: false,
      inStock: true,
    },
    {
      name: "Eko Tejas Jatayu",
      slug: "eko-tejas-jatayu",
      categoryId: ekoTejas.id,
      price: "82000.00",
      rangeKm: 90,
      topSpeedKph: 65,
      motorWatts: 2000,
      batteryCapacityWh: 2520,
      weightKg: "95.0",
      shortDescription: "Bold flagship scooter — up to 80–90 km+ range in orange, teal, navy & rose gold.",
      description:
        "The Eko Tejas Jatayu is the flagship electric scooter from Eko Tejas, built for riders who demand both power and presence. Available in Graphene variants (60V 32Ah: 55–60 km, 72V 32Ah: 70–75 km — 1 year warranty) and Lithium variants (60V 32Ah: 70–75 km, 60V 36Ah: 75–80 km, 60V 42Ah: 80–90 km+ — 3 year 2+1 warranty). With a striking angular design, LED X-pattern headlamp, and bold JATAYU body graphics, it is available in four colour options: vibrant orange, sky teal, midnight navy blue, and rose gold.",
      imageUrl: "/images/models/jatayu-orange.jpg",
      galleryUrls: [
        "/images/models/jatayu-teal.jpg",
        "/images/models/jatayu-teal-front.jpg",
        "/images/models/jatayu-blue.jpg",
        "/images/models/jatayu-blue-front.jpg",
        "/images/models/jatayu-rosegold.jpg",
        "/images/models/jatayu-orange-front.jpg",
      ],
      features: [
        "LED X-Pattern Headlamp",
        "Digital Instrument Cluster",
        "Front Disc Brake",
        "Telescopic Suspension",
        "Reverse Mode",
        "Bold Angular Design",
        "Available in 4 Colours",
        "Graphene Battery — up to 70–75 km",
        "Lithium Battery — up to 80–90 km+",
        "1 Year Warranty (Graphene)",
        "3 Year Warranty 2+1 (Lithium)",
      ],
      isFeatured: true,
      inStock: true,
    },
  ]);

  console.log("All 7 Siva Motors models seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
