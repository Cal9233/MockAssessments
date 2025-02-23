import React, {useState, useContext, createContext} from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [typeValue, setTypeValue] = useState("");

    const handleSidebarOpen = () => {
        console.log("Button toggle hit")
        setIsOpen(prev => !prev);
    }

    const handleTypeChange = (e) => {
        setTypeValue(e.target.value);
    }

    const value = {
        isOpen,
        setIsOpen,
        handleSidebarOpen,
        typeValue,
        handleTypeChange
    }
    
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = useContext(AppContext);
    if(!context) throw new Error("useAppContext must be used within a AppContextProvider");
    return context
}