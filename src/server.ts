
import express,{json} from 'express'
import ProductRouter from './Routes/ProductRouter'
import CategoriesRouter from './Routes/CategoriesRouter'
import ProductCategoryRouter from './Routes/ProductCategoryRouter'
import authRouter from './Routes/AuthRouter'

const app = express()

//middlewares
app.use(json())

app.use("/products", ProductRouter)
app.use("/Categories",CategoriesRouter)
app.use("/ProductCategory",ProductCategoryRouter)
app.use("/auth",authRouter)


app.listen(4000, ()=>{ console.log("Server Running..")})