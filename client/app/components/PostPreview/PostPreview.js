import {Card, CardBody, CardHeader, Heading, Text, Divider} from '@chakra-ui/react';

export function PostPreview({ username, title, content, createdAt }) {
    return (
        <Card id="postPreview" className="box-border lg:w-1/2 md:w-3/4 w-[80%] mt-[1rem] relative card-anim">
            <CardHeader>
                <Heading color="gray.400" as="p" size="xs">Posted by: { username } | { createdAt }</Heading>
                <Heading>{ title }</Heading>
                <Divider className="mt-6" />
            </CardHeader>
            <CardBody>
                <Text>{ content.length > 600 ? content.slice(0,600) : content }</Text>
            </CardBody>
            <div id="gradientPreview" className="w-full h-[50%] bottom-0 justify-self-end absolute z-40">
            </div>
        </Card>
    )
}