var character = document.getElementById("character");
var block = document.getElementById("block");
function jump() {
  if(character.classlist != "animate"){
  charcater.classlist.add("animate");
  }
  setTimeout(function(){
    character.classList.remove("animate");},500);
}