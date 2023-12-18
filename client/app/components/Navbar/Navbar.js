import { Button, Input, Heading } from "@chakra-ui/react";

export function Navbar() {
    return (
        <nav className="flex p-2 items-center justify-between w-full h-[4rem] fixed border-b-2 border-b-solid border-b-blue-300 border-opacity-40 bg-blue-400 bg-opacity-10">
            <div className="w-1/3 flex justify-start" id="logo">
                <Heading as="h1" size="lg">POST APP</Heading>
            </div>
            <div className="w-1/3 flex justify-center" id="searchBar">
                <Input name="search" type="text" placeholder="Search ..." />
            </div>
            <div id="buttons" className="h-full w-1/3 flex justify-end">
                <Button colorScheme="blue" className="ml-1 mr-1">Log In</Button>
                <Button colorScheme="gray" className="ml-1 mr-1">Create Account</Button>
            </div>
        </nav>
    )
}