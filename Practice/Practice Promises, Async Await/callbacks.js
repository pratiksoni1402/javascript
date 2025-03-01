
function fetchData(callbackFunction) {
  console.log("Fetching data");
  setTimeout(()=>{
    const data = {id:1, name: 'Pratik soni'};
    callbackFunction(data);
  }, 2000)
}

function displayData(data){
  console.log("Data Received", data)
}

fetchData(displayData)