let createTodo = async () => {
    let options = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify({
            title: "Pratik",
            body: "Soni",
            userID: 1999,
        }),
    };
    let p =await fetch("https://jsonplaceholder.typicode.com/posts", options)
    let response = await p.json()
    return response

}
const mainfunc = async() =>{
    let todo =await createTodo()
    console.log(todo)
}
mainfunc()

//Online Code
const createtodo = async (todo) => {
    let options = {
            method: "POST",
            headers: {
                    "Content-type": "application/json"
            },
            body: JSON.stringify(todo),
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response
}

const getTodo = async (id) => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
    let r = await response.json()
    return r
}

const mainFunc = async () => {
    let todo = {
            title: 'Harry2',
            body: 'bhai2',
            userId: 1100,
    }
    let todor = await createtodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}

mainFunc()