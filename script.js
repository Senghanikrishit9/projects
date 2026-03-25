
fetch('http://hello123.net')
    .then((response) => {
        console.log(response.status);
    })
    .then(() => {
        console.log("success")
    })
    .catch((error) => {
        console.log(error)
    });


fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
    });