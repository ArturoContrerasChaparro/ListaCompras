let contador=0;
let costoTotal=0;
let element = document.getElementById("totalPrecio");
element.innerHTML="Total en precio";

let txtNombre = document.getElementById("Name");
//txtNombre.value="leche semidescremada";
//console.log(txtNombre.value);
let txtNumber= document.getElementById("Number");
let total= document.getElementById("precioTotal");
/* let campos=document.getElementsByClassName("campo");
campos[0].value  = "Leche descremada deslactosada light=Agua";
console.log(campos[0].value);
console.log(campos);

for (let i=0; i<campos.length; i++){
    campos[i].style.border="red thin solid";
}//For

let spans = document.getElementsByTagName("span");
for (let i=0; i<spans.length; i++){
    console.log(spans[i].textContent);
}//for */

let tabla= document.getElementById("tablaListaCompras");
let cuerpoTabla = tabla.getElementsByTagName("tbody");

/* cuerpoTabla[0].innerHTML =  `<tr>
<th scope="row">1</th>
<td>Leche descremada</td>
<td>1</td>
<td>$23</td>
</tr>`; */
function validarNombre(){
    if (txtNombre.value.length <3){
        return false
    }//if
    return true;
}// ValidarNombre

function validarCantidad() {
    if(txtNumber.value.length==0){
    return false;
}//if
    if (isNaN(txtNumber.value)){
        return false;
    }//if
    if (parseFloat(txtNumber.value)<=0){
        return false;
    }//if
    return true;
}//validarCantidad
let agregar = document.getElementById("btnAgregar");
                                //event en este caso es una variable, puedes ponerle cualquier(x, y, perro, etc) nombre pero la mayoria utiliza el "event"
  agregar.addEventListener("click",(event)=>{
    event.preventDefault();
    if((! validarNombre()) || (! validarCantidad())  ){
        let lista="";
        if(!validarNombre()){
            txtNombre.style.border="red thin solid";
            lista+="<li>Se debe escribir un nombre valido</li>";
        }//
        if(!validarCantidad()){
            txtNumber.style.border="red thin solid";
            lista+="<li>Se debe escribir una cantidad valida</li>";
        }//
        document.getElementById("alertValidacionesTexto").innerHTML=
        `Los campos deben ser llenados correctamente. 
        <ul>${lista}</ul>`;
        document.getElementById("alertValidaciones").style.display="block";
        setTimeout(function(){
            document.getElementById("alertValidaciones").style.display="none";
        },
        8000
        );
        return false;
    }//if
    txtNumber.style.border="";
    txtNombre.style.border="";
    document.getElementById("alertValidaciones").style.display="none";
    contador++;
    document.getElementById("contadorProductos").innerHTML=contador;
    let precio =(Math.floor((Math.random() * 50)*100))/100;
    let cantidad = parseFloat(txtNumber.value);
    costoTotal += (precio * cantidad);
    total.innerHTML =`$ ${Math.floor(costoTotal*100)/100}`
    let tmp = `<tr>
<th scope="row">${contador}</th>
<td>${txtNombre.value}</td>
<td>${txtNumber.value}</td>
<td>$ ${precio}</td>
</tr>`;
console.log(tmp);
cuerpoTabla[0].innerHTML += tmp;
txtNumber.value="";
txtNombre.value="";
txtNombre.focus();
});
                         //blur hace efecto cuando el elemento pierde el focus
txtNombre.addEventListener("blur", (event)=> {
    event.target.value=event.target.value.trim();
}
);
txtNumber.addEventListener("blur", (event)=> {
    event.target.value=event.target.value.trim();});
    /*trim quita el espacio en blanco de ambos extremos de una cadena y
     devuelve una nueva cadena, sin modificar la cadena original. El 
     espacio en blanco en este contexto son todos los caracteres de espacio
      en blanco (espacio, tabulación, espacio sin interrupción, etc.) 
      y todos los caracteres de terminación de línea (LF, CR, etc.).*/
//target es el objetivo del evento

