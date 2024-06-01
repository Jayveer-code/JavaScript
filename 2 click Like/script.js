var card = document.querySelector("#card")
var icon = document.querySelector("i")
var hh=document.querySelector("h1")

card.addEventListener("dblclick",function(){
    icon.style.transform = 'translate(-50%,-50%) scale(1)'
    icon.style.opacity = 0.8
    setTimeout(function(){
        icon.style.opacity=0
    },1000)
    setTimeout(function(){
        icon.style.transform = 'translate(-50%,-50%) scale(0)'
    },3000)

    hh.innerHTML="New text";
    console.log(hh);
})