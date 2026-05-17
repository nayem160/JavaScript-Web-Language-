console.log("Dashboard....");

const localBackup = [
                    {id: 101, title: "Kacci Biryani"}, 
                    {id: 102, title: "Chicken Khichuri"},
                    {id: 103, title: "Joga Khichuri"}
                    ];
                
async function renderDashboard(){
    try{
        const response =await fetch("https://jsonplaceholder.typicode.com/todos?_limit=3");
        const data = await response.json();
        console.log(data);
        data.map(ar=>
            console.log(ar.title));
        
    }
    catch(error){
        console.log(localBackup.map(rr => rr.title));
    }
}

renderDashboard();
