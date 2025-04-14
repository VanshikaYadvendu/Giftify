
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)
const StoreContextProvider = (props)=>{

    const [cartItems,setCartItem] = useState({});

    const url = "http://localhost:4000";

    const[token,setToken] = useState("");
    const[food_list,setFoodList] = useState([]);

    const addToCart = (itemId)=>{
        console.log(itemId);
        
        if(!cartItems[itemId]){
            setCartItem((prev)=>({...prev,[itemId]:1}));
        }
        else{
            setCartItem((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        }
    }


    const getTotalCartAmount =()=>{
        let totalAmount =0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = food_list.find((product)=>product.id===item)
                totalAmount +=itemInfo.price*cartItems[item]
            }
           
        }
        return totalAmount;
    }




    const removeFromCart = (itemId)=> {
        setCartItem((prev)=> ({...prev,[itemId]:prev[itemId]-1}))
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"))
        }

    },[])
    const contextValue = {
        food_list,
        cartItems,
        setCartItem,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return(
        <StoreContext.Provider value = {contextValue}>
            {props.children}
        </StoreContext.Provider>

    )
}
export default StoreContextProvider;
