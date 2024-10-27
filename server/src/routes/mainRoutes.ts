import { Router, Request, Response } from "express";
import {
  jwtSecretGenerate,
  passwordGenerate
} from "../controllers/mainController";

const router = Router();

router.get("/jwt-secret", (req: Request, res: Response) => {
  jwtSecretGenerate(req, res).catch(error => {
    console.error("Error in /register route:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  });
});

router.get("/password", (req: Request, res: Response) => {
  passwordGenerate(req, res).catch(error => {
    console.error("Error in /register route:", error);
    return res.status(500).send({ message: "Internal Server Error" });
  });
});

export default router;
