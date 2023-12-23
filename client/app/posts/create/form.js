'use client'

import { Button, FormLabel, Input, Textarea } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {useGlobalContext} from "@/app/Context/store";
import { useTransition } from 'react'

export function Form() {
    const toast = useToast();
    const router = useRouter();
    const globalContext = useGlobalContext();

    const [block, setBlock] = useState(false);
    const [isPending, startTransition] = useTransition();

    async function handleSubmit(e) {
        e.preventDefault();
        if(block) return;

        const data = new FormData(e.target);
        data.append('username',globalContext.username);

        await fetch(
            'http://127.0.0.1:8000/api/posts/store',
            {
                method: "POST",
                headers: {
                    Authorization: `
                    Bearer ${localStorage.getItem('token')}
                `
                },
                body : data
            }
        )
            .then(res => res.json())
            .then(data => {
                if(data.message) {
                    toast({
                        title: "Your session has expired",
                        status: "error",
                        isClosable: true
                    })
                }
                else {
                    toast({
                        title: "Post created",
                        status: "success",
                        isClosable: true
                    });
                    setBlock(true);
                    setTimeout(() => {
                        startTransition(() => router.push('/'));
                        startTransition(() => router.refresh());
                    },500);
                }
            })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-start max-w-full w-full">
            <FormLabel className="w-full pl-1.5 mt-6">Title</FormLabel>
            <Input className="w-full" name="title" required type="text"/>
            <FormLabel className="w-full pl-1.5 mt-6">Content</FormLabel>
            <Textarea className="w-full min-h-[15rem] h-[15rem] max-h-[15rem]" name="content" required type="password"/>
            <Button colorScheme={"blue"} className="w-full mt-6" type="submit">Create Post</Button>
        </form>
    )
}