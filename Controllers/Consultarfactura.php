<?php

include_once("Conexion.php");

$con =new Conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'SELECT * FROM registro_ventas');
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("id"=>"".$row[0],
        "fecha"=>"".$row[1],
        "valor"=>"".$row[2]

    ) ;
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);



?>