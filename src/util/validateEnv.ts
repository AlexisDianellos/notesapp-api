import { cleanEnv } from "envalid";
import { port,str } from "envalid";

export default cleanEnv(process.env,{
  MONGODB_CONNECTION:str(),
  PORT: port(),
  SESSION_SECRET: str(),
});