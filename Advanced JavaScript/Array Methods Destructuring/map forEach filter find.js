console.log("Dashboard....");

const foodlist = [
                    {id: 101, title: "Kacci Biryani", price: 300 }, 
                    {id: 102, title: "Chicken Khichuri", price: 100},
                    {id: 103, title: "Joga Khichuri", price : 200}
                    ];
                

function Display(){
    foodlist.map(list => 
    console.log(list.title)
    );
    const newlist = foodlist.filter(item => item.price >= 200);
    newlist.forEach(item => console.log("200 upper food: ",item.title));
    
    const food = foodlist.find(item => item.id == 102);
     if(food){
         console.log("102 id food: ",food.title);
     }
     else{
         console.log("No food");
     }
}
Display();
