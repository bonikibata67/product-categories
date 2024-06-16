import { Request } from "express"

export interface ProductCategory {
    Id:string
    TITLE:string,   
    ProductId:string
    CategoriesId:string
}

interface AddProductCategory {
    TITLE:string,   
    ProductId:string
    CategoriesId:string
}

export interface ProductCategoryRequest extends Request{
    body:AddProductCategory
}