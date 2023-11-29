import React, { createContext, useContext, useState } from 'react'

const PartaiContext = createContext();

export const PartaiProvider = ({ children }) => {
    const [partai, setPartai] = useState([]);

    const updatePartaiList = (newPartai) => {
        setPartai(newPartai);
    }

    return (
        <PartaiContext.Provider value={{ partai, updatePartaiList }}>
            { children }
        </PartaiContext.Provider>
    )
}

export const usePartaiContext = () => {
    return useContext(PartaiContext);
}