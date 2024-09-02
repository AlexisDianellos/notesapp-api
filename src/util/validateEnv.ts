import { cleanEnv } from "envalid";
import { port,str } from "envalid";

export default cleanEnv(process.env,{
  MONGODB_CONNNECTION:str(),
  PORT: port(),
  SESSION_SECRET: str(),
});