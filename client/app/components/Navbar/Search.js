'use client'

import { Input, Button } from "@chakra-ui/react";

export function Search() {
    function handleSubmit(e) {
        e.preventDefault();
        window.location.href = `/?text=${e.target[0].value}`;
    }

    return (
        <form onSubmit={handleSubmit} className="md:w-1/3 w-1/2 flex items-center justify-center" id="searchBar">
            <Input name="search" type="text" placeholder="Search ..."/>
            <Button type="submit">Search</Button>
        </form>
    )
}