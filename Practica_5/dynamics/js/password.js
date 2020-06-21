var mensaje=prompt('Introduce tu mensaje:');
let regex= new RegExp('^.*<script>(.*equisde.*){5,}.*</script>$','i');
if(mensaje==""){
  alert("Por favor escribe algo ;(")
}else{
  let confirma=mensaje.search(regex);
  if(confirma==-1){
    alert("¿Bob? :0\n¿Wade? :0");
  }else{
    alert("Oso oso mentiroso, vete lejos antes de que te lanze mis calcetines olor a queso");
  }
}
