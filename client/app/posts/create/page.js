import { Card } from "@chakra-ui/react";
import { LoginChecker } from "@/app/posts/create/checkLogged";
import { Form } from './form';

export default function CreatePost() {
    return (
        <div className="w-[full] pt-[4rem] h-wout-nav flex items-center text-start justify-center text-amber-50">
            <LoginChecker />
            <Card size="lg" variant="outline" className="p-6 rounded-full lg:w-1/3 md:w-1/2 w-[80%] form-anim">
                <Form />
            </Card>
        </div>
    )
}