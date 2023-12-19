import { Button } from '@chakra-ui/react';
import { PostPreview } from "@/app/components/PostPreview/PostPreview";

export default function Home() {
  return (
    <div className="w-100vw h-auto pt-[5rem] flex flex-col items-center">
      <Button className="md:w-1/2 w-[80%]">Create Post +</Button>
      <PostPreview />
    </div>
  )
}
