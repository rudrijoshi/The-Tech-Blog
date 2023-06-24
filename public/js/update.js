const updFormHandler = async (event) => {
    event.preventDefault();

    const blog_name = document.querySelector('#title-login').value.trim();
    const description = document.querySelector('#content-login').value.trim();
    const blog_id = document.querySelector('#edit').value;
    console.log(blog_name, description, blog_id);
    if (blog_name && description) {
        const response = await fetch(`/api/blogs/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ blog_name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            document.location.replace('/dashboard');
        }
    } else {

        alert('Update failed sorry')
    }
};
document.querySelector(".comment-form").addEventListener("submit", updFormHandler);