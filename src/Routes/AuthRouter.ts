import { Router } from "express";
import {registerUser,loginUser,welcomePage} from "../Controllers/authcontroller"
import { verifyToken } from "../middlewares";


const   authRouter = Router()

authRouter.post("/register",registerUser)
authRouter.post("/login", loginUser)
authRouter.get("",verifyToken, welcomePage)


export default  authRouter