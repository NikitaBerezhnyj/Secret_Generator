import express, { Express } from "express";
import cors from "cors";
import routes from "../routes/mainRoutes";

const createServer = (): Express => {
  const app = express();

  const requiredEnvVars: string[] = ["PORT", "HOSTNAME"];

  const missingVars: string[] = requiredEnvVars.filter(
    key => !process.env[key]
  );

  if (missingVars.length > 0) {
    console.error(
      `Missing necessary environment variables: ${missingVars.join(", ")}`
    );
    process.exit(1);
  }

  app.use(cors({ origin: "*" }));
  app.use(express.json());

  app.use("/api", routes);

  app.use("/uploads", express.static("uploads"));

  return app;
};

export default createServer;
