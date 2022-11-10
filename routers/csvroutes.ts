import { Router } from "express";

const router = Router();

router.get("/:filename", (req, res) => {
  let delimiter: string = "\\";

  if (__dirname.startsWith("/usr")) {
    delimiter = "/";
  }

  const rootdirArr: string[] = __dirname.split(delimiter);
  rootdirArr.pop();
  const rootDir = rootdirArr.join(delimiter);
  console.log("rootdir path", rootDir);
  const file = `${rootDir}${delimiter}data${delimiter}${req.params.filename}`;
  console.log("Downloading file", file);
  res.download(file);
  //res.status(202).send();
});

export default router;
