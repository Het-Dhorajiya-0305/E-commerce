import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [menu, setmenu] = useState("home");
    const [showmenu, setShowmenu] = useState(false);
    const [cartIteam, setCartIteam] = useState({});

    const addToCart = async (product) => {
        toast.error("product added");
        try {
            if (cartIteam.find((iteam) => iteam.id === product.id)) {
                setCartIteam([...cartIteam, cartIteam[cartIteam.find((iteam) => iteam.id === product.id)].quantity += product.quantity]);
            }
            else {
                setCartIteam([...cartIteam, product]);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        console.log(cartIteam)
    },[cartIteam]);

    const getCartCount = () => {
        let totalCount = 0;
        for (const iteams in cartIteam) {
            for (const iteam in cartIteam[iteams]) {
                try {
                    if (cartIteam[iteams][iteam] > 0) {
                        totalCount += cartIteam[iteams][iteam];
                    }
                } catch (error) {

                }
            }
        }
        return totalCount;
    }




    const contexValue = {
        menu, setmenu, showmenu, setShowmenu, addToCart, cartIteam, getCartCount
    }

    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;