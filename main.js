let dark = document.querySelector("#dark");
let light = document.querySelector("#light");
let darkMode = document.body;
let header = document.querySelector(".header");
dark.onclick = function(){
  light.classList.toggle("active");
  dark.classList.toggle("active");
  darkMode.classList.toggle("darkMode");
  header.classList.toggle("darkMode");
}
light.onclick = function(){
  light.classList.toggle("active");
  dark.classList.toggle("active");
  darkMode.classList.toggle("darkMode");
  header.classList.toggle("darkMode");
}