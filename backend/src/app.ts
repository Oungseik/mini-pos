import express from "express";
import cookieParser from "cookie-parser";
import helmet from "helmet";
import cors from "cors";
import path from "path";

import { authenticator } from "./middlewares/authentication";

import signinRouter from "./routers/signin.router";
import productsRouter from "./routers/products.router";

const app = express();

app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));

app.get("/health", (_, res) => {
  res.send("server is up and running.")
})

app.use("/signin", signinRouter);

app.use(authenticator);
app.use("/api/products", productsRouter);



export default app;
