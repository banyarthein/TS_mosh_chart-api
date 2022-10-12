import express, { Application } from "express";
import chartRouters from "./routers/chartrouter";
import csvRouters from "./routers/csvroutes";

const PORT = 8000;
const HOST_NAME = "react.localhost.com";

const app = express();

const rootdir: string = __dirname;

app.use(express.json());

//Added for CORS issue.
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  //res.setHeader("Access-Control-Allow-Credentials", "true");

  // Pass to next layer of middleware
  next();
});

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
