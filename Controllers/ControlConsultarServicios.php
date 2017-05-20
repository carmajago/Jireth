<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'SELECT * FROM SERVICIOS');
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("codigo"=>"".$row[0],
                    "nombre"=>"".$row[1],
                    "costo"=>"".$row[2],
                    "tiempo"=>"".$row[3],
                    "descripcion"=>"".$row[4]

    ) ;
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);


?>