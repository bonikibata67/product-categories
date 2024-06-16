import {Request,Response,RequestHandler} from 'express'
import {v4 as uid}from 'uuid'
import { sqlConfig } from '../Config'
import {Product, ProductRequest} from '../Models/ProductModels'
import mssql from 'mssql'

export const addProduct=async(req:ProductRequest, res:Response)=>{
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
        .execute('addProduct')

        res.status(201).json({message:"Product Created"})

    } catch (error) {
        
        res.status(500).json(error)
    }
}

export const getProducts:RequestHandler= async(req,res)=>{
try {
    const pool= await mssql.connect(sqlConfig)
    //make a request
    const products=(await pool.request().execute('getproducts')).recordset as Product[]
    res.status(200).json(products)
} catch (error) {
    res.status(500).json(error)
}
}


export const getProduct= async(req:Request<{id:string}>,res:Response)=>{
    try {
        const pool= await mssql.connect(sqlConfig)
        //make a request
        const product=(await pool.request()
        .input("Id",req.params.id)
        .execute('getProduct')).recordset[0] as Product

        if(product && product.Id){
            return res.status(200).json(product)
        }

        return res.status(404).json({message:"Product Not Found"})

    } catch (error) {
        res.status(500).json(error)
    }
    }

    
export const updateProduct= async(req:Request<{id:string}>,res:Response)=>{
    try {
        const pool= await mssql.connect(sqlConfig)
        const {TITLE} =req.body
       
        //make a request
        const product=(await pool.request()
        .input("Id",req.params.id)
        .execute('updateProduct')).recordset[0] as Product

        if(product && product.Id){
            //update 
            await pool.request()
            .input('Id',req.params.id)
            .input('TITLE',TITLE)
            .execute('updateProduct')
            return res.status(200).json({message:"Product updated "})

        }

        return res.status(404).json({message:"Product Not Found"})

    } catch (error) {
        res.status(500).json(error)
    }
    }


    export const deleteProduct= async(req:Request<{id:string}>,res:Response)=>{
        try {
            const pool= await mssql.connect(sqlConfig)
            //make a request
            const product=(await pool.request()
            .input("Id",req.params.id)
            .execute('deleteProduct')).recordset[0] as Product
    
            if(product && product.Id){

                await pool.request()
                .input('Id', req.params.id)
                .execute('deleteProduct')
                return res.status(200).json({message:"Product Deleted "})
            }
    
            return res.status(404).json({message:"Product Not Found"})
    
        } catch (error) {
            res.status(500).json(error)
        }
        }
    