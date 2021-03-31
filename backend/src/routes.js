import { Router } from "express";

const routes = Router();

routes.get("/", (_req, res) => {
  res.send("Servidor ta on");
});

export default routes;
