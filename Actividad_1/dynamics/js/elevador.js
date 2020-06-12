
var pisoA=prompt('Introduce el piso del elevador A:');
var pisoB=prompt('Introduce el piso del elevador B:');
var pisoGama=prompt('Introduce el piso de Gama:');

var distanciaA=parseInt(pisoA);
var distanciaB=parseInt(pisoB);
var distanciaG=parseInt(pisoGama);

var primerElevador=distanciaG-distanciaA;
var segundoElevador=distanciaG-distanciaB;

if(primerElevador<0){
  primerElevador*=-1;
}if(segundoElevador<0){
  segundoElevador*=-1;
}

if(primerElevador>segundoElevador){
  console.log('Gama, el elevador más cercano es el B' );
}else if (segundoElevador>primerElevador) {
  console.log('Gama, el elevador más cercano es el A');
}else if(primerElevador==segundoElevador){
  console.log('Gama, los elevadores se encuentran a la misma distancia')
}
