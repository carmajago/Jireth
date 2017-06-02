<?php

$cedula=$_POST['cedula'];

include_once ("Conexion.php");
$con=new conexion();
$con->conectar();
$stid = oci_parse($con->getConexion(), "SELECT * FROM citas where cedula = '$cedula'");
$r = oci_execute($stid);

$M = null;

if($r == true) {

    $i = (int)0;
    while ($row = oci_fetch_array($stid, OCI_BOTH)) {

        $response = array("fecha" => "" . $row[0],
            "hora" => "" . $row[1],
            "descripcion" => "" . $row[3]
        );
        $M[$i] = $response;
        $i++;
    }
}

if($M != null) {
    $response = $M;
    echo json_encode($response, true);
} else {
    echo "error";
}


?>