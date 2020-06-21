let celdas=prompt("Ingresa el número de celdas:")
let tabla=document.getElementsByClassName("tabla")[0];
if(isNaN(parseFloat(celdas))){
  alert("No ingresaste un número ;(");
}else{
  for (var i = 0; i < celdas; i++) {
    var filas=document.createElement("tr");
    for (var j = 0; j < celdas; j++) {
      var columnas=document.createElement("td");
      if (i%2 == j%2) {
        columnas.classList.add("uno");
      }else{
        columnas.classList.add("dos");
      }
      filas.appendChild(columnas);
    }
    tabla.appendChild(filas);
  }
}
