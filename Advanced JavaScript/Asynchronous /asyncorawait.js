console.log("Dashbord");

function checkStock(){
    return new Promise(function(resolve, reject){
   
   setTimeout(()=>{
        let inStock = true;
        if(inStock){
        resolve("খাবার স্টকে আছে! অর্ডার নেওয়া যাবে।")
    }
    else{
        reject("দুঃখিত, খাবারটি আউট অফ স্টক!")
    }
   },5000)
});
}
    
async function placeOrder(){
   try{
        console.log("order processing start....");
    let status = await checkStock();
    console.log(status);
    console.log("dashboard updated.")
   }
   catch(error){
       console.log("error",error);
   }
}

placeOrder();
