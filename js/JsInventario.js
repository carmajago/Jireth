function mostrar_inventario() {

    var Parent = document.getElementById("tableBody");
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }


    var filtro=document.getElementById("opcion").value;


    var tabla = document.getElementById("tableBody");

    $.post("../Controllers/Consultarfactura.php",{}
        ,function (respuesta) {

            if(respuesta!="") {
                var datos = JSON.parse(respuesta);
                for (i = 0; i < datos.length; i++) {
                    var tr = document.createElement("tr");

                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");

                    td1.setAttribute("class", "col-xs-3");
                    td2.setAttribute("class", "col-xs-3");
                    td3.setAttribute("class", "col-xs-3");
                    td4.setAttribute("class", "col-xs-3");


                    var i1 = document.createTextNode(datos[i].id);
                    var i2 = document.createTextNode(datos[i].fecha);
                    var i3 = document.createTextNode("$"+datos[i].valor);
                    var i4 = document.createElement("button");
                    i4.setAttribute("data-toggle","modal");
                    i4.setAttribute("data-target","#factura");
                    i4.setAttribute("id",datos[i].id);
                    i4.setAttribute("onClick","mostrar_factura("+datos[i].id+")");
                    var lblGuardar = document.createTextNode("Mas información");


                    i4.setAttribute("class", "form-control text-center btn-primary");

                    i4.appendChild(lblGuardar);

                    td1.appendChild(i1);
                    td2.appendChild(i2);
                    td3.appendChild(i3);
                    td4.appendChild(i4);



                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);
                    tabla.appendChild(tr);
                }
            }



        });


    $.post("../Controllers/RetornarInventario.php",{"aux":filtro}
        ,function (respuesta) {
            var datos = JSON.parse(respuesta);

            for (i = 0; i < datos.length; i++) {
                var vv=document.getElementById("valor_venta");
                var vc=document.getElementById("valor_compra");
                var ganancias=document.getElementById("ganancias");



                var tx1=document.createTextNode("Dinero invertido: "+datos[i].valor_venta);
                var tx2=document.createTextNode("Dinero ganado: "+datos[i].valor_compra);
                var tx3=document.createTextNode("ganancias: "+(parseInt(datos[i].valor_venta)-parseInt(datos[i].valor_compra)));
                vv.appendChild(tx1);
                vc.appendChild(tx2);
                ganancias.appendChild(tx3);

            }

        });


}

function mostrar_factura(id) {

    var Parent = document.getElementById("tableBody2");
    while(Parent.hasChildNodes())
    {
        Parent.removeChild(Parent.firstChild);
    }


    $.post("../Controllers/ConsultarFacturaProductos.php",{"id":id}
        ,function (respuesta) {




            if(respuesta!=""){
                var datos = JSON.parse(respuesta);

                for (i = 0; i < datos.length; i++) {



                        var tabla = document.getElementById("tableBody2");
                        var tr = document.createElement("tr");
                        tr.setAttribute("id","temporal");
                        var td1 = document.createElement("td");
                        var td2 = document.createElement("td");
                        var td3 = document.createElement("td");
                        var td4 = document.createElement("td");


                        td1.setAttribute("class", "col-xs-3");
                        td2.setAttribute("class", "col-xs-3");
                        td3.setAttribute("class", "col-xs-3");
                        td4.setAttribute("class", "col-xs-3");



                        var i1 = document.createTextNode(datos[i].codigo);
                        var i2 = document.createTextNode(datos[i].nombre);
                        var i3 = document.createTextNode("$" + datos[i].cantidad);
                        var i4 = document.createTextNode("$" + datos[i].valor);


                        td1.appendChild(i1);
                        td2.appendChild(i2);
                        td3.appendChild(i3);
                        td4.appendChild(i4);

                        tr.appendChild(td1);
                        tr.appendChild(td2);
                        tr.appendChild(td3);
                        tr.appendChild(td4);
                        tabla.appendChild(tr);

                    }
                }



        });

}