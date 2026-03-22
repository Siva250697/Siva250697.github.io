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
      rangeKm: 60,
      topSpeedKph: 45,
      motorWatts: 1000,
      batteryCapacityWh: 1920,
      weightKg: "85.0",
      shortDescription: "Compact everyday commuter with digital display and USB charging.",
      description:
        "The Eko Tejas Axel is the perfect companion for your daily commute. Equipped with LED headlamp, digital display, disc brakes, and USB charging, it blends modern features with proven reliability. Available with 48V 32Ah (40–50 km) or 60V 32Ah (50–60 km) lead acid battery options. Charging time is just 6–8 hours. Backed by a 1-year warranty on motor, controller, and battery.",
      imageUrl: "/images/models/axel.png",
      galleryUrls: [],
      features: [
        "LED Headlamp",
        "Digital Display",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "USB Charging",
        "1 Year Warranty (Motor, Controller, Battery)",
      ],
      isFeatured: false,
      inStock: true,
    },
    {
      name: "Eko Tejas Axel Pro",
      slug: "eko-tejas-axel-pro",
      categoryId: ekoTejas.id,
      price: "75000.00",
      rangeKm: 80,
      topSpeedKph: 55,
      motorWatts: 1500,
      batteryCapacityWh: 2304,
      weightKg: "90.0",
      shortDescription: "Premium Eko Tejas with higher voltage and stylish body graphics.",
      description:
        "The Eko Tejas Axel Pro takes everything great about the Axel and upgrades it with higher voltage options for greater range and top speed. Available with 60V 32Ah (60–70 km) or 72V 32Ah (70–80 km) lead acid batteries. Features include LED headlamp, digital display, disc brakes, telescopic suspension, reverse mode, and stylish body graphics. 1-year warranty on motor, controller, and battery.",
      imageUrl: "/images/models/axel-pro.png",
      galleryUrls: [],
      features: [
        "LED Headlamp",
        "Digital Display",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "Stylish Body Graphics",
        "60V / 72V Battery Options",
        "1 Year Warranty (Motor, Controller, Battery)",
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
      shortDescription: "Iconic 72V scooter with 80–90 km range and premium styling.",
      description:
        "Venumotors Icon lives up to its name. Powered by a 72V 32Ah lead acid battery system delivering 80–90 km of range on a single charge (7–8 hrs charging), the Icon combines long-haul capability with premium styling. Features LED headlamp, digital meter, disc brakes, telescopic suspension, reverse mode, and stylish body graphics. 1-year warranty on motor, controller, and battery.",
      imageUrl: "/images/models/icon.png",
      galleryUrls: [],
      features: [
        "LED Headlamp",
        "Digital Meter",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "Stylish Body Graphics",
        "72V 32Ah Lead Acid Battery",
        "80–90 km Range",
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
      shortDescription: "Sleek teal scooter — the longest range model at Siva Motors.",
      description:
        "The Venumotors E-Fly stands out with its distinctive teal finish and class-leading 80–90 km range on a 72V 32Ah lead acid battery. Packed with LED headlamp, digital meter, disc brakes, telescopic suspension, reverse mode, and elegant body graphics, the E-Fly is perfect for those who want style alongside substance. Charging time is 7–8 hours. 1-year warranty on motor and battery.",
      imageUrl: "/images/models/e-fly.png",
      galleryUrls: [],
      features: [
        "LED Headlamp",
        "Digital Meter",
        "Disc Brakes",
        "Telescopic Suspension",
        "Reverse Mode",
        "Stylish Body Graphics",
        "72V 32Ah Lead Acid Battery",
        "80–90 km Range",
        "1 Year Warranty (Motor, Battery)",
      ],
      isFeatured: false,
      inStock: true,
    },
  ]);

  console.log("All 6 Siva Motors models seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
