'use client'

import Link from "next/link";
import { useGlobalContext } from "@/app/Context/store";
import { Button } from "@chakra-ui/react";

export function EditButton({ username }) {

    const globalContext = useGlobalContext();

    return (
        <>
            {
                (globalContext.logged && username === globalContext.username) &&
                <Link href="/profile/edit">
                    <Button className="mt-6 w-full">Edit Profile</Button>
                </Link>
            }
        </>
    )
}