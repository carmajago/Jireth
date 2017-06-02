/**
 * Created by User on 1/06/2017.
 */

function agregarCalendario()
{

    $('.my_datepicker').datepicker({
        format: "dd/mm/yyyy"
    });

}

function solicitud(){
    if($('#hora').val() == ""){
        alert("no hay hora");
    }
    else if($('#fecha').val() == ""){
        alert("no hay fecha");
    }
    else if($('#cedula').val() == ""){
        alert("no hay cedula");
    }
    else if($('#descripcion').val() == ""){
        alert("no hay descripcion");
    }
    else {
        enviarDatos();
    }
}

function enviarDatos(){
    var cedula = $('#cedula').val();
    var fecha = $('#fecha').val();
    var hora = $('#hora').val();
    var descripcion = $('#descripcion').val();

    $.post("../Controllers/AgregarCita.php",
        {   "cedula": cedula,
            "fecha": fecha,
            "hora": hora,
            "descripcion": descripcion
        },
        function (response) {
            alert(response);
        });
}