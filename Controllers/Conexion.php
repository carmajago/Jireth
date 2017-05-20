<?php
class conexion{

    public $conexion;

    public function getConexion()
    {
        return($this->conexion);
    }
    public function __construct ()
    {
        $this->conexion='';
    }
    public function __destruct ()
    {
        $this->conexion;
    }
    public function  conectar(){

        $this->conexion=oci_pconnect('system', 'andresfernando', 'localhost/XE');
        if (!$this->conexion)
            echo json_encode("Error al conectar");

    }
}

$con=new conexion();
$con->conectar();
//$stid = oci_parse($con->conexion, 'SELECT * FROM estudiantes');
//oci_execute($stid);


?>