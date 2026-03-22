function createPost({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            'Content-Type': 'application/json',
            token: 'abc123'
        }
    }).then((res) => res.json())
        .then((data) => console.log(data))
};

createPost({ title: 'My Post', body: 'This is my body' });


function createPost1({ title, body }) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POSt',
        body: JSON.stringify({  
            title,
            body
        }),
        headers: {
            'content-type': 'application/json',
            token: 'abc123'
        }
    }).then((res) => res.json())
        .then((data) => console.log(data));
}

createPost1({ title: "my post 1", body: 'this is my second body' });