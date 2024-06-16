import {Request,Response,RequestHandler} from 'express'
import {v4 as uid}from 'uuid'
import { sqlConfig } from '../Config'
import { Categories, CategoriesRequest } from '../Models/CategoriesModels'
import mssql from 'mssql'

export const addCategories=async(req:CategoriesRequest, res:Response)=>{
    try {
        
        //id 
        const id =uid()
        const {NAME}= req.body
        //make request to DB
        //connection
        const pool= await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input("Id",id)
        .input("NAME",NAME)
        .execute('addCategory')

        res.status(201).json({message:"Category Created"})

    } catch (error) {
        
        res.status(500).json(error)
    }
}

export const getCategories:RequestHandler= async(req,res)=>{
try {
    const pool= await mssql.connect(sqlConfig)
    //make a request
    const products=(await pool.request().execute('getCategory')).recordset as Categories[]
    res.status(200).json(products)
} catch (error) {
    res.status(500).json(error)
}
}