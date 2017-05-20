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
                tr.setAttribute("class","col-xs-12");
                var td1=document.createElement("td");
                var td2=document.createElement("td");
                var td3=document.createElement("td");
                var td4=document.createElement("td");
                var td5=document.createElement("td");
                var td6=document.createElement("td");
                var td7=document.createElement("td");
                td1.setAttribute("class","col-xs-1");
                td2.setAttribute("class","col-xs-2");
                td3.setAttribute("class","col-xs-2");
                td4.setAttribute("class","col-xs-2");
                td5.setAttribute("class","col-xs-2");
                td6.setAttribute("class","col-xs-2");
                td6.setAttribute("class","col-xs-1");



                //var  imagen=document.createElement("img")
                //imagen.setAttribute("src",datos[i].ruta);
                var i1 = document.createElement("input");
                var i2 = document.createElement("input");
                var i3 = document.createElement("input");
                var i4 = document.createElement("input");
                var i5 = document.createElement("input");
                var i6 = document.createElement("input");
                var i7 = document.createElement("button");

                i1.setAttribute("id",datos[i].codigo);
                i2.setAttribute("id",datos[i].codigo+",nombre");
                i3.setAttribute("id",datos[i].codigo+",valor_Venta");
                i4.setAttribute("id",datos[i].codigo+",valor_Compra");
                i5.setAttribute("id",datos[i].codigo+",Cantidad");
                i6.setAttribute("id",datos[i].codigo+",Descripcion");
                var lblGuardar = document.createTextNode("Guardar");

                i1.setAttribute("class","actualizar_input");
                i2.setAttribute("class","actualizar_input");
                i3.setAttribute("class","actualizar_input");
                i4.setAttribute("class","actualizar_input");
                i5.setAttribute("class","actualizar_input");
                i6.setAttribute("class","actualizar_input");
                i7.setAttribute("class","form-control text-center btn-primary");
                i7.setAttribute("onclick","guardarCambios("+datos[i].codigo+")");

                i1.setAttribute("value",datos[i].codigo);
                i2.setAttribute("value",datos[i].nombre);
                i3.setAttribute("value",datos[i].valor_Venta);
                i4.setAttribute("value",datos[i].valor_Compra);
                i5.setAttribute("value",datos[i].cantidad);
                i6.setAttribute("value",datos[i].descripcion);

                /*var  cod=document.createTextNode(datos[i].codigo);
                var nom=document.createTextNode(datos[i].nombre);
                var btn=document.createElement("button");
                btn.setAttribute("onClick","eliminar("+datos[i].codigo+")");
                var txt_btn=document.createTextNode("Eliminar");
                btn.appendChild(txt_btn);
                btn.setAttribute("class","btn-danger form-control");
                */

                i7.appendChild(lblGuardar);

                td1.appendChild(i1);
                td2.appendChild(i2);
                td3.appendChild(i3);
                td4.appendChild(i4);
                td5.appendChild(i5);
                td6.appendChild(i6);
                td7.appendChild(i7);


                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);
                tr.appendChild(td6);
                tr.appendChild(td7);
                tabla.appendChild(tr);
            }



        });


}
function guardarCambios(codigo) {
    var codigoN=document.getElementById(""+codigo).value;
    var nombre=document.getElementById(""+codigo+",nombre").value;
    var valor_Venta=document.getElementById(""+codigo+",valor_Venta").value;
    var valor_Compra=document.getElementById(""+codigo+",valor_Compra").value;
    var cantidad=document.getElementById(""+codigo+",cantidad").value;
    var descripcion=document.getElementById(""+codigo+",descripcion").value;
    $.post("../Controllers/actualizarProductos.php",{"codigoViejo":codigo,"codigo":codigoN,"nombre":nombre,"valor_Venta":valor_Venta,
                                                    "valor_Compra":valor_Compra,"cantidad":cantidad,
                                                    "descripcion":descripcion}
        ,function (respuesta) {

            location.reload();
        });
}