var bulb = document.querySelector("#bulb");
var btn = document.querySelector("#button");
var btn2 = document.querySelector("#button2");


var flag = 0
btn.addEventListener("click", function () {
    if(flag==0){
    bulb.style.backgroundColor = "pink";
    bulb.style.borderRadius = "70%";
    bulb.style.border = "none";
    flag = 1
    }
    else if(flag==1){
        btn2.addEventListener("click", function () {
        bulb.style.backgroundColor = "green";
        bulb.style.borderRadius = "30%"
        bulb.style.border = "8px solid black "
        flag = 0
    });
}
    else{
        bulb.style.backgroundColor = "red";
    flag = 0
    }
});
var a = document.querySelector("h1")
a.addEventListener("click",function(){
    a.style.backgroundColor = "green"
    a.style.Color = "black"
})