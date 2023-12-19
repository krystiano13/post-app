import { PostPreview } from "@/app/components/PostPreview/PostPreview";
import { Spinner } from "@chakra-ui/react";
import {Suspense} from "react";

async function getPosts(page = 0) {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/latest/${page}`);
    return res.json();
}

export async function PostList() {
    const posts = await getPosts(0);
    return (
        <>
           <Suspense fallback={<Spinner />}>
               {
                   posts.data.map(item => (
                       <PostPreview
                           title={item.title}
                           content={item.content}
                           username={item.username}
                           createdAt={item.created_at}
                       />
                   ))
               }
           </Suspense>
        </>
    )
}