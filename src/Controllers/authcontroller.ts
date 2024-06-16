import {Request,Response,RequestHandler} from 'express'
import {v4 as uid}from 'uuid'
import { sqlConfig } from '../Config'
import { RegisterSchema } from '../Helpers'
import Bcrypt from 'bcrypt'
// import {idText} from 'typescript'
import {Payload,  User} from '../Models/AuthModels'
import jwt  from 'jsonwebtoken'
import mssql from 'mssql'
import path from 'path'
import { ExtendedRequest1 } from '../middlewares'
import dotenv from 'dotenv'
dotenv.config({path:path.resolve(__dirname,"../../.env")})


export const registerUser =async(req:Request, res: Response)=>{
    try {
    const id = uid()
    const {Name, Email, password}=req.body
    const{error} = RegisterSchema.validate (req.body)

    if(error){
        return res.status(400).json(error.details[0].message)
    }
     const Hashpassword = await Bcrypt.hash(password,10)
     let pool =await mssql.connect(sqlConfig)
     await pool.request()
     .input("Id",id)
     .input("Name",Name)
     .input("Email",Email)
     .input("Password",Hashpassword)
     .execute('addUser')


     return res.status(201).json({ message: "User registered successfully" });
     
    } catch (error) {
        return res.status(500).json(error)
        
    }
}
export const loginUser = async(req:Request,res:Response)=>{
    try {
    const { Email,Password}=req.body
    let pool =await mssql.connect(sqlConfig)
    let user =(await pool.request()
    .input('Email',Email)
    .execute('getuser')).recordset as User[]
   
        if (user.length! ==0) {
            const isValid =await Bcrypt.compare(Password,user[0].Password)
                
            if(isValid){
                    const payload:Payload={
                        Sub:user[0].Id,
                        Name:user[0].Name
                    }
                    const token = jwt.sign(payload,process.env.SECRET as string, {expiresIn:'2h'} )
                    return res.status(200).json({message:"Login success"})
                }        
            
        }
        return res.status(400).json({message:"invalid credentials"})
        
    } catch (error) {
        
    }


    
}
export const welcomePage=(req:ExtendedRequest1, res:Response)=>{
    try {
      res.status(200).send(`<h1> Welcome ${req.info?.Name} </h1>`)  
    } catch (error) {
        
    }
}

