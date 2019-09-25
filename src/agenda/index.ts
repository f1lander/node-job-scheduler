import Agenda from "agenda";
import { SendDailyReport } from "./jobs";
const mongoConnectionString = process.env.MONGO_CONNECTION;

const connectionOpts = {
  db: { address: mongoConnectionString, collection: "jobs" }
};

const agenda = new Agenda(connectionOpts);
// const jobTypes = process.env.JOB_TYPES ? process.env.JOB_TYPES.split(",") : [];

agenda.define("SEND_DAILY_CHECK-INS_REPORT", SendDailyReport);

const graceful = () => {
  agenda.stop().then(() => process.exit(0));
};

process.on("SIGTERM", graceful);
process.on("SIGINT", graceful);

export default agenda;
