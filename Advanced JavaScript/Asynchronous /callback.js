console.log("Dashbord");


const food = ["Kichuri", "bread"];

function loadProducts(myCallback){
     console.log("product loding....");
    setTimeout(()=>{
        myCallback(food)
    }, 5000);
}

function displayProducts(data){
    console.log("product:", data);
    
    console.log("Products Loaded successfully!");
}
loadProducts(displayProducts);
