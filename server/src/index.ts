import dotenv from "dotenv";
import connectionServer from "./config/serverConfig";

dotenv.config();

const app = connectionServer();

const host: string = process.env.HOSTNAME || "localhost";
const port: number = Number(process.env.PORT) || 3000;

const startServer = async (): Promise<void> => {
  try {
    app.listen(port, host, () => {
      console.log(`Server started on http://${host}:${port}`);
    });
  } catch (error) {
    console.error("Failed to start the server:", error);
    process.exit(1);
  }
};

startServer();
