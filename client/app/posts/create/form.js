'use client'

import {Button, FormLabel, Input, Textarea} from "@chakra-ui/react";

export function Form() {
    return (
        <form className="flex flex-col justify-center items-center text-start max-w-full w-full">
            <FormLabel className="w-full pl-1.5 mt-6">Title</FormLabel>
            <Input className="w-full" name="title" required type="text"/>
            <FormLabel className="w-full pl-1.5 mt-6">Content</FormLabel>
            <Textarea className="w-full min-h-[15rem] h-[15rem] max-h-[15rem]" name="content" required type="password"/>
            <Button colorScheme={"blue"} className="w-full mt-6" type="submit">Create Post</Button>
        </form>
    )
}