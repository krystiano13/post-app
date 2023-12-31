'use client'

import {Heading, Text, Divider, Button, Textarea} from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import { deleteComment } from "@/app/components/Comments/functions/deleteComment";
import { editComment } from "@/app/components/Comments/functions/editComment";
import { useToast } from "@chakra-ui/react";
import { useState } from 'react';
import {formatDate} from "@/app/components/Date/Date";
import Link from 'next/link';

export function SingleComment({ username, date, text, commentId }) {
    const context = useGlobalContext();
    const toast = useToast();

    const [editMode, setEditMode] = useState(false);

    return (
        <section id="comment" className="w-full p-4">
            <Heading className="text-start flex items-center">
                <span className="text-[1.5rem]">
                    <Link href={`/profile/${ username }`}>{ username }</Link>
                </span>
                <span className="ml-2 text-[1rem] font-regular opacity-75">
                    { formatDate(date) }
                </span>
            </Heading>
            {
                !editMode && <Text className="mt-2">
                    { text }
                </Text>
            }
            {
                editMode && <form onSubmit={(e) => {
                    const ed = editComment(e, commentId, username);
                    if(ed === false) {
                        toast({
                            status: "error",
                            isClosable: true,
                            title: "Couldn't edit the comment"
                        })
                    }
                }} className="mt-2">
                    <Textarea name="text">{ text }</Textarea>
                    <Button className="mt-2" type="submit">Confirm</Button>
                </form>
            }
            <Divider className="mt-4" />
            {
                context.logged && context.username === username && <>
                    <Button onClick={() => setEditMode(prev => !prev)} className="mt-4">Edit</Button>
                    <Button onClick={(e) => {
                        const del = deleteComment(e, commentId, username);
                        if(del === false) {
                            toast({
                                status: "error",
                                isClosable: true,
                                title: "Couldn't delete the comment"
                            })
                        }
                    }} className="ml-2 mt-4">Delete</Button>
                </>
            }
        </section>
    )
}