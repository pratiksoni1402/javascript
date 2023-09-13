//Callback
function loadScript(src, Callback){
    var script = document.createElement("script");
    script.src = src;
    script.onload = function(){
        console.log("Load script with src:" +  src)
        Callback(src)
    }
    document.body.appendChild(script);
}

function hello(src) { 
    console.log("Hello how are you")
 }

function goodMorning(src){
    console.log("I am fine" + src)
}

function callbackhell(error, src){
    if(error){
        console.log(error)
        sendEmergancyMessageToCeo();
        return
    }
    alert("ok" + src)
}    
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js", callbackhell()) //when a whole  function is passed to another function that is called inversion of control 

