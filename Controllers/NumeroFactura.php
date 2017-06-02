<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'SELECT MAX(ID_VENTA) + 1 FROM REGISTRO_VENTAS');
$i = oci_execute($stid);

if($i != "undefined") {
    echo $i;
}else{
    echo 1;
}

?>