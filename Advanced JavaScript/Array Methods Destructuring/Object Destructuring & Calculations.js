const product = {
    id: 501,
    name: "Premium Black Hoodie",
    price: 1500,
    stock: 5,
    discount: 10
};

function checkProductStatus() {
    
    const { id, name, price, stock, discount } = product; //Object Destructuring
    
    console.log( "Product ID: ", id, "| Product name: ", name, "| Product price: ", price, "| Procduct Stock: ", stock, "| Discount Price: ", discount);
    
    if(stock > 0){
        console.log("Stock Available");
    }
    else{
        console.log("Stock Not availabe");
    }
    
   
    if (discount > 0) {
        let finalPrice = price - (price * (discount / 100));
        console.log("Discounted Price:", finalPrice);
    }
}

checkProductStatus();
