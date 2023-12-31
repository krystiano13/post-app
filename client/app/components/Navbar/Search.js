'use client'

import { Input, Button } from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";

export function Search() {
    const globalContext = useGlobalContext();

    async function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} className="md:w-1/3 w-1/2 flex items-center justify-center" id="searchBar">
            <Input name="search" type="text" placeholder="Search ..."/>
            <Button type="submit">Search</Button>
        </form>
    )
}