<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$codigo=$_POST['codigo'];
$stid = oci_parse($con->getConexion(), 'begin jireth.eliminar_producto(:codigo); end;');
oci_bind_by_name($stid, ':codigo', $codigo);
oci_execute($stid);
echo $stid;

?>