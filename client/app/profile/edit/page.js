'use client'

import { useGlobalContext } from "@/app/Context/store";
import { useRouter } from "next/navigation";
import {Card, FormLabel, Text, Textarea, Button} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";

export default function EditProfile() {
    const globalContext = useGlobalContext();
    const router = useRouter();
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        data.append('username', globalContext.username);

        await fetch('http://127.0.0.1:8000/api/profile/edit', {
            method: "POST",
            headers: {
                Authorization: `
                    Bearer ${localStorage.getItem('token')}
                `
            },
            body: data
        })
            .then(res => res.json())
            .then(data => {
                if(data.status === true) {
                    router.push(`/profile/${globalContext.username}`);
                }
                else {
                    toast({
                        status: "Error",
                        isClosable: true,
                        title: "You're probably logged out"
                    })
                }
            })
    }

    return (
        <div className="w-[full] pt-[4rem] h-wout-nav flex items-center text-start justify-center text-amber-50">
            <Card size="lg" variant="outline" className="p-6 rounded-full form-anim">
                <form onSubmit={handleSubmit}>
                    <FormLabel className="w-[20rem] mt-6">About Me</FormLabel>
                    <Textarea className="max-h-[10rem]" required name="about"></Textarea>
                    <Button className="mt-6 w-full" type="submit">Edit</Button>
                </form>
            </Card>
        </div>
    )
}