'use client'

import {Button, Card, Heading, Textarea} from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import { useToast } from "@chakra-ui/react";
import { useEffect } from "react";

export function CommentsForm({ postId }) {
    const globalContext = useGlobalContext();
    const toast = useToast();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append("username", globalContext.username);
        data.append("post_id", postId);

        await fetch('http://127.0.0.1:8000/api/comments/store', {
            method: "POST",
            headers: {
                Authorization: `
                    Bearer ${localStorage.getItem('token')}
                `
            },
            body: data
        })
            .then(res => res.json())
            .then(data => {
                if(data.status === false) {
                    toast({
                        status: "error",
                        title: "Cannot create comment :(",
                        isClosable: true
                    });
                }
                else {
                    window.location.reload();
                }
            })
    }

    return (
        <>
            {
                globalContext.logged &&
                <Card variant="unstyled" className="lg:w-1/2 md:w-3/4 w-[80%] mt-6">
                    <form onSubmit={handleSubmit}>
                        <Heading>
                            <span className="text-[1.6rem]">
                                Comment as { globalContext.username }
                            </span>
                        </Heading>
                        <Textarea name="text" size="lg" className="mt-6 max-h-[15rem] min-h-[15rem] h-[100%]" />
                        <Button className="mt-6" type="submit">Send Comment</Button>
                    </form>
                </Card>
            }
        </>
    )
}