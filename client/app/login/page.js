import {Form} from "./form";
import { Card } from "@chakra-ui/react";

export default function Login() {
    return (
        <div className="w-[full] pt-[4rem] h-wout-nav flex items-center text-start justify-center text-amber-50">
            <Card size="lg" variant="outline" className="p-6 rounded-full form-anim">
               <Form />
            </Card>
        </div>
    )
}