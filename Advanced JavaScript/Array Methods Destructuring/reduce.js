const cart = [
    { id: 1, name: "Premium Hoodie", price: 1500 },
    { id: 2, name: "Minimalist T-Shirt", price: 500 },
    { id: 3, name: "Gothic Cargo Pant", price: 1200 }
];

function calculateTotal() {
    
    const totalprice = cart.reduce((initalPrice, item) =>{ 
        return initalPrice + item.price
    }, 0);
    console.log("Total Cart Bill: " + totalprice);
}

calculateTotal();
