
document.querySelector("button").addEventListener("click", () => {

    function fetchuser() {
        fetch('https://randomuser.me/api')
            .then((res) => res.json())
            .then((data) => {
                displayuser(data.results[0])
            });
    }
    function displayuser(user) {
        if (user.gender === 'male') {
            document.querySelector('body').style.background = 'red'
        } else {
            document.querySelector('body').style.background = 'pink'
        }
    }

    console.log(displayuser);

fetchuser();
})



