'use client'

import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useState } from 'react';

export function CreatePost() {
    const [logged,setLogged] = useState(true);
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