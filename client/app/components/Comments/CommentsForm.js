'use client'

import {Button, Card, Heading, Textarea} from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import { useEffect } from "react";

export function CommentsForm() {
    const globalContext = useGlobalContext();
    return (
        <>
            {
                globalContext.logged &&
                <Card variant="unstyled" className="lg:w-1/2 md:w-3/4 w-[80%] mt-6">
                    <form>
                        <Heading>
                            <span className="text-[1.6rem]">
                                Comment as { globalContext.username }
                            </span>
                        </Heading>
                        <Textarea size="lg" className="mt-6 max-h-[15rem] min-h-[15rem] h-[100%]" />
                        <Button className="mt-6" type="submit">Send Comment</Button>
                    </form>
                </Card>
            }
        </>
    )
}