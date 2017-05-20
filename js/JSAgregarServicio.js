/**
 * Created by User on 12/05/2017.
 */
function AgregarServicio()
{
    var codigo = document.getElementById("codigo").value;
    var nombre = document.getElementById("nombre").value;
    var tiempo = document.getElementById("tiempo").value;
    var valor = document.getElementById("valor").value;
    var descripcion = document.getElementById("descripcion").value;

    //alert("Entrandoooo"+sesionactiva);

    $.post("../Controllers/AgregarServicios.php",{"codigo":codigo,"nombre":nombre,"tiempo":tiempo,
                                                                "valor":valor,"descripcion":descripcion}
    ,function (respuesta) {

        alert(respuesta);
    });
}

