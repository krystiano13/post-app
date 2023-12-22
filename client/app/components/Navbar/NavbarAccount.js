'use client'

import Link from "next/link";
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import { useState, useEffect } from 'react';

export function NavbarAccount() {
    const [logged, setLogged] = useState(false);

    useEffect(() => {

    },[localStorage.getItem('token')])

    return (
        <>
            {
                logged && <>
                    <div className="md:w-1/3 w-1/4 flex items-center justify-end">
                        <Menu>
                            <MenuButton as={Button}>
                                <span className="text-[0.8rem] md:text-[1rem]">Admin</span>
                            </MenuButton>
                            <MenuList>
                                <Link href="/profile">
                                    <MenuItem>Profile</MenuItem>
                                </Link>
                                <Link href="/logout">
                                    <MenuItem>Logout</MenuItem>
                                </Link>
                            </MenuList>
                        </Menu>
                    </div>
                </>
            }
            {
                !logged && <>
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
                </>
            }
        </>
    )
}