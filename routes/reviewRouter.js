import express from "express";
import { addReview } from "../controllers/reviewController.js";
import { getReviews } from "../controllers/reviewController.js";
import { deleteReview } from "../controllers/reviewController.js";
import { approveReview } from "../controllers/reviewController.js";

const reviewRouter = express.Router();
reviewRouter.post("/",addReview);
reviewRouter.get("/",getReviews);
reviewRouter.delete("/:email",deleteReview);
reviewRouter.put("/approve/:email", approveReview);

export default reviewRouter;
