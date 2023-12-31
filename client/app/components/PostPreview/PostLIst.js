'use client'

import { PostPreview } from "@/app/components/PostPreview/PostPreview";
import { Spinner } from "@chakra-ui/react";
import {Suspense} from "react";
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function PostList() {
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const data = new FormData();
        data.append("text", "");
        fetch(`http://127.0.0.1:8000/api/posts/latest/${page}`, {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(result => setPosts(prev => result.data))
            .then(() => {
                setLoading(false)
            })
    }, []);

    return (
        <div id={posts.length.toString()} className="w-[100vw]">
                {
                    loading === false &&
                    posts.map(item => (
                        <Link className="w-[100vw] flex justify-center" href={`/posts/${item.id}`}>
                            <PostPreview
                                key={item.id}
                                title={item.title}
                                content={item.content}
                                username={item.username}
                                createdAt={item.created_at}
                            />
                        </Link>
                    ))
                }
            {
                loading === true &&
                <div className="w-[100vw] h-wout-nav flex items-center justify-center">
                    <Spinner />
                </div>
            }
        </div>
    )
}