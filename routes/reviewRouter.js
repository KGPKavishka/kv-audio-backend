import express from "express";
import { addReview } from "../controllers/reviewController.js";
import { getReviews } from "../controllers/reviewController.js";

const reviewRouter = express.Router();
reviewRouter.post("/",addReview);
reviewRouter.get("/",getReviews);

export default reviewRouter;
