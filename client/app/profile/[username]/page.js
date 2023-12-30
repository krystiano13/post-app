import {Avatar, Card, Heading, Text} from "@chakra-ui/react";

export default function Profile({params}) {
    return (
        <div className="w-[100vw] h-wout-nav pt-[4rem] flex justify-center items-center">
            <Card className="form-anim p-4 flex flex-col items-center lg:w-[30%] md:w-[40%] w-[70%]" variant="outline">
                <Avatar className="mt-6"/>
                <Heading className="mt-6">Admin</Heading>
                <Text className="text-center mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean viverra in lacus eget laoreet.
                    Vestibulum laoreet enim imperdiet, bibendum mi tincidunt, consectetur turpis. Morbi iaculis sagittis
                    fringilla. Sed magna metus, semper vel volutpat id, ultricies malesuada felis. Sed ornare sodales
                    nibh in iaculis. Fusce eu maximus tortor. Vestibulum ac nisi massa.
                </Text>
            </Card>
        </div>
    )
}