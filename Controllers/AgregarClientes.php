<?php
 include_once("Conexion.php");

$con =new Conexion();
$con->conectar();
$cedula=$_POST['cedula'];
$nombre=$_POST['nombre'];
$apellido=$_POST['apellido'];
$correo=$_POST['correo'];


$stid = oci_parse($con->conexion, 'begin jireth.agregar_clientes(:cedula,:nombre,:apellido,:correo); end;');
oci_bind_by_name($stid, ':cedula', $cedula);
oci_bind_by_name($stid, ':nombre', $nombre);
oci_bind_by_name($stid, ':apellido', $apellido);
oci_bind_by_name($stid, ':correo', $correo);
oci_execute($stid);

$e= oci_error($stid);
$code=$e['code'];
if($code==00001){
    echo 0;
}else
    echo 1;


?>

