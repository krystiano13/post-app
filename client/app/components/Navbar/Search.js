'use client'

import {Input} from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";

export function Search() {
    const globalContext = useGlobalContext();

    async function handleSubmit(e) {
        e.preventDefault();
        await fetch(`http://127.0.0.1:8000/api/posts/search/${e.target[0].value}`)
            .then(res => res.json())
            .then(dat => {
                if(dat.status) {
                    globalContext.setSearch(dat.data);
                    globalContext.setIsSearch(true);
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="md:w-1/3 w-1/2 flex items-center justify-center" id="searchBar">
            <Input name="search" type="text" placeholder="Search ..."/>
        </form>
    )
}