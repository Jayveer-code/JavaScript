var addfir = document.querySelector("#Add")
var state = document.querySelector("h5")

var flag = 0
addfir.addEventListener("click",function(){
    if(flag==0){
    state.innerHTML = "We are Friends"
    state.style.color = "green"
    addfir.innerHTML = "Remove Friend"
    flag = 1 
    }
    else{
        state.innerHTML = "Stranger"
        state.style.color = "red"
        addfir.innerHTML = "Add Friend"
        flag = 0
    }
})
