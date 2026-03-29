function getData(endpoint) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('Get', endpoint);

        xhr.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    resolve(JSON.parse(this.responseText));
                } else {
                    reject('Error :  something went wrong');
                }
            }
        };

        setTimeout(() => {
            xhr.send();
        }, Math.floor(Math.random() * 3000) + 1000);

    });
}


getData("./movie.json")
    .then((movies) => {
        console.log(movies)
    })
getData("./acotor.json")
    .then((acotor) => {
        console.log(acotor)
    });
getData("./director.json")
    .then((directors) => {
        console.log(directors);
    })
    .catch((error) => console.log(error));

async function getAlldata() {
    const movies = await getData('./movie.json')
    console.log(movies);
    const acotor = await getData('./acotor.json')
    console.log(acotor);
    const director = await getData('./director.json')
    console.log(director);
}
getAlldata();

async function getAlldatawithfecth() {
    const moviesres = await fetch('./movie.json')
    const movie = await moviesres.json();
    const directorres = await fetch('./director.json')
    const director = await directorres.json();
    const acotorres = await fetch('./acotor.json')
    const acotor = await acotorres.json();

    console.log(movie, director, acotor);
}

getAlldatawithfecth();

async function getAlldatawithPromiseAll() {
    const [moviesres, directorres, acotorres] = await Promise.all([
        fetch('./movie.json'),
        fetch('./acotor.json'),
        fetch('./director.json')
    ]);

    const movie = moviesres.json();
    const director = directorres.json();
    const acotor = acotorres.json();

    console.log(movie, director, acotor);
}

getAlldatawithPromiseAll();