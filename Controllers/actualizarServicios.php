<?php
include_once ("Conexion.php");

 $codigoV=$_POST['codigoViejo'];
 $codigoN=$_POST['codigo'];
 $nombre=$_POST['nombre'];
 $valor=$_POST['valor'];
 $tiempo=$_POST['tiempo'];
 $descripcion=$_POST['descripcion'];

 $nombre_t = "nombre";
 $valor_t = "CostoServicio";
 $tiempo_t = "tiempoHoras";
 $descripcion_t = "descripcion";
 $codigo_t = "codigo";


$con=new conexion();
$con->conectar();

$stid1 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:nombre,:nombre_t); end;');
$stid2 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:valor,:valor_t); end;');
$stid3 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:tiempo,:tiempo_t); end;');
$stid4 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:descripcion,:descripcion_t); end;');
$stid5 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:codigoN,:codigo_t); end;');



oci_bind_by_name($stid1, ':codigoV', $codigoV);
oci_bind_by_name($stid1, ':nombre', $nombre);
oci_bind_by_name($stid1, ':nombre_t', $nombre_t);
oci_bind_by_name($stid2, ':codigoV', $codigoV);
oci_bind_by_name($stid2, ':valor', $valor);
oci_bind_by_name($stid2, ':valor_t', $valor_t);
oci_bind_by_name($stid3, ':codigoV', $codigoV);
oci_bind_by_name($stid3, ':tiempo', $tiempo);
oci_bind_by_name($stid3, ':tiempo_t', $tiempo_t);
oci_bind_by_name($stid4, ':codigoV', $codigoV);
oci_bind_by_name($stid4, ':descripcion', $descripcion);
oci_bind_by_name($stid4, ':descripcion_t', $descripcion_t);
oci_bind_by_name($stid5, ':codigoV', $codigoV);
oci_bind_by_name($stid5, ':codigoN', $codigoN);
oci_bind_by_name($stid5, ':codigo_t', $codigo_t);


oci_execute($stid1);
oci_execute($stid2);
oci_execute($stid3);
oci_execute($stid4);
oci_execute($stid5);

echo ($stid1);

?>


