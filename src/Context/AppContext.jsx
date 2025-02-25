import React, {useState, useContext, createContext} from 'react'

export const AppContext = createContext();

export const AppContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [typeValue, setTypeValue] = useState({
        name: "",
        email: ""
    });

    const handleSidebarOpen = () => {
        setIsOpen(prev => !prev);
    }

    const handleTypeChange = (e) => {
        setTypeValue(e.target.value);
    }

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    }
    

    const value = {
        isOpen,
        setIsOpen,
        handleSidebarOpen,
        typeValue,
        handleTypeChange,
        isModalOpen,
        setIsModalOpen,
        handleModalOpen,
        handleModalClose
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