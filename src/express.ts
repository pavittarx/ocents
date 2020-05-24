import express from "express";
import compression from "compression";
import cookieParser from "cookie-parser";
const app = express();

app.use(compression());
app.use(cookieParser());

export default app;
