/**
 * Created by User on 12/05/2017.
 */
function mostrararticulos()
{

    //alert("Entrandoooo"+sesionactiva);

    $.post("../Controllers/ControlConsultarProductos.php",{}
    ,function (respuesta) {

        //alert(respuesta);

       var datos= JSON.parse(respuesta);


        for (i=0;i<datos.length;i++)
        {

           var obj=document.getElementById('divcatalogo');
            var elementocol=document.createElement('div');
            elementocol.setAttribute('class','col-lg-3');
            var elementofilacolumna=document.createElement('div');
            elementofilacolumna.setAttribute('id','filaColumna');
            var divimg=document.createElement('div');
            divimg.setAttribute('id','imagenproducto');
            var img=document.createElement('img');
            img.setAttribute('src',datos[i].ruta)
            divimg.appendChild(img);
            elementofilacolumna.appendChild(divimg);

            elementocol.appendChild(elementofilacolumna);
            var texto=document.createElement('div');
            var nombre=document.createTextNode(datos[i].nombre+"\n");
            var valor=document.createTextNode("\nValor: $"+datos[i].valor_venta);

            texto.appendChild(nombre);
            texto.appendChild(valor);
            elementofilacolumna.appendChild(texto);



            obj.appendChild(elementocol);




        }

    });
}

