<?php

$cedula=$_POST['cedula'];
$fecha=$_POST['fecha'];
$hora=$_POST['hora'];

include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'DELETE FROM citas where cedula = :cedula and fecha = :fecha and hora= :hora');
oci_bind_by_name($stid, ':cedula', $cedula);
oci_bind_by_name($stid, ':fecha', $fecha);
oci_bind_by_name($stid, ':hora', $hora);
oci_execute($stid);

$e= oci_error($stid);
$code=$e['code'];
echo $code;

?>