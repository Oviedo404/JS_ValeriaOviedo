var cuerpo=document.getElementsByTagName("body")[0];
var elem=document.createElement("div");
elem.innerHTML="<h1 class='uno'>Soy el más grande...</h1><h2>Curso Web 2020</h2><h3 class='dos'>Mediano<h3><h4 class='tres'>Jelou</h4><h4>Estoy medio chiquito :(</h4>";
cuerpo.appendChild(elem);
elem.classList.add("div");
var div=document.getElementsByClassName("div")[0];
console.log(div);
