import { useToast } from "@chakra-ui/react";

export async function deleteComment(e,id,username) {
    e.preventDefault();
    const data = new FormData(e.target);
    const toast = useToast();

    data.append('username',username);

    await fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
        method: "POST",
        headers: {
            Authorization: `
                    Bearer ${localStorage.getItem('token')}
                `
        },
        body: data
    })
        .then(res => res.json())
        .then(data => {
            if(data.status === false) {
                toast({
                    status: "error",
                    isClosable: true,
                    title: "Couldn't delete comment"
                });
            }

            else {
                window.location.reload();
            }
        })
}