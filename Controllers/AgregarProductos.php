<?php
include_once ("Conexion.php");
$archivo=$_FILES["archivo"]['name'];
$destino= "../images/".$archivo;
copy($_FILES['archivo']['tmp_name'],$destino);
 $direccion="../images/".$archivo;
 $codigo=$_POST['codigo'];
 $nombre=$_POST['nombre'];
 $valor_compra=$_POST['valor_compra'];
 $valor_venta=$_POST['valor_venta'];
 $disponibles=$_POST['cantidad'];
 $descripcion=$_POST['descripcion'];



$con=new conexion();
$con->conectar();
$stid = oci_parse($con->conexion, 'begin jireth.agregar_productos(:codigo,:nombre,:valor_compra,:valor_venta,:disponibles,:ruta_imagen,:descripcion); end;');
oci_bind_by_name($stid, ':codigo', $codigo);
oci_bind_by_name($stid, ':nombre', $nombre);
oci_bind_by_name($stid, ':valor_compra', $valor_compra);
oci_bind_by_name($stid, ':valor_venta', $valor_venta);
oci_bind_by_name($stid, ':disponibles', $disponibles);
oci_bind_by_name($stid, ':ruta_imagen', $direccion);
oci_bind_by_name($stid, ':descripcion', $descripcion);
oci_execute($stid);

echo "<SCRIPT>parent.window.location='../vistas/Registrar_Producto.html';</SCRIPT>";


?>


