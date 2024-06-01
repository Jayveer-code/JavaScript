console.log("Hello Jayu :");
function submit(){
  let name= document.getElementById('name').value;
  alert(name);
  let string= "hello"+name;
document.getElementsByClassName('submit')[0].innerHTML=string;
}