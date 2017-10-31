export default function openNav() {
  var nav = document.getElementById("navbar-toggle");
  var open = document.getElementById("bannerLinks");
  nav.addEventListener('click', function(){
    open.classList.toggle('in');
    });
};