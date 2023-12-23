'use client'
import { createContext, Dispatch, useContext, SetStateAction, useState } from "react";

const GlobalContext = createContext({
    logged: false,
});

export function GlobalContextProvider({ children }) {
    const [logged, setLogged] = useState(false);

    return (
        <GlobalContext.Provider value={{ logged: logged }}>
            {
                children
            }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = useContext(GlobalContext);