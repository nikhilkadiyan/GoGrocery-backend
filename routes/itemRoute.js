import express from "express";
import { getAllItems } from "../controllers/itemController.js";

const itemRouter = express.Router();

itemRouter.get("/getAllItems", getAllItems);

export default itemRouter;
