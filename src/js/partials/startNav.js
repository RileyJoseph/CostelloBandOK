export default function startNav(){
  var nav = document.getElementById("primary-nav");
  var overLay = document.getElementById("overlay");
  var body = document.getElementById("body");
  nav.addEventListener("click", function(){
    if (nav.classList.contains("close") || (nav.classList.contains("is-active"))){
      nav.classList.toggle("is-active");
      nav.classList.toggle("close");
      overLay.classList.toggle("show");
    }
  });

};