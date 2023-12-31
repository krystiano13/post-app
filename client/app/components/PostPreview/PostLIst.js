'use client'

import { PostPreview } from "@/app/components/PostPreview/PostPreview";
import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import Link from 'next/link';
import { useGlobalContext } from "@/app/Context/store";

export async function PostList({ posts }) {
    const globalContext = useGlobalContext();
    return (
        <div className="w-[100vw]">
            {
                !globalContext.isSearch &&
                <Suspense fallback={<Spinner />}>
                    {
                        posts.data.map(item => (
                            <Link className="w-[100vw] flex justify-center" href={`/posts/${item.id}`}>
                                <PostPreview
                                    title={item.title}
                                    content={item.content}
                                    username={item.username}
                                    createdAt={item.created_at}
                                />
                            </Link>
                        ))
                    }
                </Suspense>
            }
        </div>
    )
}