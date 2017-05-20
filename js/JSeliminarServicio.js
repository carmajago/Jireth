/**
 * Created by JuanMartin on 12/05/2017.
 */



function mostrar_Productos() {


    var tabla=document.getElementById("tableBody");


    $.post("../Controllers/ControlConsultarServicios.php",{}
        ,function (respuesta) {
            //alert(respuesta);
            var datos= JSON.parse(respuesta);
            for (var i=0;i<datos.length;i++)
            {
                var tr=document.createElement("tr");
                tr.setAttribute("class","text-center")
                var td1=document.createElement("td");
                var td2=document.createElement("td");
                var td3=document.createElement("td");
                var td4=document.createElement("td");
                td1.setAttribute("class","col-xs-1");
                td2.setAttribute("class","col-xs-4");
                td3.setAttribute("class","col-xs-5");
                td4.setAttribute("class","col-xs-2");
                var cod=document.createTextNode(datos[i].codigo);
                var nom=document.createTextNode(datos[i].nombre);
                var cos=document.createTextNode(datos[i].descripcion)
                var btn=document.createElement("button");
                btn.setAttribute("onClick","eliminar("+datos[i].codigo+")");
                var txt_btn=document.createTextNode("Eliminar");
                btn.appendChild(txt_btn);
                btn.setAttribute("class","btn-danger form-control");

                td1.appendChild(cod);
                td2.appendChild(nom);
                td3.appendChild(cos);
                td4.appendChild(btn);


                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tabla.appendChild(tr);
            }



        });


}
function eliminar(codigo) {
    $.post("../Controllers/EliminarServicio.php",{"codigo":codigo}
        ,function (respuesta) {
            location.reload();
        });
}