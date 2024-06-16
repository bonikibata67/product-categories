import {Request,Response,RequestHandler} from 'express'
import {v4 as uid}from 'uuid'
import { sqlConfig } from '../Config'
import { ProductCategory, ProductCategoryRequest } from '../Models/ProducrCategoryModels'
import mssql from 'mssql'


export const addProductCategory=async(req:ProductCategoryRequest, res:Response)=>{
    try {
        
        //id 
        const id =uid()
        const {TITLE}= req.body
        //make request to DB
        //connection
        const pool= await mssql.connect(sqlConfig)
        //make a request
        await pool.request()
        .input("Id",id)
        .input("TITLE",TITLE)
        .execute('addProductCategory')

        res.status(201).json({message:"ProductCategory Created"})

    } catch (error) {
        
        res.status(500).json(error)
    }
}

export const getProductCategories:RequestHandler= async(req,res)=>{
try {
    const pool= await mssql.connect(sqlConfig)
    //make a request
    const products=(await pool.request().execute('getProductCategories')).recordset as ProductCategory[]
    res.status(200).json(products)
} catch (error) {
    res.status(500).json(error)
}
}
export const getProductCategory= async(req:Request<{id:string}>,res:Response)=>{
    try {
        const pool= await mssql.connect(sqlConfig)
        //make a request
        const product=(await pool.request()
        .input("Id",req.params.id)
        .execute('getProductCategory')).recordset[0] as ProductCategory

        if(product && product.Id){
            return res.status(200).json(product)
        }

        return res.status(404).json({message:"ProductCategory Not Found"})

    } catch (error) {
        res.status(500).json(error)
    }
    }
