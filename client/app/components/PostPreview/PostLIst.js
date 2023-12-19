import { PostPreview } from "@/app/components/PostPreview/PostPreview";
import { Spinner } from "@chakra-ui/react";
import { Suspense } from "react";
import Link from 'next/link';

async function getPosts(page = 0) {
    const res = await fetch(`http://127.0.0.1:8000/api/posts/latest/${page}`);
    return res.json();
}

export async function PostList() {
    const posts = await getPosts(0);
    return (
        <div className="w-[100vw]">
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
        </div>
    )
}