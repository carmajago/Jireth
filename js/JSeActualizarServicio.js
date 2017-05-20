/**
 * Created by JuanMartin on 12/05/2017.
 */



function mostrar_Servicios() {


    var tabla=document.getElementById("tableBody");


    $.post("../Controllers/ControlConsultarServicios.php",{}
        ,function (respuesta) {
            
            var datos= JSON.parse(respuesta);
            for (i=0;i<datos.length;i++)
            {
                var tr=document.createElement("tr");
                tr.setAttribute("class","col-xs-12");
                var td1=document.createElement("td");
                var td2=document.createElement("td");
                var td3=document.createElement("td");
                var td4=document.createElement("td");
                var td5=document.createElement("td");
                var td6=document.createElement("td");
                td1.setAttribute("class","col-xs-2");
                td2.setAttribute("class","col-xs-2");
                td3.setAttribute("class","col-xs-2");
                td4.setAttribute("class","col-xs-2");
                td5.setAttribute("class","col-xs-2");
                td6.setAttribute("class","col-xs-2");



                //var  imagen=document.createElement("img")
                //imagen.setAttribute("src",datos[i].ruta);
                var i1 = document.createElement("input");
                var i2 = document.createElement("input");
                var i3 = document.createElement("input");
                var i4 = document.createElement("input");
                var i5 = document.createElement("input");
                var i6 = document.createElement("button");

                i1.setAttribute("id",datos[i].codigo);
                i2.setAttribute("id",datos[i].codigo+",nombre");
                i3.setAttribute("id",datos[i].codigo+",valor");
                i4.setAttribute("id",datos[i].codigo+",tiempo");
                i5.setAttribute("id",datos[i].codigo+",descripcion");
                var lblGuardar = document.createTextNode("Guardar");

                i1.setAttribute("class","actualizar_input");
                i2.setAttribute("class","actualizar_input");
                i3.setAttribute("class","actualizar_input");
                i4.setAttribute("class","actualizar_input");
                i5.setAttribute("class","actualizar_input");
                i6.setAttribute("class","form-control text-center btn-primary");
                i6.setAttribute("onclick","guardarCambios("+datos[i].codigo+")");

                i1.setAttribute("value",datos[i].codigo);
                i2.setAttribute("value",datos[i].nombre);
                i3.setAttribute("value",datos[i].valor);
                i4.setAttribute("value",datos[i].tiempo);
                i5.setAttribute("value",datos[i].descripcion);

                /*var  cod=document.createTextNode(datos[i].codigo);
                var nom=document.createTextNode(datos[i].nombre);
                var btn=document.createElement("button");
                btn.setAttribute("onClick","eliminar("+datos[i].codigo+")");
                var txt_btn=document.createTextNode("Eliminar");
                btn.appendChild(txt_btn);
                btn.setAttribute("class","btn-danger form-control");
                */

                i6.appendChild(lblGuardar);

                td1.appendChild(i1);
                td2.appendChild(i2);
                td3.appendChild(i3);
                td4.appendChild(i4);
                td5.appendChild(i5);
                td6.appendChild(i6);


                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tabla.appendChild(tr);
            }



        });


}
function guardarCambios(codigo) {
    var codigoN=document.getElementById(""+codigo).value;
    var nombre=document.getElementById(""+codigo+",nombre").value;
    var valor=document.getElementById(""+codigo+",valor").value;
    var tiempo=document.getElementById(""+codigo+",tiempo").value;
    var descripcion=document.getElementById(""+codigo+",descripcion").value;
    $.post("../Controllers/actualizarServicios.php",{"codigoViejo":codigo,"codigo":codigoN,"nombre":nombre,"valor":valor,"tiempo":tiempo,
                                                    "descripcion":descripcion}
        ,function (respuesta) {

            location.reload();
        });
}