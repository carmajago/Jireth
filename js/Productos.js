/**
 * Created by User on 12/05/2017.
 */

function validacion() {

    cod = document.getElementById("codigo").value;
    if (cod == null || cod.length == 0  ||  /^\s+$/.test(cod)) {
        alert("El campo codigo esta vacio por favor ingrese un valor");
    }
    else {
        nomb = document.getElementById("nombre").value;
        if (nomb == null || nomb.length == 0 || /^\s+$/.test(nomb)) {
            alert("El campo nombre esta vacio por favor ingrese un valor");
        }
        else {
            valcompra = document.getElementById("valor_compra").value;
            if (valcompra == null || valcompra.length == 0 || /^\s+$/.test(valcompra)) {
                alert("El campo valor compra esta vacio por favor ingrese un valor");
            }
            else {

                    valventa = document.getElementById("valor_venta").value;
                    if (valventa == null || valventa.length == 0 || /^\s+$/.test(valventa)) {
                        alert("El campo valor venta esta vacio por favor ingrese un valor");
                    }
                    else {
                        cant = document.getElementById("cantidad").value;
                        if (cant == null || cant.length == 0 || /^\s+$/.test(cant)) {
                            alert("El campo cantidad esta vacio por favor ingrese un valor");
                        }
                        else {
                            desc = document.getElementById("descripcion").value;
                            if (cant == null || cant.length == 0 || /^\s+$/.test(desc)) {
                                alert("El campo descripcion esta vacio por favor ingrese un valor");
                            }
                            else {
                                alert('datos validados');
                                boton = document.getElementById('botonval').submit();
                            }

                    }
                }
            }

        }


    }
}