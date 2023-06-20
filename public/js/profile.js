const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#blog-name').value.trim();
    const description = document.querySelector('#blog-desc').value.trim();
    console.log(name);
    console.log(description);

    if (name && description) {
        const response = await fetch(`/api/blogs`, {
            method: 'POST',
            body: JSON.stringify({ name, description }),
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


document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);

document.querySelector('.blog-list').addEventListener('submit', newFormHandler);