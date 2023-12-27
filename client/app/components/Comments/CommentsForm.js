'use client'

import { Card, Heading, TextArea } from "@chakra-ui/react";
import { useGlobalContext } from "@/app/Context/store";
import { useEffect } from "react";

export function CommentsForm() {
    const globalContext = useGlobalContext();

    useEffect(() => {
        console.log(globalContext);
    }, []);

    return (
        <>
            {
                globalContext.logged &&
                <Card className="lg:w-1/2 md:w-3/4 w-[80%] mt-6">
                    <form>
                        <Heading>
                            <span>
                                Comment as { globalContext.username }
                            </span>
                        </Heading>
                    </form>
                </Card>
            }
        </>
    )
}