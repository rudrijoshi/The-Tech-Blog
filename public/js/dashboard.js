const newFormHandler = async (event) => {
    event.preventDefault();

    const blog_name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();

    if (blog_name && description) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ blog_name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create project');
        }
    }
};




const delFormHandler = async (event) => {
    event.preventDefault();

    const id = event.target.dataset.id;
    console.log(`this is target${id}`);
    const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    });
    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert('Failed to update post');
    }

}


document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document.querySelector('.delete').addEventListener('click', delFormHandler);

// let allDeleteButtons = document.querySelectorAll('.delete');
// for (let index = 0; index < allDeleteButtons.length; index++) {
//     const element = array[index];
//     element.addEventListener('click', delFormHandler);
// };
