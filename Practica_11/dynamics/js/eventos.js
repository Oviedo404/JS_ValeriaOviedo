let body = document.getElementsByTagName("body")[0];
let eventClick = document.getElementById("mouse");
eventClick.innerText = "Acércate muchacho";
eventClick.addEventListener("mouseover", () => {
  eventClick.innerText = "Cliqueame mi amor";
});
eventClick.addEventListener("click", () => {
  eventClick.innerText = "Doblecliqueame amor";
});
eventClick.addEventListener("dblclick", () => {
  eventClick.innerText = "Uwu";
});
eventClick.addEventListener("mouseleave", () => {
  eventClick.innerText = "Vuelve unu";
});
eventClick.addEventListener("contextmenu", () => {
  eventClick.innerText = "Regresa a lo que estabas haciendo";
});
let eventsumit=document.getElementById("formy");
eventsumit.addEventListener("submit",()=>{
  alert("Hola mundo");
});
var x=0;
let eventmousessenter=document.getElementById("div1");
eventmousessenter.addEventListener("mouseenter",()=>{
  eventmousessenter.innerHTML = x+=1;
})
let evendos=document.getElementById("div2");
evendos.addEventListener("mousemove",()=>{
  evendos.innerText="Ya te moviste aqui, yo no me voy ;)";
})
evendos.addEventListener("mouseout",()=>{
  evendos.innerText="Por que te fuiste:(";
})
let teclaPres=document.getElementById("pressed");
let tecla=document.getElementById("pressedUno");
let blurForm=document.getElementById("inBlur");
let divBlur=document.getElementById("blur");
let chanForm=document.getElementById("change");
let divChan=document.getElementById("chanDiv");
let copyForm=document.getElementById("copy");
let divCopy=document.getElementById("copyDiv");
let mouseup=document.getElementById("mouseup");

body.addEventListener("keyup",()=>{
  tecla.innerText="¿Por qué dejaste de presionar? ;((((";
});
body.addEventListener("keydown",()=>{
  tecla.innerText="Me presionas...";
});
body.addEventListener("keypress",()=>{
  let tecla=event.keyCode;
  tecla=String.fromCharCode(tecla);
  teclaPres.innerText="Has presionado "+tecla+ ", con Keypressed puedes saber si se ha presionado una tecla.";
});
blurForm.addEventListener("blur", ()=>{
  divBlur.classList.remove("focusEv");
  divBlur.classList.add("blurEv");
}, true);
blurForm.addEventListener("focus", ()=>{
  divBlur.classList.add("focusEv");
}, true);
change.addEventListener("change",()=>{
  var opcion = document.getElementById("change").value;
  divChan.classList.add("chan");
  divChan.innerText="Has seleccionado "+opcion+ ". Con change sabrás si ha habido un cambio en el valor de tu elemento.";
});
copyForm.addEventListener("copy",()=>{
  divCopy.classList.add("copia");
  divCopy.innerText="¿Qué te dije? >:(, no sabías que con el evento copy se puede detectar si alguien copia el contenido de tu elemento.";
})
mouseup.addEventListener("mouseup",()=>{
  mouseup.classList.add("mouseUp");
})
