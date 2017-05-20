/**
 * Created by JuanMartin on 12/05/2017.
 */



function mostrar_Productos() {


    var tabla=document.getElementById("tableBody");


    $.post("../Controllers/ControlConsultarProductos.php",{}
        ,function (respuesta) {

            var datos= JSON.parse(respuesta);
            for (i=0;i<datos.length;i++)
            {
                var tr=document.createElement("tr");
                tr.setAttribute("class","col-xs-12")
                var td1=document.createElement("td");
                var td2=document.createElement("td");
                var td3=document.createElement("td");
                var td4=document.createElement("td");
                td1.setAttribute("class","col-xs-3");
                td2.setAttribute("class","col-xs-3");
                td3.setAttribute("class","col-xs-3");
                td4.setAttribute("class","col-xs-3");
                var  imagen=document.createElement("img")
                imagen.setAttribute("src",datos[i].ruta);
                var  cod=document.createTextNode(datos[i].codigo);
                var nom=document.createTextNode(datos[i].nombre);
                var btn=document.createElement("button");
                btn.setAttribute("onClick","eliminar("+datos[i].codigo+")");
                var txt_btn=document.createTextNode("Eliminar");
                btn.appendChild(txt_btn);
                btn.setAttribute("class","btn-danger form-control");

                td1.appendChild(imagen);
                td2.appendChild(cod);
                td3.appendChild(nom);
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
    $.post("../Controllers/EliminarProductos.php",{"codigo":codigo}
        ,function (respuesta) {
            location.reload();
        });
}