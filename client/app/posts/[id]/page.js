import {Divider, Heading, Spinner, Text, Card} from '@chakra-ui/react';
import {Suspense} from "react";

async function getOnePost(id) {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
    return res.json();
}

export default async function Post({ params }) {
    const post = await getOnePost(params.id);

    return (
        <div className="w-100vw h-auto pt-[5rem] flex flex-col items-center">
            <Card variant="outline" className="wrapper lg:w-1/2 md:w-3/4 w-[80%] mt-6 p-6 box-border card-anim">
                <Suspense fallback={<Spinner />}>
                    {
                        post.data[0] &&
                        <>
                            <Heading color="gray.400" as="p" size="xs">{ post.data[0].username } | { post.data[0].created_at }</Heading>
                            <Heading>{ post.data[0].title }</Heading>
                            <Divider className="mt-3 mb-3" />
                            <Text>{ post.data[0].content }</Text>
                        </>
                    }
                </Suspense>
                {
                    !post.data[0] &&
                    <>
                        <Heading className="text-center">This post doesn't exist or got deleted</Heading>
                    </>
                }
            </Card>
        </div>
    )
}