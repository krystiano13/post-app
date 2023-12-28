'use client'

import { Heading, Text, Divider, Button } from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import { deleteComment } from "@/app/components/Comments/functions/deleteComment";

export function SingleComment({ username, date, text, commentId }) {
    const context = useGlobalContext();
    return (
        <section id="comment" className="w-full p-4">
            <Heading className="text-start flex items-center">
                <span className="text-[1.5rem]">
                    { username }
                </span>
                <span className="ml-2 text-[1rem] font-regular opacity-75">
                    { date }
                </span>
            </Heading>
            <Text className="mt-2">
                { text }
            </Text>
            <Divider className="mt-4" />
            {
                context.logged && context.username === username && <>
                    <Button className="mt-4">Edit</Button>
                    <Button onClick={(e) => {
                        deleteComment(e, commentId, username);
                    }} className="ml-2 mt-4">Delete</Button>
                </>
            }
        </section>
    )
}