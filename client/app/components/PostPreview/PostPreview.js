import { Card, CardHeader, CardBody, Heading, Text } from '@chakra-ui/react';
export function PostPreview() {
    return (
        <Card className="md:w-1/2 w-[80%] h-[10rem] mt-[1rem]">
            <CardHeader>
                <Heading color="gray.400" as="p" size="xs">Posted by: Admin | 19.12.2023 12:12 PM</Heading>
                <Heading>First Post</Heading>
            </CardHeader>
            <CardBody>
                <Text></Text>
            </CardBody>
        </Card>
    )
}