import { Spinner } from "@chakra-ui/react";
export default function Loading() {
    return (
        <div className="w-[100vw] h-wout-nav pt-[4rem] flex justify-center items-center">
            <Spinner size="xl" />
        </div>
    )
}