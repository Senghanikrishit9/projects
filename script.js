const getUsers = async () => {
    try{
    const response = await fetch ('http://jsonplaceholder.typicode.com/users');
    

    const data = await response.text();
    console.log(data);
    }catch(error){
     console.log(" Is not working " + error)
    }
}



getUsers();