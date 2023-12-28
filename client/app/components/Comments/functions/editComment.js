export async function editComment(e,id,username) {
    e.preventDefault();
    const data = new FormData(e.target);
    data.append('username', username);

    await fetch(`http://127.0.0.1:8000/api/comments/edit/${id}`, {
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
                return false;
            }

            else {
                window.location.reload();
                return true;
            }
        })
}