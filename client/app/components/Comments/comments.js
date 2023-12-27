'use client'

import { Card, Divider } from "@chakra-ui/react";
import { SingleComment } from "@/app/components/Comments/SingleComment";

async function getComments(postId) {
    const res = await fetch(`http://127.0.0.1:8000/api/comments/${postId}`);
    return res.json();
}

export async function Comments({ postId }) {
    const result = await getComments(postId);
    return (
        <>
            <div id="dividerWrapper" className="lg:w-1/2 md:w-3/4 w-[80%] mt-12">
                <Divider />
            </div>
            <Card className="lg:w-1/2 md:w-3/4 w-[80%] mt-6 card-anim">
                {
                    result.comments.map(item => (
                        <SingleComment
                            key={item.id}
                            username={item.username}
                            text={item.text}
                            date={item.created_at}
                        />
                    ))
                }
            </Card>
        </>
    )
}