<?php
 include_once("Conexion.php");

$con =new Conexion();
$con->conectar();
$cedula=$_POST['cedula'];

$stid = oci_parse($con->conexion, 'select * from clientes where id = :cedula');
oci_bind_by_name($stid, ':cedula', $cedula);
oci_execute($stid);

$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("cedula"=>"".$row[0]);

    $M[$i]=$response;
    $i++;
}
if($M!=null){
        echo 1;
}else
    echo 0;



?>

