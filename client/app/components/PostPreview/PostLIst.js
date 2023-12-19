'use client'

import { PostPreview } from "@/app/components/PostPreview/PostPreview";
import { useEffect, useState } from 'react';
import { Spinner, Text } from "@chakra-ui/react";

export function PostList() {
    const [ posts,setPosts ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/posts/latest/0')
            .then(res => res.json())
            .then(result => {
                setPosts(result.data);
            })
            .then(() => {
                setLoading(false);
            })
            .catch(() => {
                setError(true);
            })
    },[])

    return (
        <>
            {
                loading === true && (
                    <div className="w-full flex justify-center items-center mt-[2rem]">
                        <Spinner />
                    </div>
                )
            }
            {
                loading === false && (
                    <>
                        {
                            posts.map(item => (
                                <PostPreview
                                    title={item.title}
                                    content={item.content}
                                    username={item.username}
                                    createdAt={item.created_at}
                                />
                            ))
                        }
                    </>
                )
            }
            {
                error === true && (
                    <div className="w-full flex justify-center items-center mt-[2rem]">
                        <Text>Couldn't download data from server</Text>
                    </div>
                )
            }
        </>
    )
}