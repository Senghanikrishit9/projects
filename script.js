const jokeEl = document.getElementById("joke");
const jokebtn = document.getElementById("joke-btn");

const generatejoke = () => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.innerHTML = JSON.parse(this.responseText).value;
      } else {
        jokeEl.innerHTML = "something went worng";
      }
    }
  };
  xhr.send();
};

jokebtn.addEventListener("click", generatejoke);
document.addEventListener('DOMContentLoaded',generatejoke);
