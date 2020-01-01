var input = document.querySelector(".input");
var button  =document.querySelector(".button");
var list = document.querySelector(".list");


function inputLength(){
  return input.value.length;
}

function createLi(){
  var  li = document.createElement("li");

  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.value = 1;
  checkbox.name = "todo[]";


  li.appendChild(checkbox);

  li.appendChild(document.createTextNode(input.value));
  list.appendChild(li);
  input.value = "";
}

button.addEventListener("click",function () {
  if (input.value.length>0) {
    createLi();
  }
})

 input.addEventListener("keypress",function (event) {
  if (input.value.length>0 && event.which === 13){
    createLi();
  }
  })
