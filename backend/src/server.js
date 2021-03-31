import express from "express";
import cors from "cors";
import routes from "./routes";
import "dotenv";

const app = express();
const PORT = process.env.PORT || 8001;
const CORS_ROUTES = "*";

app.use(express.json());
app.use(cors(CORS_ROUTES));
app.use(routes);

app.listen(PORT);
