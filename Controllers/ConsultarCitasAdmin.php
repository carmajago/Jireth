<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'SELECT * FROM citas');
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("fecha"=>"".$row[0],
        "hora"=>"".$row[1],
        "cedula"=>"".$row[2],
        "motivo"=>"".$row[3]

    ) ;
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);


?>