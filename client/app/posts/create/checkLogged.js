'use client'

import { useGlobalContext } from "@/app/Context/store";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';

export function LoginChecker() {
    const globalContext = useGlobalContext();
    const router = useRouter();

    useEffect(() => {
        if(!globalContext.logged) {
            router.push('/');
        }
    }, []);

    return <></>
}