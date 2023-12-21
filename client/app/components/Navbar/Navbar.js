import {Input, Heading } from "@chakra-ui/react";
import Link from "next/link";

//components
import {NavbarAccount} from "@/app/components/Navbar/NavbarAccount";

export function Navbar() {
    return (
        <nav className="flex z-50 p-2 items-center justify-between w-full h-[4rem] fixed border-b-2 border-b-solid border-b-blue-300 border-opacity-40 bg-bl">
            <div className="md:w-1/3 w-1/5 flex items-center justify-start" id="logo">
                <Link href="/">
                    <Heading as="h1" size="sm">
                        <span className="text-[0.85rem] md:text-[1.25rem]">POST APP</span>
                    </Heading>
                </Link>
            </div>
            <div className="md:w-1/3 w-1/2 flex items-center justify-center" id="searchBar">
                <Input name="search" type="text" placeholder="Search ..." />
            </div>
            <NavbarAccount />
        </nav>
    )
}