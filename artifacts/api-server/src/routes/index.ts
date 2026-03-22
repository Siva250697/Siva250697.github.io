import { Router, type IRouter } from "express";
import healthRouter from "./health";
import categoriesRouter from "./categories";
import bikesRouter from "./bikes";
import inquiriesRouter from "./inquiries";

const router: IRouter = Router();

router.use(healthRouter);
router.use(categoriesRouter);
router.use(bikesRouter);
router.use(inquiriesRouter);

export default router;
