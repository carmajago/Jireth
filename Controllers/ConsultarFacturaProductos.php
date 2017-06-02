<?php
include_once ("Conexion.php");
$con =new Conexion();
$con->conectar();
$id=$_POST['id'];
$stid = oci_parse($con->getConexion(), 'SELECT * FROM productosporventa where id_venta=:id');
oci_bind_by_name($stid, ':id', $id);
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("id"=>"".$row[0],
        "codigo"=>"".$row[1],
        "nombre"=>"".$row[2],
        "cantidad"=>"".$row[3],
        "valor"=>"".$row[4]

    ) ;
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);


?>