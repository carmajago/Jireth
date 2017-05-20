<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$codigo=$_POST['codigo'];
$stid = oci_parse($con->getConexion(), 'DELETE FROM SERVICIOS WHERE CODIGO = :codigo');
oci_bind_by_name($stid, ':codigo', $codigo);
oci_execute($stid);
echo $stid;

?>