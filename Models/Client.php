<?php

/**
 * Created by PhpStorm.
 * User: Sebas
 * Date: 27/05/2017
 * Time: 2:54 AM
 */
class Client
{

    function getAllClients($params)
    {
        extract($params);
        $connection->conectar();

        $stid = oci_parse($connection->getConexion(), 'SELECT * FROM CLIENTES');
        oci_execute($stid);
        $nrows = oci_fetch_all($stid, $response, null, null, OCI_FETCHSTATEMENT_BY_ROW);

        echo json_encode($response);

    }

    function addClient($params)
    {
        extract($params);
        $connection->conectar();
        $stid = oci_parse($connection->getConexion(), "INSERT INTO Clientes VALUES ('$id', '$name', '$lastName', '$email')");
        oci_execute($stid);
    }

    function getClient($params)
    {
        extract($params);
        $connection->conectar();

        $stid = oci_parse($connection->getConexion(), "SELECT * FROM CLIENTES WHERE ID = $id");
        oci_execute($stid);
        $nrows = oci_fetch_all($stid, $response, null, null, OCI_FETCHSTATEMENT_BY_ROW);

        echo json_encode($response);
    }

    function updateClient($params)
    {
        extract($params);
        $connection->conectar();
        $sql = "UPDATE CLIENTES SET NOMBRE = '$nameUpdate', APELLIDO = '$lastNameUpdate', CORREO = '$emailUpdate' WHERE ID = $idUpdate";
        $stid = oci_parse($connection->getConexion(), $sql);
        oci_execute($stid);
        $response['status'] = 'success';
        header('Content-type: application/json');
        echo json_encode($response);
    }

    function deleteClient($params)
    {
        extract($params);
        $connection->conectar();
        $sql = "DELETE FROM CLIENTES WHERE ID = $id";
        $stid = oci_parse($connection->getConexion(), $sql);
        oci_execute($stid);
        echo $stid;
    }


}