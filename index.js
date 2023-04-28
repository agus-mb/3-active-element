const boton= document.querySelector(".toggleBtn");
const container= document.querySelector(".container");

boton.onclick=function(){
    container.classList.toggle('active')
}