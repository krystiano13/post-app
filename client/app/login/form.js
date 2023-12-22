'use client'
import {Button, FormLabel, Input} from "@chakra-ui/react";
import Link from "next/link";
import { useToast } from "@chakra-ui/react";

export function Form() {

    async function handleSubmit(e) {
        e.preventDefault();
        const data = new FormData(e.target);
        await fetch('http://127.0.0.1:8000/api/auth/login', {
            method: "POST",
            body: data
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    }

   return (
       <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-start max-w-[20rem] w-[20rem]">
           <FormLabel className="w-[20rem] pl-1.5 mt-6">Username</FormLabel>
           <Input name="name" required type="text"/>
           <FormLabel className="w-[20rem] pl-1.5 mt-6">Password</FormLabel>
           <Input name="password" required type="password"/>
           <Button colorScheme={"blue"} className="w-full mt-6" type="submit">Test</Button>
           <Link className="mt-6" href="/register">Haven't got an account ?</Link>
       </form>
   )
}