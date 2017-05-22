
function  validar() {
    ced = document.getElementById("cedula").value;
    if (ced == null || ced.length == 0  ||  /^\s+$/.test(ced)) {
        alert("El campo cedula esta vacio por favor ingrese un valor");
    }
    else {
        nomb = document.getElementById("mensaje").value;
        if (nomb == null || nomb.length == 0 || /^\s+$/.test(nomb)) {
            alert("El campo de la sugerencia esta vacio por favor escribe algo");
        }
        else{
                insertar_sugerencia();
        }

    }
}


function insertar_sugerencia() {
    var cedula=document.getElementById("cedula").value;
    var sugerencia=document.getElementById("mensaje").value;
    var estado="pendiente";
    $.post("../Controllers/EnviarSugerencia.php",{"cedula":cedula,"sugerencia":sugerencia,"estado":estado}
        ,function (respuesta) {

            if(respuesta==1){

                alert("Sugerencia Enviada");
                location.reload();

            }else {
                alert("Ocurrió un error :O Cliente no registrado");

            }


        });


}
