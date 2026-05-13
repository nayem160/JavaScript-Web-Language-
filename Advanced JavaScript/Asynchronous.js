// Promise
const fetchData = new Promise((resolve) => {
  setTimeout(() => resolve("Data loaded"), 1000);
});
fetchData.then(data => console.log(data)); // Data loaded

// async/await
async function getData() {
  return "Hello from async!";
}
getData().then(msg => console.log(msg)); // Hello from async!
