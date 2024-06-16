import { Request } from "express"

export interface ProductRequest extends Request{
body:{
    TITLE:string
}
}

export interface Product {
    Id:string
    TITLE:string
}



// import {Request} from 'express'

// export interface Product{
//     id:number
//     title:string
//     description:string
//     price:string
// }


// export interface AddProduct{

//     title:string
//     description:string
//     price:string
   
// }
// export interface TypedBody extends Request{

//     body:AddProduct
// }