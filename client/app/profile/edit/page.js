'use client'
import { useGlobalContext } from "@/app/Context/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


export default function EditProfile() {
    const globalContext = useGlobalContext();
    const router = useRouter();

    useEffect(() => {
        if(globalContext.logged === false) {
            router.push('/');
        }
    },[]);

    return (
        <></>
    )
}