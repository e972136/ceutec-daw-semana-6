let botonGuardar = document.getElementById("btnGuardar");
let listaInfo = document.getElementById("listaInfo");


function guardarInfo(){
    listaInfo.innerHTML = "";
    let inputNombre = document.getElementById("nombre");
    let inputEmail = document.getElementById("email");
    let inputEdad = document.getElementById("edad");
    let inputTelefono = document.getElementById("telefono");

    let html="";
    html = '<li class="list-group-item" onmouseover=changeColor(this) onmouseout=changeColorOut(this)>'+
    "Informacion Ingresada<br><br>"+
    inputNombre.value+"<br>"+
    inputEmail.value+"<br>"+
    inputEdad.value+"<br>"+
    inputTelefono.value+"<br>"+"<hr>"+
    '</li>';
//    console.log(listaInfo.innerHTML);
//    listaInfo.innerHTML += html;
    listaInfo.innerHTML = html;
}

function changeColor(element){
    element.style.backgroundColor="green";
    element.style.color="white";

}

function changeColorOut(element){
    element.style.backgroundColor="white";
    element.style.color="black";

}


botonGuardar.addEventListener("click",guardarInfo)
