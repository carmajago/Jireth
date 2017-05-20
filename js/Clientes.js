/**
 * Created by Carlos on 12/05/2017.
 *
 *

 */
function  validar() {
    ced = document.getElementById("cedula").value;
    if (ced == null || ced.length == 0  ||  /^\s+$/.test(ced)) {
        alert("El campo cedula esta vacio por favor ingrese un valor");
    }
    else {
        nomb = document.getElementById("nombre").value;
        if (nomb == null || nomb.length == 0 || /^\s+$/.test(nomb)) {
            alert("El campo nombre esta vacio por favor ingrese un valor");
        }
        else{
            apellido=document.getElementById("apellido").value;
            if (apellido == null || apellido.length == 0 || /^\s+$/.test(apellido)) {
                alert("El campo apellido esta vacio por favor ingrese un valor");
            }
            else
            {
                correo=document.getElementById("correo").value;
                if (corr == null || corr.length == 0 || /^\s+$/.test(crr)) {
                    alert("El campo correo esta vacio por favor ingrese un valor");
                }
                else
                {
                    insertar_usuario();
                }
            }
        }

}
}


function insertar_usuario() {
    var cedula=document.getElementById("cedula").value;
    var nombre=document.getElementById("nombre").value;
    var apellido=document.getElementById("apellido").value;
    var correo=document.getElementById("correo").value;
    $.post("../Controllers/AgregarClientes.php",{"cedula":cedula,"nombre":nombre,"apellido":apellido,"correo":correo}
        ,function (respuesta) {

        if(respuesta==1){
            alert("Registrado");
            location.reload();

        }else {
            alert("Usuario ya existe en el sistema");

        }


        });


}