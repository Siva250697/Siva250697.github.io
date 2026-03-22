import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { bikesTable, categoriesTable } from "@workspace/db/schema";
import { eq, and, gte, lte } from "drizzle-orm";

const router: IRouter = Router();

router.get("/bikes", async (req, res) => {
  try {
    const { categoryId, minPrice, maxPrice, featured } = req.query;

    const conditions = [];

    if (categoryId) {
      conditions.push(eq(bikesTable.categoryId, Number(categoryId)));
    }

    if (minPrice) {
      conditions.push(gte(bikesTable.price, String(minPrice)));
    }

    if (maxPrice) {
      conditions.push(lte(bikesTable.price, String(maxPrice)));
    }

    if (featured === "true") {
      conditions.push(eq(bikesTable.isFeatured, true));
    }

    const bikeRows = await db
      .select({
        bike: bikesTable,
        category: categoriesTable,
      })
      .from(bikesTable)
      .leftJoin(categoriesTable, eq(bikesTable.categoryId, categoriesTable.id))
      .where(conditions.length > 0 ? and(...conditions) : undefined)
      .orderBy(bikesTable.name);

    const bikes = bikeRows.map(({ bike, category }) => ({
      ...bike,
      price: Number(bike.price),
      weightKg: Number(bike.weightKg),
      category: category!,
    }));

    res.json(bikes);
  } catch (err) {
    req.log.error({ err }, "Failed to list bikes");
    res.status(500).json({ error: "internal_error", message: "Failed to retrieve bikes" });
  }
});

router.get("/bikes/:id", async (req, res) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ error: "invalid_id", message: "ID must be a number" });
      return;
    }

    const rows = await db
      .select({
        bike: bikesTable,
        category: categoriesTable,
      })
      .from(bikesTable)
      .leftJoin(categoriesTable, eq(bikesTable.categoryId, categoriesTable.id))
      .where(eq(bikesTable.id, id))
      .limit(1);

    if (rows.length === 0) {
      res.status(404).json({ error: "not_found", message: "Bike not found" });
      return;
    }

    const { bike, category } = rows[0];
    res.json({
      ...bike,
      price: Number(bike.price),
      weightKg: Number(bike.weightKg),
      category: category!,
    });
  } catch (err) {
    req.log.error({ err }, "Failed to get bike");
    res.status(500).json({ error: "internal_error", message: "Failed to retrieve bike" });
  }
});

export default router;
