import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

export const ShopContext = createContext();


const ShopContextProvider = ({children}) => {

    const currency = "$";
    const delivery_fee = 10;
    const[search, setSearch] = useState("");
    const[showSearch, setShowSearch] = useState(false);
    const[cartItems, setCartItems] = useState({});
    const navigate = useNavigate();

    //add to cart
    const addToCart = (itemId,size) => {

        if(!size){
            toast.error("Select Product Size");
            return;
        }

        //deep copy of cartItems state variable
       let cartData = structuredClone(cartItems);

       if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size]+=1;
            }
            else{
                cartData[itemId][size] = 1;
            }
       }
       else{
        cartData[itemId] = {};
        cartData[itemId][size] = 1;
       }
       //then finally updating the cartItems
       setCartItems(cartData);
    }

    //get the cart count
    const getCartCount  = () => {
        let totalCount = 0;
        for(let itemId in cartItems){
            for(let size in cartItems[itemId]){
                totalCount+= cartItems[itemId][size];
            }
        }
        return totalCount;
    }
    
    //update quantitiy
    const updateQuantitiy =(itemId,size,quantity) => {

        let cartData = structuredClone(cartItems);

        if(quantity > 0){
            cartData[itemId][size] = quantity;
        }else{
            delete cartData[itemId][size];
        }

        //cleanup if no sizes left
        if(Object.keys(cartData[itemId]).length == 0){
            delete cartData[itemId]
        }

        setCartItems(cartData);
    }

    //cart amount
    const getCartAmount = () => {
        let totalAmount = 0;

        for(let itemId in cartItems){
            let product = products.find((p) => p._id === itemId);
            if(product){
                for(let size in cartItems[itemId]){
                    const quantity = cartItems[itemId][size];
                    totalAmount += quantity * product.price;
                }
            }
        }

        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantitiy,
        getCartAmount,
        navigate
    }

    return (
         <ShopContext.Provider value={value}>
                {children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;