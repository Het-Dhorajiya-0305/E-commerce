import { createContext, useState } from "react";


export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {

    const [menu, setmenu] = useState("");
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