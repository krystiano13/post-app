import { Card } from "@chakra-ui/react";
import { Form } from './form';
export default function Register() {
    return (
        <div className="w-[full] h-wout-nav pt-[4rem] flex items-center text-start justify-center text-amber-50">
            <Card size="lg" variant="outline" className="p-6 rounded-full form-anim">
                <Form />
            </Card>
        </div>
    )
}