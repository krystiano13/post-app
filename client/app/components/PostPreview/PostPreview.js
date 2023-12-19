import {Card, CardBody, CardHeader, Heading, Text, Divider} from '@chakra-ui/react';

export function PostPreview() {
    return (
        <Card id="postPreview" className="box-border lg:w-1/2 md:w-3/4 w-[80%] mt-[1rem] relative">
            <CardHeader>
                <Heading color="gray.400" as="p" size="xs">Posted by: Admin | 19.12.2023 12:12 PM</Heading>
                <Heading>First Post</Heading>
                <Divider className="mt-6" />
            </CardHeader>
            <CardBody>
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lobortis porta convallis. Aliquam in
                    mi vitae orci ornare sollicitudin. Praesent lobortis nunc vehicula, placerat risus vel, laoreet est.
                    Nam vulputate risus et quam porta, nec cursus tortor feugiat. Praesent ex nibh, maximus at quam sed,
                    molestie bibendum ipsum. Aenean tristique risus sit amet molestie tempus. Nullam ut tincidunt sem.
                    Curabitur vulputate erat vitae urna sagittis, nec cursus enim accumsan. Nunc semper tellus sed velit
                    porttitor mollis. Cras venenatis, eros a mattis tristique, libero erat maximus velit, a sollicitudin
                    risus odio vitae sem. Vivamus urna justo, rhoncus sollicitudin sagittis non, auctor quis lorem.
                    Nullam venenatis tortor vitae mi blandit, vel eleifend sem tincidunt. Maecenas vehicula lorem et leo
                    luctus rutrum in et nibh. Mauris non vestibulum lacus.
                </Text>
            </CardBody>
            <div id="gradientPreview" className="w-full h-[50%] bottom-0 justify-self-end absolute z-40">
            </div>
        </Card>
    )
}