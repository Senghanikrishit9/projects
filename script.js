const apiurl = 'https://jsonplaceholder.typicode.com/todos';

const getodo = () =>{
    fetch(apiurl + '?_limit=5')
    .then(res => res.json())
    .then(data => {
        data.forEach((todo) => {
          const div = document.createElement('div')
          div.appendChild(document.createTextNode(todo.title));

          document.getElementById('todo').appendChild(div);
        });
    })
}

getodo();
