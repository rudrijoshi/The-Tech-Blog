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
    if (event.target.matches('.delete')) {
        const id = document.querySelector('.delete').getAttribute('data-id');
        console.log(id);
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
}


document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document.querySelector('.blog-list').addEventListener('submit', newFormHandler);


document.querySelector('.blog-list').addEventListener('click', delFormHandler);

