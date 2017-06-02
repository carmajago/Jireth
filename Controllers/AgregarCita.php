<?php
include_once("Conexion.php");

$con =new Conexion();
$con->conectar();
$cedula=$_POST['cedula'];
$fecha=$_POST['fecha'];
$hora=$_POST['hora'];
$descripcion=$_POST['descripcion'];

$stid = oci_parse($con->conexion, 'begin jireth.agregar_cita(:fecha,:hora,:cedula,:descripcion); end;');

oci_bind_by_name($stid, ':cedula', $cedula);
oci_bind_by_name($stid, ':fecha', $fecha);
oci_bind_by_name($stid, ':hora', $hora);
oci_bind_by_name($stid, ':descripcion', $descripcion);
oci_execute($stid);

$e= oci_error($stid);
$code=$e['code'];
if($code==00001){
    echo 0;
}else {
    echo 1;
}

?>

