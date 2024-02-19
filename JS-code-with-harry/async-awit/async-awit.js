//async will always return a promise
async function getData(){
    return 'Namaste';
}
const data = getData()
console.log(data);

data.then((response)=> console.log(response))