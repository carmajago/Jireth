<?php
include_once("Conexion.php");


$cedula=$_POST['cedula'];
$sugerencia=$_POST['sugerencia'];
$estado=$_POST['estado'];


$con =new conexion();
$con->conectar();
$stid = oci_parse($con->conexion, 'begin jireth.agregar_sugerencia(:cedula,:sugerencia,:estado); end;');
oci_bind_by_name($stid, ':cedula', $cedula);
oci_bind_by_name($stid, ':sugerencia', $sugerencia);
oci_bind_by_name($stid, ':estado', $estado);
oci_execute($stid);

$e= oci_error($stid);
$code=$e['code'];

if($code==00001){
    echo 0;
}else
    echo 1;



?>