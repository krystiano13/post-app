'use client'

import Link from "next/link";
import { Button } from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";

export function CreatePost() {
    const globalContext = useGlobalContext();

    return (
        <>
            {
                globalContext.logged &&
                <Link className="lg:w-1/2 md:w-3/4 w-[80%]" href="/posts/create">
                    <Button className="w-full">Create Post +</Button>
                </Link>
            }
        </>
    )
}