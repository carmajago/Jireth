<?php
/**
 * Created by PhpStorm.
 * User: Sebas
 * Date: 27/05/2017
 * Time: 2:39 AM
 */

//Obtenemos el metodo de la peticion y lo guardamos en la variable method
$method = $_SERVER['REQUEST_METHOD'];

$resource = $_SERVER['REQUEST_URI'];
include_once '../Models/Client.php';
include_once 'Conexion.php';

try {
    date_default_timezone_set('America/Bogota');
    ini_set('display_errors', 'Off');
    ini_set('log_errors', 'On');
    ini_set('error_log', 'log.txt');
} catch (Exception $e) {
    error_log("Error controlador");
}
switch ($method) {
    //Obtener datos
    case "GET":
        $client = new Client();
        $_REQUEST['connection'] = new Conexion();
        if (isset($_REQUEST['option'])) {
            if ($_REQUEST['option'] == 1) {
                $client->getAllClients($_REQUEST);
            } else if ($_REQUEST['option'] == 2 && isset($_REQUEST['id'])) {
                error_log(print_r($_REQUEST, 1));
                $client->getClient($_REQUEST);
            }
        }
        break;

    case "POST":
        //error_log(print_r($_REQUEST,1));
        $client = new Client();
        $_REQUEST['connection'] = new Conexion();
        $client->addClient($_REQUEST);
        break;


    case "PUT":
        $client = new Client();
        $_REQUEST['connection'] = new Conexion();
        $client->updateClient($_REQUEST);
        break;

    case "DELETE":
        $client = new Client();
        $_REQUEST['connection'] = new Conexion();
        $client->deleteClient($_REQUEST);
        break;
}
