// Write a function processUserInput that takes a user's name as the first argument and a callback function as the second argument. The function should call the callback with a greeting message, including the user's name.
//
//   Then, call processUserInput and pass a callback function that logs the greeting message to the console.

function processUserInput(userName, callBack) {
  callBack(userName)
}

function greetingMessage(username) {
  console.log("Hello " + username)
}

processUserInput("Pratik", greetingMessage)