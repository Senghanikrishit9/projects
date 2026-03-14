function toggle(e){
  e.target.classList.toggle('danger')
}

document.querySelector("button").addEventListener('click',toggle);

const post = [
  {tittle: 'post one', body : "this is post one"},
  {tittle: 'post two', body : "this is post two"}
];

function createpost(post,cb) {
  setTimeout(() => {
  post.push(post);
  cb();
  },2000);
}

function getpost () {
  setTimeout(() => {
  post.forEach(function(post){
    const div = document.createElement('div');
    div.innerHTML = `<strong>${post.tittle}</strong> - ${post.body}`;
    document.querySelector("#post").appendChild(div);
  });
  },1000);
}

createpost({tittle : 'post three',  body : "this is post three"},getpost);

getpost();