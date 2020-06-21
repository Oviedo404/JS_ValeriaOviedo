let num=prompt("Dame un número:");
if(num<1){
  alert("El número tiene que ser mayor a 1")
}else{
  var numeroOriginal=num;
  numeroOriginal=parseInt(numeroOriginal);
  var div=2;
  var contArreglo=0;
  let arr=[];
  while(num!=1 && div<=num){
    let residuo= num%div;
    if(residuo==0){
      let primo=prim(div);
      if(primo==0){
        arr[contArreglo]=div;
        contArreglo++;
        num=num/div;
      }
    }
    div++;
  }
  if(arr.length==0){
    console.log("Entrada: "+numeroOriginal);
    console.log("Salida: ("+arr.length+") ["+arr+"]");
    console.log("No tiene factores primos");

  }else if(arr.length==1){
    console.log("Entrada: "+numeroOriginal);
    console.log("Salida: ("+arr.length+") ["+arr+"]");
    console.log("Es un número primo");
  }else{
    console.log("Entrada: "+numeroOriginal);
    console.log("Salida: ("+arr.length+") ["+arr+"]");
  }
}

function prim(numero){
  let bool=true;
  let i=numero-1;
  while(bool==true && i>=0){
    if(numero%i==0){
      if(i!=1){
        bool=false;
      }else{
        bool=false;
        return 0;
      }
    }
    i--;
  }
}
