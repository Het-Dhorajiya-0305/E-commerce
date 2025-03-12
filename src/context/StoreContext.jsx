import { createContext, useState } from "react";
import { TbUserEdit } from "react-icons/tb";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [menu, setmenu] = useState("home");
    const [showmenu, setShowmenu] = useState(false);

    const contexValue = {
        menu, setmenu,showmenu,setShowmenu
    }

    return (
        <StoreContext.Provider value={contexValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;