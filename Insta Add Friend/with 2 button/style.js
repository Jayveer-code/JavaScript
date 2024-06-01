var addfir = document.querySelector("#Add")
var state = document.querySelector("h5")
var rem = document.querySelector("#Rem")

addfir.addEventListener("click",function(){
    state.innerHTML = "We are Friends"
    state.style.color = "green"
})
rem.addEventListener("click",function(){
    state.innerHTML = "Stranger"
    state.style.color = "Red"
})