import { Router } from "express";
import ReportRouter from "./reports";

const router = Router();

router.use("/reports", ReportRouter);

export default router;
