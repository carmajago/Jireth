/**
 * Created by User on 2/06/2017.
 */

function consultarCitas(){
    if($("#cedula").val() == ""){
        alert("campos sin llenar");
    }else{
        $.post("../Controllers/ConsultarCitasCliente.php",{"cedula": $("#cedula").val()}, function (data, status) {
            //alert(data);
            if(data != "error"){
                var data = jQuery.parseJSON(data);
                makeTable(data);
            } else {
                alert("CÉDULA INEXISTENTE");
            }
        });
    }
}

function eliminarCita(index){
    var fecha = (document.getElementById("fecha"+index).textContent).trim();
    var hora = (document.getElementById("hora"+index).textContent).trim();
    var cedula = ($("#cedula").val()).trim();

    $.post("../Controllers/EliminarCita.php",
        {"cedula": cedula,
            "hora": hora,
            "fecha": fecha
        }, function (respuesta) {
            //alert(respuesta);
            var Parent = document.getElementById("tableResponse");
            while(Parent.hasChildNodes())
            {
                Parent.removeChild(Parent.firstChild);
            }

            consultarCitas();
    });
}



function makeTable(data) {
    var codigo = '';
    codigo += "<thead>" +
        "<tr>" +
        "<th>FECHA</th>" +
        "<th>HORA</th>" +
        "<th>DESCRIPCION</th>" +
        "<th>CANCELAR</th>" +
        "</tr>" +
        "</thead> <tbody>";
    $.each(data, function (index, i) {
        codigo += "<tr id='" + index + "' class='trClient'>" +
            "<td class='tdClient col-lg-2' id='fecha"+index+"'>" + i.fecha + " </td>" +
            "<td class='tdClient col-lg-2' id='hora"+index+"'>" + i.hora + "</td>" +
            "<td class='tdClient col-lg-2'>" + i.descripcion + "</td>" +
            "<td class='tdClient col-lg-2'> <button type='text' class='btn btn-xs btn-danger' onclick='eliminarCita("+index+")'>Cancelar <i class='fa fa-close'></button></td></tr>";
    });
    codigo += "</tbody>";
    $("#tableResponse").html(codigo);


}
