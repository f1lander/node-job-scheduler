import express from "express";
const app = express();
import dotEnv from "dotenv";
dotEnv.config();
import agenda from "./agenda";

import Agendash from "agendash";
const port = process.env.PORT || 3000;
// define a route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// agenda dash UI config
app.use("/dash", Agendash(agenda));

const run = async () => {
  await agenda.start();
  await agenda.schedule("1 minute", "SEND_DAILY_CHECK-INS_REPORT");
};
// start the Express server
app.listen(port, () => {
  // console.log(`server started at http://localhost:${port}`);
});

// app.use("/api", router);
run();
export { app };
