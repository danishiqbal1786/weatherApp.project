 // attachEvent()
//jQuery-on
 // method-1 (old method)
 // document.getElementById('biking').onclick=function(){
//     alert("biking clicked by u");
// }

// method-2
/*document.getElementById('biking').addEventListener('click' , function(e){
    // alert("biking clicked by danish")
    console.log(e);
}, false)     // by default use false(event-propagation)

//type , timestamp , defaultprevented
// target , toElement , srcElement , currentTarget
// clientX , clientY , screenX , screenY
// altkey , ctrlkey , shiftkey , keycode

//event propagation

document.getElementById('images').addEventListener('click' , function(e){
    console.log("clicked inside the ul");
},false)
document.getElementById('biking').addEventListener('click' , function(e){
    console.log("clicked biking");
    e.stopPropagation()
},false)

//preventdefault
document.getElementById('google').addEventListener('click' , function(e){
    e.preventDefault();
    e.stopPropagation();
    console.log("google clicked");
    //e.defaultPrevented();

})*/

// how to remove the images to the browser
document.querySelector('#images').addEventListener('click' , function(e){
   // console.log(e);
   // console.log(e.target);
    // console.log(e.target.parentNode);

    // let removeit=e.target.parentNode;
  //  removeit.remove();  // method-1
 // removeit.parentNode.removeChild(removeit)  // method-2



 // we doesnot want to remove all image at one time when i click on list item
 //only remove image when i click on the image
    console.log(e.target.tagName);
    if(e.target.tagName==='IMG'){
        console.log(e.target.id);
        let removeit=e.target.parentNode
        removeit.remove()
    }


})



