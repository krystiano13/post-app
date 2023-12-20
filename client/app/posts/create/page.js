import {Button, Input, FormLabel, Card, Textarea} from "@chakra-ui/react";
import Link from "next/link";
export default function CreatePost() {
    return (
        <div className="w-[full] pt-[4rem] h-wout-nav flex items-center text-start justify-center text-amber-50">
            <Card size="lg" variant="outline" className="p-6 rounded-full lg:w-1/3 md:w-1/2 w-[80%] form-anim">
                <form className="flex flex-col justify-center items-center text-start max-w-full w-full">
                    <FormLabel className="w-full pl-1.5 mt-6">Title</FormLabel>
                    <Input className="w-full" name="title" required type="text" />
                    <FormLabel className="w-full pl-1.5 mt-6">Content</FormLabel>
                    <Textarea className="w-full min-h-[15rem] h-[15rem] max-h-[15rem]" name="content" required type="password" />
                    <Button colorScheme={"blue"} className="w-full mt-6" type="submit">Create Post</Button>
                </form>
            </Card>
        </div>
    )
}