console.log("Dashboard status");
async function getLiveProducts(){
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        
        let data = await response.json();
        console.log(data);
    } 
    catch(error) {
        console.log("error", error);
    }
}

getLiveProducts();
