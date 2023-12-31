//components
import { PostList } from "@/app/components/PostPreview/PostList";
import { CreatePost } from "@/app/components/Home/CreatePost";
import { useGlobalContext } from "@/app/Context/store";

async function getPosts(page = 0) {
    const globalContext = useGlobalContext();
    let url;

    if(globalContext.isSearch) {
        url = `http://127.0.0.1:8000/api/posts/search/${globalContext.search}`;
    }

    else {
        url = `http://127.0.0.1:8000/api/posts/latest/${page}`;
    }

    const res = await fetch(url, {
        next: {
            revalidate: 0
        }
    });
    return res.json();
}

export default async function Home() {
    const posts = await getPosts(0);
  return (
    <div className="w-100vw h-auto pt-[5rem] flex flex-col items-center overflow-x-hidden">
        <CreatePost />
        <PostList posts={posts} />
    </div>
  )
}
