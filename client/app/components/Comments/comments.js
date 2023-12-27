import { Card, Divider } from "@chakra-ui/react";
import { SingleComment } from "@/app/components/Comments/SingleComment";

export function Comments({ postId }) {
    return (
        <>
            <div id="dividerWrapper" className="lg:w-1/2 md:w-3/4 w-[80%] mt-12">
                <Divider />
            </div>
            <Card className="lg:w-1/2 md:w-3/4 w-[80%] mt-6">
                <SingleComment />
                <SingleComment />
            </Card>
        </>
    )
}