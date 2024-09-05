import "dotenv/config";
import express,{NextFunction, Request, Response} from "express";
import notesRoutes from "./routes/notes";
import userRoutes from "./routes/users";
import morgan from "morgan";
import createHttpError,{isHttpError} from "http-errors";
import session from "express-session";
import env from "./util/validateEnv";
import MongoStore from "connect-mongo";
import { requiresAuth } from "./middleware/auth";
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.set('trust proxy', 1);

app.use(cors({
  origin: 'http://localhost:3000', // Replace with your frontend URL
  credentials: true,
}));

app.use(morgan("dev"));

app.use(express.json());//so we can send json to server
app.use(cookieParser());

app.use(session({
  secret: env.SESSION_SECRET,
  resave:false,
  saveUninitialized:false,
  cookie:{
    maxAge:60*60*1000,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  },
  rolling:true,
  store:MongoStore.create({
    mongoUrl: env.MONGODB_CONNECTION,
  })
}));

app.use("/api/notes",requiresAuth,notesRoutes);
app.use("/api/users", userRoutes);

app.use((req,res,next)=>{
  next(createHttpError(404 ,"Endpoint not found"));
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error:unknown, req:Request, res:Response, next:NextFunction)=>{
  console.error(error);
    let errorMessage="Unkown error occured";
    let statusCode = 500;
    if (isHttpError(error)) {
      statusCode = error.status;
      errorMessage = error.message;
    }
    res.status(statusCode).json({error : errorMessage});
});

export default app;