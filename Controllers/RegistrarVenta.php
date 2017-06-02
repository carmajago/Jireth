<?php

$id=$_POST["id_venta"];
$valor=$_POST["valor_venta"];
$cedula=$_POST["cedula"];

include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), "INSERT INTO REGISTO_VENTAS VALUES('$id', NOW(), '$valor', '$cedula');");
echo oci_execute($stid);

?>