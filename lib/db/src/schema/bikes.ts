import {
  pgTable,
  serial,
  text,
  timestamp,
  integer,
  numeric,
  boolean,
  jsonb,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";
import { categoriesTable } from "./categories";

export const bikesTable = pgTable("bikes", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  categoryId: integer("category_id")
    .notNull()
    .references(() => categoriesTable.id),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  rangeKm: integer("range_km").notNull(),
  topSpeedKph: integer("top_speed_kph").notNull(),
  motorWatts: integer("motor_watts").notNull(),
  batteryCapacityWh: integer("battery_capacity_wh").notNull(),
  weightKg: numeric("weight_kg", { precision: 5, scale: 1 }).notNull(),
  description: text("description").notNull(),
  shortDescription: text("short_description").notNull(),
  imageUrl: text("image_url"),
  galleryUrls: jsonb("gallery_urls").$type<string[]>().default([]).notNull(),
  features: jsonb("features").$type<string[]>().default([]).notNull(),
  isFeatured: boolean("is_featured").default(false).notNull(),
  inStock: boolean("in_stock").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertBikeSchema = createInsertSchema(bikesTable).omit({
  id: true,
  createdAt: true,
});
export type InsertBike = z.infer<typeof insertBikeSchema>;
export type Bike = typeof bikesTable.$inferSelect;
