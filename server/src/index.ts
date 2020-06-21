import express from "express";
const app = express();
import server from "./apollo";

import compression from "compression";
import cookieParser from "cookie-parser";

app.use(compression());
app.use(cookieParser());

server.applyMiddleware({ app, path: "/api" });

app.listen({ port: process.env.PORT || 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);

export default app;
