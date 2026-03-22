import { Router, type IRouter } from "express";
import { db } from "@workspace/db";
import { inquiriesTable } from "@workspace/db/schema";
import { CreateInquiryBody } from "@workspace/api-zod";

const router: IRouter = Router();

router.post("/inquiries", async (req, res) => {
  try {
    const parsed = CreateInquiryBody.safeParse(req.body);

    if (!parsed.success) {
      res.status(400).json({
        error: "validation_error",
        message: parsed.error.message,
      });
      return;
    }

    const data = parsed.data;

    const [inquiry] = await db
      .insert(inquiriesTable)
      .values({
        name: data.name,
        email: data.email,
        phone: data.phone ?? null,
        bikeId: data.bikeId ?? null,
        inquiryType: data.inquiryType,
        message: data.message,
      })
      .returning();

    res.status(201).json(inquiry);
  } catch (err) {
    req.log.error({ err }, "Failed to create inquiry");
    res.status(500).json({ error: "internal_error", message: "Failed to save inquiry" });
  }
});

export default router;
