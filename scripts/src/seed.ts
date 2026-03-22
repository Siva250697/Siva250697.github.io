import { db } from "@workspace/db";
import { categoriesTable, bikesTable } from "@workspace/db/schema";
import { eq } from "drizzle-orm";

async function seed() {
  console.log("Seeding database...");

  // Clear existing data
  await db.delete(bikesTable);
  await db.delete(categoriesTable);

  // Insert categories
  const [city, mountain, cargo] = await db
    .insert(categoriesTable)
    .values([
      {
        name: "City",
        slug: "city",
        description: "Sleek urban commuters built for speed and style on city streets.",
        imageUrl: null,
      },
      {
        name: "Mountain",
        slug: "mountain",
        description: "Rugged trail blazers engineered for off-road adventure and rough terrain.",
        imageUrl: null,
      },
      {
        name: "Cargo",
        slug: "cargo",
        description: "Heavy-duty haulers designed to carry loads without compromising performance.",
        imageUrl: null,
      },
    ])
    .returning();

  console.log("Categories seeded:", city.name, mountain.name, cargo.name);

  // Insert bikes
  await db.insert(bikesTable).values([
    // City Bikes
    {
      name: "VoltRide City Pro",
      slug: "voltride-city-pro",
      categoryId: city.id,
      price: "2499.00",
      rangeKm: 120,
      topSpeedKph: 32,
      motorWatts: 500,
      batteryCapacityWh: 504,
      weightKg: "17.5",
      shortDescription: "The ultimate urban commuter with class-leading range and a featherlight frame.",
      description: "The VoltRide City Pro redefines city commuting. Built around a precision-welded aluminum alloy frame, it pairs a 500W mid-drive motor with a 504Wh integrated battery for up to 120km on a single charge. Hydraulic disc brakes and a 9-speed Shimano drivetrain ensure you're always in control. Whether you're dodging traffic or cruising bike paths, the City Pro delivers a smooth, confident ride day after day.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "500W mid-drive Bafang motor",
        "504Wh removable battery",
        "9-speed Shimano drivetrain",
        "Hydraulic disc brakes",
        "Integrated front & rear lights",
        "USB-C charging port",
        "LCD display with Bluetooth",
      ],
      isFeatured: true,
      inStock: true,
    },
    {
      name: "VoltRide City Lite",
      slug: "voltride-city-lite",
      categoryId: city.id,
      price: "1499.00",
      rangeKm: 80,
      topSpeedKph: 25,
      motorWatts: 250,
      batteryCapacityWh: 360,
      weightKg: "14.2",
      shortDescription: "Lightweight city riding at an accessible price point.",
      description: "The City Lite is your entry point into electric urban mobility. At just 14.2kg, it's one of the lightest e-bikes in its class. The 250W rear-hub motor provides smooth, natural-feeling assistance, while the 360Wh battery covers your daily commute with ease. Fold it down and take it on public transport, or lock it securely with the integrated frame lock.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "250W rear-hub motor",
        "360Wh integrated battery",
        "7-speed Shimano drivetrain",
        "Mechanical disc brakes",
        "Integrated frame lock",
        "Rear rack included",
        "Foldable design",
      ],
      isFeatured: false,
      inStock: true,
    },
    {
      name: "VoltRide Speed S",
      slug: "voltride-speed-s",
      categoryId: city.id,
      price: "3799.00",
      rangeKm: 100,
      topSpeedKph: 45,
      motorWatts: 750,
      batteryCapacityWh: 630,
      weightKg: "22.0",
      shortDescription: "Speed-pedelec performance for riders who refuse to slow down.",
      description: "Built for those who demand more, the Speed S is a true speed pedelec, legally classified as a moped in many regions. The 750W motor delivers instant, exhilarating torque to 45km/h, while full-suspension keeps the ride planted and comfortable. A 630Wh dual-battery system ensures you never run short on power during long rides.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "750W full-suspension drivetrain",
        "630Wh dual-battery system",
        "45 km/h top speed",
        "4-piston hydraulic disc brakes",
        "TFT color display",
        "Integrated turn signals",
        "GPS tracker included",
      ],
      isFeatured: true,
      inStock: true,
    },

    // Mountain Bikes
    {
      name: "VoltRide Trail X",
      slug: "voltride-trail-x",
      categoryId: mountain.id,
      price: "3299.00",
      rangeKm: 90,
      topSpeedKph: 32,
      motorWatts: 625,
      batteryCapacityWh: 630,
      weightKg: "24.5",
      shortDescription: "Full-suspension trail destroyer built for the gnarliest descents.",
      description: "The Trail X is engineered for riders who push the limits on every descent. A 625W Bosch Performance CX motor with 85Nm torque climbs any gradient with ease. 150mm front and rear suspension paired with 29\" wheels roll over rocks, roots, and ruts without flinching. Shimano XT 12-speed and four-piston brakes make you completely boss on technical terrain.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "625W Bosch Performance CX motor (85Nm)",
        "630Wh integrated PowerTube battery",
        "150mm front/rear travel",
        "Shimano XT 12-speed drivetrain",
        "4-piston hydraulic disc brakes",
        "29\" tubeless-ready wheels",
        "Dropper post included",
      ],
      isFeatured: true,
      inStock: true,
    },
    {
      name: "VoltRide Summit",
      slug: "voltride-summit",
      categoryId: mountain.id,
      price: "2799.00",
      rangeKm: 100,
      topSpeedKph: 32,
      motorWatts: 500,
      batteryCapacityWh: 504,
      weightKg: "22.0",
      shortDescription: "Hardtail efficiency meets electric performance for XC adventures.",
      description: "If cross-country speed and efficiency are your goals, the Summit delivers. The hardtail design saves weight and transfers pedaling power directly to the trail. A 500W motor with Shimano EP8 system adds intelligent, responsive assist as you climb and fly across flowy XC trails. At 22kg, it's agile enough to sprint and strong enough to last all day.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "500W Shimano EP8 mid-drive motor",
        "504Wh battery",
        "100mm front suspension",
        "Shimano SLX 12-speed",
        "Hydraulic disc brakes",
        "27.5\" wheels",
        "Integrated trail map display",
      ],
      isFeatured: false,
      inStock: true,
    },

    // Cargo Bikes
    {
      name: "VoltRide Cargo Max",
      slug: "voltride-cargo-max",
      categoryId: cargo.id,
      price: "4299.00",
      rangeKm: 80,
      topSpeedKph: 25,
      motorWatts: 750,
      batteryCapacityWh: 756,
      weightKg: "38.0",
      shortDescription: "The electric workhorse that replaces your car for family and business.",
      description: "The Cargo Max is built for heavy duty. With a payload capacity of 200kg, it comfortably carries two children in the front box, a week's worth of groceries, or business deliveries. A powerful 750W motor with 90Nm torque makes even fully loaded starts effortless. The 756Wh battery paired with a range extender option provides up to 160km range.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "750W Bafang M620 ultra motor (90Nm)",
        "756Wh battery + extender compatible",
        "200kg payload capacity",
        "Hydraulic disc brakes (203mm rotors)",
        "Integrated child seat mounts",
        "Weatherproof cargo box",
        "Reverse assist function",
      ],
      isFeatured: true,
      inStock: true,
    },
    {
      name: "VoltRide Cargo Compact",
      slug: "voltride-cargo-compact",
      categoryId: cargo.id,
      price: "2899.00",
      rangeKm: 100,
      topSpeedKph: 25,
      motorWatts: 500,
      batteryCapacityWh: 504,
      weightKg: "28.5",
      shortDescription: "The agile mid-tail cargo bike for urban errand-running.",
      description: "Not every cargo mission requires a long-john. The Cargo Compact is a mid-tail design that handles like a regular bike while carrying significantly more. A rear platform accommodates 80kg of luggage or a passenger. At 28.5kg it's nimble enough to fit through narrow bike lanes and standard doorways, making it the ideal city utility bike.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "500W mid-drive motor",
        "504Wh removable battery",
        "80kg rear platform capacity",
        "9-speed Shimano drivetrain",
        "Hydraulic disc brakes",
        "Kickstand included",
        "Pannier rack compatible",
      ],
      isFeatured: false,
      inStock: true,
    },
    {
      name: "VoltRide Delivery Pro",
      slug: "voltride-delivery-pro",
      categoryId: cargo.id,
      price: "3499.00",
      rangeKm: 120,
      topSpeedKph: 25,
      motorWatts: 750,
      batteryCapacityWh: 630,
      weightKg: "32.0",
      shortDescription: "Built for last-mile delivery with long range and massive cargo capacity.",
      description: "Designed with logistics businesses in mind, the Delivery Pro prioritizes range, durability, and cargo volume. The reinforced rear frame supports a lockable aluminum cargo box (110L volume). A 630Wh battery with smart charging reaches 80% in under 2 hours. Real-time GPS tracking and fleet management integration make it the go-to choice for delivery fleets.",
      imageUrl: null,
      galleryUrls: [],
      features: [
        "750W rear-hub motor",
        "630Wh smart-charging battery",
        "110L lockable aluminum cargo box",
        "GPS tracker + fleet management API",
        "Anti-theft alarm",
        "Full fender set",
        "Dynamo-powered LED lights",
      ],
      isFeatured: false,
      inStock: true,
    },
  ]);

  console.log("Bikes seeded successfully!");
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
