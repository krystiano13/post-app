import { Heading, Text, Divider } from "@chakra-ui/react";

export function SingleComment({ username, date, text }) {
    return (
        <section id="comment" className="w-full p-4">
            <Heading className="text-start flex items-center">
                <span className="text-[1.5rem]">
                    { username }
                </span>
                <span className="ml-2 text-[1rem] font-regular opacity-75">
                    { date }
                </span>
            </Heading>
            <Text className="mt-2">
                { text }
            </Text>
            <Divider className="mt-4" />
        </section>
    )
}