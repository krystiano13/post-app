import { Button, Input, Heading, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import Link from "next/link";

export function Navbar() {
    return (
        <nav className="flex p-2 items-center justify-between w-full h-[4rem] fixed border-b-2 border-b-solid border-b-blue-300 border-opacity-40 bg-blue-400 bg-opacity-10">
            <div className="md:w-1/3 w-1/5 flex items-center justify-start" id="logo">
                <Heading as="h1" size="sm">
                    <span className="text-[0.85rem] md:text-[1.25rem]">POST APP</span>
                </Heading>
            </div>
            <div className="md:w-1/3 w-1/2 flex items-center justify-center" id="searchBar">
                <Input name="search" type="text" placeholder="Search ..." />
            </div>
            <div id="buttons" className="h-full w-1/3 justify-end items-center hidden md:flex">
                <Link href="/login">
                    <Button colorScheme="blue" className="ml-1 mr-1">Log In</Button>
                </Link>
                <Link href="/register">
                    <Button colorScheme="gray" className="ml-1 mr-1">Create Account</Button>
                </Link>
            </div>
            <div className="md:hidden w-1/4 flex items-center justify-end">
                <Menu>
                    <MenuButton as={Button}>
                       <span className="text-[0.8rem] md:text-[1rem]">Account</span>
                    </MenuButton>
                    <MenuList>
                        <Link href="/login">
                            <MenuItem>Log In</MenuItem>
                        </Link>
                        <Link href="/register">
                            <MenuItem>Create Account</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </div>
        </nav>
    )
}