import dotenv from "dotenv";
import crypto from "crypto";
import { Request, Response } from "express";

dotenv.config();

export const jwtSecretGenerate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const jwtSecret = Array.from(
      crypto.getRandomValues(new Uint8Array(32)),
      byte => byte.toString(16).padStart(2, "0")
    ).join("");

    return res.status(200).send({ jwtSecret: jwtSecret });
  } catch (err) {
    console.error("Error generating JWT secret:", err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};

export const passwordGenerate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    const password = Array.from({ length: 12 }, () =>
      characters.charAt(Math.floor(Math.random() * characters.length))
    ).join("");

    return res.status(200).send({ password: password });
  } catch (err) {
    console.error("Error generating password:", err);
    return res.status(500).send({ message: "Internal Server Error" });
  }
};
