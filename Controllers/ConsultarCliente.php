<?php
 include_once("Conexion.php");

$con =new Conexion();
$con->conectar();
$cedula=$_POST['cedula'];

$stid = oci_parse($con->conexion, 'select count(*) from clientes where id = :cedula');
oci_bind_by_name($stid, ':cedula', $cedula);

oci_execute($stid, OCI_DEFAULT);

$results=array();
$numrows = oci_fetch_all($stid, $results, null, null, OCI_FETCHSTATEMENT_BY_ROW);

echo $numrows;

?>

