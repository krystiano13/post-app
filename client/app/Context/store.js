'use client'

import { createContext, useContext, useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const GlobalContext = createContext({
    logged: false,
    username: "Admin",
    setLogged: (prevState) => {},
    setUsername: (prevState) => {},
    setSearch: (prevState) => {},
    setIsSearch: (prevState) => {},
    search: "",
    isSearch: false
});

export function GlobalContextProvider({ children }) {
    const [logged, setLogged] = useState(false);
    const [username, setUsername] = useState("Admin");
    const [search, setSearch] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        if(!localStorage.getItem('token')) {
           setLogged(false);
        }

        fetch('http://127.0.0.1:8000/api/auth/getUser', {
            headers: {
                Authorization: `
                    Bearer ${localStorage.getItem('token')}
                `
            }
        })
            .then(res => res.json())
            .then(data => {
                if (!data.message) {
                    setLogged(true);
                    setUsername(localStorage.getItem('username'));
                } else {
                    setLogged(false);
                    localStorage.removeItem('token');
                    localStorage.removeItem("username");
                }
            })
    },[pathname]);

    return (
        <GlobalContext.Provider value={
            {
                logged,
                username,
                setLogged,
                setUsername,
                search,
                isSearch,
                setSearch,
                setIsSearch
            }
        }>
            {
                children
            }
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => useContext(GlobalContext);