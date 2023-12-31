//components
import { PostList } from "@/app/components/PostPreview/PostList";
import { CreatePost } from "@/app/components/Home/CreatePost";

export default async function Home() {
  return (
    <div className="w-100vw h-auto pt-[5rem] flex flex-col items-center overflow-x-hidden">
        <CreatePost />
        <PostList />
    </div>
  )
}
