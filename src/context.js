import { createContext, useContext, useState } from "react";
const AppContext = createContext()

const AppProvider = ({children}) => {
    const [isMenuOpen, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(prev => !prev)
    }
    const data = {
        isMenuOpen, setMenu,
        toggleMenu
    }
    return (
        <AppContext.Provider value={data}>
            { children }
        </AppContext.Provider>
    )
}

const useGlobalContext =() => {
    return useContext(AppContext)
}
export {AppProvider, useGlobalContext}
