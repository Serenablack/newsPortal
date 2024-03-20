import express from "express";
import { authenticate } from "../utils/auth/authenticate";
import {
  createSingleNews,
  // deleteNews,
  getAllNews,
  getAllNewsByCategoryFilter,
  getSingleNews,
  // updateNews,
} from "../controllers/News";

const newsRouter = express.Router();

newsRouter.get("/", getAllNews);
newsRouter.get("/:id", getSingleNews);
newsRouter.post("/", authenticate, createSingleNews);
// newsRouter.put("/:id", authenticate, updateNews);
// newsRouter.delete("/:id", authenticate, deleteNews);
newsRouter.get("/:status/:categoryId", getAllNewsByCategoryFilter);

export default newsRouter;
