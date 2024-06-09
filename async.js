
// setTimeout->execute something after a delay (what time u set)
setTimeout(function(){         // methd-1
    console.log("hey danish");
},3000)  // delay=3s

// method-2
const saydanish=function(){
    console.log(" hey danish");
}
setTimeout(saydanish , 3000)

// replace h1 content to something else
// document.querySelector('h1').innerHTML="best js series"

// replace h1 content at a particular time
const changeText=function(){
    document.querySelector('h1').innerHTML="best js series"

}
const changeMe=setTimeout(changeText , 3000)

// cleartimeout
document.querySelector('#stop').addEventListener('click' , function(){
    clearTimeout(changeMe);
    console.log("stopped");
})


