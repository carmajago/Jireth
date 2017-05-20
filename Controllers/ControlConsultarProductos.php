<?php
include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), 'SELECT * FROM productos');
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("codigo"=>"".$row[0],
                    "nombre"=>"".$row[1],
                    "valor_compra"=>"".$row[2],
                    "valor_venta"=>"".$row[3],
                    "candidad"=>"".$row[4],
                    "ruta"=>"".$row[5],
                    "descripcion"=>"".$row[6]

    ) ;
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);


?>