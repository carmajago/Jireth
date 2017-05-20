<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$codigo = $_POST['codigo'];
$nombre = $_POST['nombre'];
$tiempo = $_POST['tiempo'];
$valor = $_POST['valor'];
$descripcion = $_POST['descripcion'];

$stid = oci_parse($con->conexion, 'begin jireth.agregar_servicios(:codigo,:nombre,:tiempo,:valor,:descripcion); end;');
oci_bind_by_name($stid, ':nombre', $nombre);
oci_bind_by_name($stid, ':codigo', $codigo);
oci_bind_by_name($stid, ':tiempo', $tiempo);
oci_bind_by_name($stid, ':valor', $valor);
oci_bind_by_name($stid, ':descripcion', $descripcion);

oci_execute($stid);
echo  $stid;

//echo "<SCRIPT>parent.window.location='../vistas/registrarServicios.html';</SCRIPT>";


?>