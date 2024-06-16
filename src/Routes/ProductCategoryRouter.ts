import { Router } from "express";
import { addProductCategory, getProductCategories,getProductCategory} from "../Controllers/ProductCategory";
// import { addProduct, getProducts, getProduct, updateProduct, deleteProduct} from "../Controllers/ProductController";

const   ProductCategoryRouter = Router()

ProductCategoryRouter.post("",addProductCategory)
ProductCategoryRouter.get("", getProductCategories)
ProductCategoryRouter.get("/:id", getProductCategory)
// ProductCategoryRouter.patch("/:id", updateProduct)
// ProductCategoryRouter.delete("/:id", deleteProduct)
export default ProductCategoryRouter