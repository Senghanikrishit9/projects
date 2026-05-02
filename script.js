class App{
    constructor(){
        this.servername = 'localhost';

    document.querySelector("button").addEventListener("click",this.getservername.bind(this))
    }

    getservername(){
        console.log(this.servername);
        
    }
}

const app = new App()
