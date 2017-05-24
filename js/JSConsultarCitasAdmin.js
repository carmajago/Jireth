/**
 * Created by User on 22/05/2017.
 */




function ConsulCitas() {

    var tabla=document.getElementById("tableBody");


    $.post("../Controllers/ConsultarCitasAdmin.php",{}
        ,function (respuesta) {

            if(respuesta!="") {
                var datos = JSON.parse(respuesta);
                for (i = 0; i < datos.length; i++) {
                    var tr = document.createElement("tr");
                    tr.setAttribute("class", "col-xs-12");
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    td1.setAttribute("class", "col-xs-3");
                    td2.setAttribute("class", "col-xs-3");
                    td3.setAttribute("class", "col-xs-3");
                    td4.setAttribute("class", "col-xs-3");

                    var fech = document.createTextNode(datos[i].fecha);
                    var hor = document.createTextNode(datos[i].hora);
                    var ced = document.createTextNode(datos[i].cedula);
                    var mot = document.createTextNode(datos[i].motivo);

                    td1.appendChild(fech);
                    td2.appendChild(hor);
                    td3.appendChild(ced);
                    td4.appendChild(mot);


                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);

                    tabla.appendChild(tr);
                }

            }

        });


}


