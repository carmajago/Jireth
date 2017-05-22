<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'SELECT * FROM sugerencias');
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("cedula"=>"".$row[0],
                    "sugerencia"=>"".$row[1],
                    "estado"=>"".$row[2]

    ) ;
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);


?>