'use client'

import { useGlobalContext } from "@/app/Context/store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {Card, FormLabel, Text, Textarea, Button} from "@chakra-ui/react";

export default function EditProfile() {
    const globalContext = useGlobalContext();
    const router = useRouter();

    useEffect(() => {
        if(globalContext.logged === false) {
            //router.push('/');
        }
    },[]);

    return (
        <div className="w-[full] pt-[4rem] h-wout-nav flex items-center text-start justify-center text-amber-50">
            <Card size="lg" variant="outline" className="p-6 rounded-full form-anim">
                <form>
                    <FormLabel className="w-[20rem] mt-6">About Me</FormLabel>
                    <Textarea className="max-h-[10rem]" required name="about"></Textarea>
                    <Button className="mt-6 w-full" type="submit">Edit</Button>
                </form>
            </Card>
        </div>
    )
}