import express, { Application } from "express";
import chartRouters from "./routers/chartrouter";
import csvRouters from "./routers/csvroutes";

const PORT = 8000;
const HOST_NAME = "react.localhost.com";

const app = express();

const rootdir: string = __dirname;

app.use(express.json());

app.use("/charts", chartRouters);
app.use("/csv", csvRouters);

app.get("/", (req, res) => {
  res.send(`Welcome to typescript server from http://${HOST_NAME}:${PORT}`);
});

app.listen(PORT, HOST_NAME, () => {
  console.log(
    `Server is started now. Listening on http://${HOST_NAME}:${PORT}`
  );
});
