import { Request } from "express"

export interface CategoriesRequest extends Request{
body:{
    NAME:string
}
}



export interface Categories{
    Id:string
    NAME:string
}