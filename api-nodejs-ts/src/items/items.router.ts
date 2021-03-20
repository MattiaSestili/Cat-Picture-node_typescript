/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import { ICatPicture, fetchRandomPicture } from "./items.service";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items

itemsRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: ICatPicture[] = await fetchRandomPicture();
    res.status(200).send(items);
  } catch (e) {
    res.status(500).send(e.message);
  }
});