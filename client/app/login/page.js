import {Button, Input, FormLabel, Card} from "@chakra-ui/react";
import Link from 'next/link';

export default function Login() {
    return (
        <div className="w-[full] pt-[4rem] h-wout-nav flex items-center text-start justify-center text-amber-50">
            <Card size="lg" variant="outline" className="p-6 rounded-full">
                <form className="flex flex-col justify-center items-center text-start max-w-[20rem] w-[20rem]">
                    <FormLabel className="w-[20rem] pl-1.5 mt-6">Username</FormLabel>
                    <Input required type="text" />
                    <FormLabel className="w-[20rem] pl-1.5 mt-6">Password</FormLabel>
                    <Input required type="password" />
                    <Button colorScheme={"blue"} className="w-full mt-6" type="submit">Test</Button>
                    <Link className="mt-6" href="/register">Haven't got an account ?</Link>
                </form>
            </Card>
        </div>
    )
}