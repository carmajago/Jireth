<?php
include_once ("Conexion.php");
$con =new Conexion();
$con->conectar();
$aux=$_POST['aux'];
$stid = oci_parse($con->getConexion(), 'select sum(p.valor_compra*p.disponibles),sum(r.valor_venta) from productos p,registro_ventas r');
oci_execute($stid);
$M;
$i=(int)0;
while ($row = oci_fetch_array($stid, OCI_BOTH)) {

    $response=array("valor_compra"=>"".$row[0],
        "valor_venta"=>"".$row[1]
    );
    $M[$i]=$response;
    $i++;
}
$response=$M;
echo json_encode($response,true);
?>