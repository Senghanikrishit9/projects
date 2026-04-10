class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    createProfile() {
        console.log("Profile created for:");
        console.log("Name:", this.name);
        console.log("Email:", this.email);
        console.log("----------------------");
    }

    logout() {
        console.log(this.name + " has logged out.");
    }
}

// Creating users
const user1 = new User('krishit', 'krishitsenghani22@gmail.com');
const user2 = new User('krish', 'krishsenghani79@gmail.com');
const user3 = new User('devander', 'devander34@gmail.com');

// Calling methods
user1.createProfile();
user2.createProfile();
user3.createProfile();

user1.logout();