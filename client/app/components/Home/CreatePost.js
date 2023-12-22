'use client'

import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import {usePathname} from "next/navigation";

export function CreatePost() {
    const [logged,setLogged] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname === '/') {
            if(!localStorage.getItem('token')) {
                setLogged(false);
                return;
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
                    } else {
                        setLogged(false);
                    }
                })
        }
    }, [pathname]);

    return (
        <>
            {
                logged &&
                <Link className="lg:w-1/2 md:w-3/4 w-[80%]" href="/posts/create">
                    <Button className="w-full">Create Post +</Button>
                </Link>
            }
        </>
    )
}