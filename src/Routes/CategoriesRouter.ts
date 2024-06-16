import { Router } from "express";
import { addCategories, getCategories } from "../Controllers/CategoriesController";

const   CategoriesRouter = Router()

CategoriesRouter.post("",addCategories)
CategoriesRouter.get("", getCategories)

export default CategoriesRouter