import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
import cors from "cors";

const app = express()

app.use(cookieParser())
app.use(express.json())

app.use(cors({
    credentials : true,
    origin : "http://localhost:5173"
}))

app.get('/' , (req : Request , res : Response)=>{

})