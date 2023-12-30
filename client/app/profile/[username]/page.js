import {Avatar, Card, Heading, Spinner, Text, Button} from "@chakra-ui/react";
import {Suspense} from "react";

async function getProfile(username) {
    const res = await fetch(`http://127.0.0.1:8000/api/profile/${username}`);
    return res.json();
}

export default async function Profile({params}) {
    const prof = await getProfile(params.username);
    return (
        <div className="w-[100vw] h-wout-nav pt-[4rem] flex justify-center items-center">
            <Card className="form-anim p-4 flex flex-col items-center lg:w-[30%] md:w-[40%] w-[70%]" variant="outline">
                <Suspense fallback={<Spinner/>}>
                    {
                        prof.profile.length > 0 ?
                        <>
                            <Avatar className="mt-6"/>
                            <Heading className="mt-6">{prof.profile[0].username}</Heading>
                            <Text className="text-center mt-6">
                                {prof.profile[0].about ? prof.profile[0].about : "This profile hasn't got about section created"}
                            </Text>
                        </>
                            :
                            <Text>
                                This user doesn't exist
                            </Text>
                    }
                </Suspense>
                <Button className="mt-6 w-full">Edit Profile</Button>
            </Card>
        </div>
    )
}