'use client'

import {Button, FormLabel, Input} from "@chakra-ui/react";
import Link from "next/link";

export function Form() {
    async function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData(e.target);

        await fetch('http://127.0.0.1:8000/api/auth/register', {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center text-start max-w-[20rem] w-[20rem]">
            <FormLabel className="w-[20rem] pl-1.5 mt-6">Username</FormLabel>
            <Input name="name" required type="text"/>
            <FormLabel className="w-[20rem] pl-1.5 mt-6">Email Address</FormLabel>
            <Input name="email" required type="email"/>
            <FormLabel className="w-[20rem] pl-1.5 mt-6">Password</FormLabel>
            <Input name="password" required type="password"/>
            <FormLabel className="w-[20rem] pl-1.5 mt-6">Repeat Password</FormLabel>
            <Input name="password_confirmation" required type="password"/>
            <Button colorScheme={"blue"} className="w-full mt-6" type="submit">Register</Button>
            <Link className="mt-6" href="/login">Have got an account ?</Link>
        </form>
    )
}