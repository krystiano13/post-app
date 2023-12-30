'use client'

import Link from "next/link";
import {Button, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {useEffect, useState} from 'react';
import {usePathname, useRouter} from "next/navigation";
import { useGlobalContext } from "@/app/Context/store";

export function NavbarAccount() {
    const globalContext = useGlobalContext();

    function logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        window.location.reload();
    }

    useEffect(() => { console.log(globalContext.logged) },[])

    return (
        <>
            {
                (globalContext.logged === true) ? <>
                        <div className="md:w-1/3 w-1/4 flex items-center justify-end">
                            <Menu>
                                <MenuButton as={Button}>
                                    <span className="text-[0.7rem] md:text-[1rem]">{globalContext.username}</span>
                                </MenuButton>
                                <MenuList>
                                    <Link href={`/profile/${globalContext.username}`}>
                                        <MenuItem>Profile</MenuItem>
                                    </Link>
                                    <MenuItem onClick={logout}>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </div>
                    </> :
                    <>
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