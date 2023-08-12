// Create web server

// Import modules
import express from "express";
import cors from "cors";

// Import controllers
import {
  getComments,
  getComment,
  createComment,
  updateComment,
  deleteComment,
} from "../controllers/comments.js";

// Create router
const router = express.Router();

// Use middleware
router.use(cors());

// Create routes
router.get("/", getComments);
router.get("/:id", getComment);
router.post("/", createComment);
router.patch("/:id", updateComment);
router.delete("/:id", deleteComment);

// Export router
export default router;