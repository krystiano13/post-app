import { Heading, Text, Divider } from "@chakra-ui/react";

export function SingleComment() {
    return (
        <section id="comment" className="w-full p-4">
            <Heading className="text-start flex items-center">
                <span className="text-[1.5rem]">
                    Admin
                </span>
                <span className="ml-2 text-[1rem] font-regular opacity-75">
                    1 day ago
                </span>
            </Heading>
            <Text className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce quam tellus, consectetur sed efficitur
                sit amet, gravida a libero. Ut imperdiet mollis placerat. Quisque viverra lacus quis nulla pulvinar
                porta.
            </Text>
            <Divider className="mt-4" />
        </section>
    )
}