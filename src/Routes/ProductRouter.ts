import { Router } from "express";
import { addProduct, getProducts, getProduct, updateProduct, deleteProduct} from "../Controllers/ProductController";

const   ProductRouter = Router()

ProductRouter.post("",addProduct)
ProductRouter.get("", getProducts)
ProductRouter.get("/:id", getProduct)
ProductRouter.patch("/:id", updateProduct)
ProductRouter.delete("/:id", deleteProduct)
export default ProductRouter