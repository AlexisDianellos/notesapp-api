import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const port = env.PORT;

mongoose.connect(env.MONGODB_CONNNECTION)
  .then(()=>{
    console.log("mongoose connected");
    app.listen(port!, ()=>{
      console.log('Server running on port '+port)
    });
  })
  .catch(console.error);

