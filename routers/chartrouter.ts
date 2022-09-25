import { Router } from "express";
import fetch from "node-fetch";

const router = Router();

//const fetch = (...args: any) =>  import("node-fetch").then(({ default: fetch }) => fetch(args));

const getData = async (requestURL: string) => {
  const result = await (await fetch(requestURL)).text();
  console.log("Fetch Result is ", result);
  return result;
  //return "Test data";
};

router.get("/", async (req, res) => {
  //const result = await getData("https://jsonplaceholder.typicode.com/posts");
  //console.log(__dirname);
  //return;

  const result = await getData(
    "http://react.localhost.com:8000/csv/ZoneTemp.csv"
  );
  console.log("Return Result is ", result);
  res.send(result);
  //res.send("List of Charts.");
});

export default router;
