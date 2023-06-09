
new fullpage('#fullpage', {
  easing: 'easeInOutCubic',
  onLeave: function(origin, destination, direction) {
    var svg = document.getElementById('mi-svg');
    var boton = document.getElementById('boton');
    var links = document.getElementsByClassName('as');
  
    if (destination.index === 0) {
      boton.style.color = 'white';
      svg.style.color = 'white';
      if (window.innerWidth > 1024) {
        for (var i = 0; i < links.length; i++) {
          links[i].style.color = 'white';
        }
      }
    } else {
      svg.style.color = 'black';
      boton.style.color = 'black';
  
      if (window.innerWidth > 1024) {
        for (var i = 0; i < links.length; i++) {
          links[i].style.color = 'black';
        }
      }
    }
  }
  
});
const buton=document.querySelector(".boton")
const nav=document.querySelector(".header_enlaces")
const cierre=document.querySelector(".span")
const svg=document.querySelector("svg")
const section=document.querySelectorAll(".contenedor")

buton.addEventListener("click",()=>{
  nav.classList.toggle("activo")
  svg.classList.toggle("active")
  section.forEach(e=>{
    e.classList.toggle("active")
  })
  
})

cierre.addEventListener("click",()=>{
  nav.classList.remove("activo")
  svg.classList.remove("active")
  section.forEach((element) => {
    element.classList.remove("active");
  });
  
})

window.addEventListener('DOMContentLoaded', function() {
  var screenWidth = window.innerWidth;
  if (screenWidth > 1024) {
    document.getElementById('img1').src = 'img/modelos-computadora.png';
    document.getElementById('img2').src = 'img/modeoy-computadora.png';
    document.getElementById('img3').src = 'img/modelos-computadora.png';
    document.getElementById('img4').src = 'img/modelox-computadora.png';
    document.getElementById('img5').src = 'img/casa1_computadora.png';
    document.getElementById('img6').src = 'img/casa2-computadora.png';
    document.getElementById('img7').src = 'img/accesorio_computadora.png';
  }
});
