import { Button } from '@chakra-ui/react';
import { PostList } from "@/app/components/PostPreview/PostList";

export default function Home() {
  return (
    <div className="w-100vw h-auto pt-[5rem] flex flex-col items-center">
      <Button className="lg:w-1/2 md:w-3/4 w-[80%]">Create Post +</Button>
      <PostList />
    </div>
  )
}
