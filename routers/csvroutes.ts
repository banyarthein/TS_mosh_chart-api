import { Router } from "express";

const router = Router();

router.get("/:filename", (req, res) => {
  const rootdirArr: string[] = __dirname.split("\\");
  rootdirArr.pop();
  const rootDir = rootdirArr.join("\\");
  console.log("rootdir path", rootDir);
  const file = `${rootDir}\\data\\${req.params.filename}`;
  console.log("Downloading file", file);
  res.download(file);
  //res.status(202).send();
});

export default router;
