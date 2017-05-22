<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$cedula=$_POST['cedula'];
$sugerencia=$_POST['sugerencia'];
$stid = oci_parse($con->getConexion(), 'begin jireth.cambiar_estado(:cedula,:sugerencia); end;');
oci_bind_by_name($stid, ':cedula', $cedula);
oci_bind_by_name($stid, ':sugerencia', $sugerencia);
oci_execute($stid);
echo $stid;

?>