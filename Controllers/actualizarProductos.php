<?php
include_once ("Conexion.php");

 $codigoV=$_POST['codigoViejo'];
 $codigoN=$_POST['codigo'];
 $nombre=$_POST['nombre'];
 $valor_Venta=$_POST['valor_Venta'];
 $valor_Compra=$_POST['valor_Compra'];
 $cantidad=$_POST['cantidad'];
 $descripcion=$_POST['descripcion'];

 $nombre_t = "nombre";
 $valor_c = "valor_compra";
 $tiempo_v = "valor_venta";
 $disponibles_t = "disponibles";
 $descripcion_t = "descripcion";
 $codigo_t = "codigo";


$con=new conexion();
$con->conectar();

$stid1 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:nombre,:nombre_t); end;');
$stid2 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:valor_Venta,:valor_v); end;');
$stid3 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:valor_Compra,:valor_c); end;');
$stid3 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:cantidad,:disponibles_t); end;');
$stid4 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:descripcion,:descripcion_t); end;');
$stid5 = oci_parse($con->conexion, 'begin jireth.actualizar_servicios(:codigoV,:codigoN,:codigo_t); end;');



oci_bind_by_name($stid1, ':codigoV', $codigoV);
oci_bind_by_name($stid1, ':nombre', $nombre);
oci_bind_by_name($stid1, ':nombre_t', $nombre_t);
oci_bind_by_name($stid2, ':codigoV', $codigoV);
oci_bind_by_name($stid2, ':valor_Compra', $valor_Compra);
oci_bind_by_name($stid2, ':valor_c', $valor_c);
oci_bind_by_name($stid3, ':codigoV', $codigoV);
oci_bind_by_name($stid3, ':valor_Venta', $valor_Venta);
oci_bind_by_name($stid3, ':valor_v', $valor_v);
oci_bind_by_name($stid4, ':codigoV', $codigoV);
oci_bind_by_name($stid4, ':disponibles', $disponibles);
oci_bind_by_name($stid4, ':disponibles_t',$disponibles_t);
oci_bind_by_name($stid5, ':codigoV', $codigoV);
oci_bind_by_name($stid5, ':descripcion', $descripcion);
oci_bind_by_name($stid5, ':descripcion_t', $descripcion_t);
oci_bind_by_name($stid5, ':codigoV', $codigoV);
oci_bind_by_name($stid5, ':codigoN', $codigoN);
oci_bind_by_name($stid5, ':codigo_t', $codigo_t);


oci_execute($stid1);
oci_execute($stid2);
oci_execute($stid3);
oci_execute($stid4);
oci_execute($stid5);
oci_execute($stid6);

echo ($stid1);

?>


