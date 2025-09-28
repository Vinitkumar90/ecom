import express from "express"
import { addToCart, getUserCart, updateCart } from "../controllers/cartController"
import authUser from "../middleware/auth";

const cartRouter = express.Router();


cartRouter.post("/add",authUser,addToCart);
cartRouter.get("/get",authUser,getUserCart);
cartRouter.post("/update",authUser,updateCart)


export default cartRouter;