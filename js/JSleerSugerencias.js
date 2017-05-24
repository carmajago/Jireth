/**
 * Created by User on 21/05/2017.
 */

function LeerSug() {


    var tabla=document.getElementById("tableBody");


    $.post("../Controllers/ConsultarSugerencias.php",{}
        ,function (respuesta) {
            if(respuesta!="") {
                var datos = JSON.parse(respuesta);
                for (i = 0; i < datos.length; i++) {
                    var tr = document.createElement("tr");
                    tr.setAttribute("class", "col-xs-12")
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");
                    td1.setAttribute("class", "col-xs-3");
                    td2.setAttribute("class", "col-xs-3");
                    td3.setAttribute("class", "col-xs-3");
                    td4.setAttribute("class", "col-xs-3");

                    var cod = document.createTextNode(datos[i].cedula);
                    var sug = document.createTextNode(datos[i].sugerencia);
                    var est = document.createTextNode(datos[i].estado);
                    var btn = document.createElement("button");
                    btn.setAttribute("onClick", "marcar(" +"'"+datos[i].cedula +"'"+" , "+"'" +datos[i].sugerencia+"'"+ ");");
                    var txt_btn = document.createTextNode("Marcar");
                    btn.appendChild(txt_btn);
                    btn.setAttribute("class", "btn-info form-control");

                    td1.appendChild(cod);
                    td2.appendChild(sug);
                    td3.appendChild(est);
                    td4.appendChild(btn);


                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    tr.appendChild(td4);

                    tabla.appendChild(tr);
                }

            }

        });


}
function marcar( cedula,sugerencia) {
    $.post("../Controllers/CambiarEstadoSug.php",{"cedula":cedula,"sugerencia":sugerencia}
        ,function (respuesta) {
            alert(respuesta);
            location.reload();
        });
}
