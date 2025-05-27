import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [menu, setmenu] = useState("home");
    const [showmenu, setShowmenu] = useState(false);
    const [cartIteam,setCartIteam]=useState({});
    
    const addToCart=async (iteamId,size)=>{
        toast.error("product added");
        let cartData=structuredClone(cartIteam);
        if(cartData[iteamId])
        {
            if(cartData[iteamId][size])
            {
                cartData[iteamId][size]+=1;
            }
            else
            {
                cartData[iteamId][size]=1;
            }
        }
        else
        {
            cartData[iteamId]={};
            cartData[iteamId][size]=1;
        }

        setCartIteam(cartData);
    }

    const getCartCount=()=>{
        let totalCount=0;
        for(const iteams in cartIteam)
        {
            for(const iteam in cartIteam[iteams])
            {
                try {
                    if(cartIteam[iteams][iteam]>0)
                    {
                        totalCount+=cartIteam[iteams][iteam];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalCount;
    }

 


    const contexValue = {
        menu, setmenu,showmenu,setShowmenu,addToCart,cartIteam,getCartCount
    }

    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;