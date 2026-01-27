import express from 'express';
import { addInquiry } from '../controllers/inquiryController.js';
import { getInquiries } from '../controllers/inquiryController.js';
import { deleteInquiry } from '../controllers/inquiryController.js';
import { updateInquiry } from '../controllers/inquiryController.js';

const inquiryRouter = express.Router();

inquiryRouter.post("/", addInquiry);
inquiryRouter.get("/", getInquiries);
inquiryRouter.delete("/:id", deleteInquiry);
inquiryRouter.put("/:id", updateInquiry);

export default inquiryRouter;