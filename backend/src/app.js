import express from "express";
import cors from "cors";
import routes from "./routes";

const app = express();
const CORS_ROUTES = "*";

app.use(express.json());
app.use(cors(CORS_ROUTES));
app.use(routes);

module.exports = app;
