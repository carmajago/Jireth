/**
 * Created by Sebas on 27/05/2017.
 */

$(function () {
    getClients();

    $("#btnAddClient").on('click', function () {
        addClient();
    });

    $("#btnUpdateClient").on('click', function () {
        updateClient();
    })
});

function getClients() {
    $.ajax({
        url: '../Controllers/controllerClients.php',
        type: 'GET',
        data: {
            option: 1
        },
        success: function (response) {
            //console.log(response);
            var data = jQuery.parseJSON(response);
            makeTable(data);

        },
        error: function (err) {
            alert('Error al obtener datos' + err);
            console.log(err);

        }
    });
}

function addClient() {
    var $id = $("#id").val();
    var $name = $("#name").val();
    var $lastName = $("#lastName").val();
    var $email = $("#email").val();

    if ($id !== "" && $name !== "" && $lastName !== "" && $email !== "") {
        //Se verifica si los campos estan llenos
        //Se verifica si el correro tiene una sintaxis correct algo@algo.algo
        $.ajax({
            url: '../Controllers/controllerClients.php',
            type: 'POST',
            data: {
                id: $id,
                name: $name,
                lastName: $lastName,
                email: $email
            },
            success: function (response) {
                alert("Insert Successfully ");
                console.log(response);
            }
        });
    }
}

function updateClient() {
    var $idUpdate = $("#IdUpdate").val();
    var $nameUpdate = $("#nameUpdate").val();
    var $lastNameUpdate = $("#lastNameUpdate").val();
    var $emailUpdate = $("#emailUpdate").val();

    alert($emailUpdate);
    if ($idUpdate !== "" && $nameUpdate !== "" && $lastNameUpdate !== "" && $emailUpdate !== "") {
        //Se verifica si los campos estan llenos
        //Se verifica si el correo tiene una sintaxis correct algo@algo.algo

        var data = `idUpdate=${$idUpdate}&nameUpdate=${$nameUpdate}&lastNameUpdate=${$lastNameUpdate}&emailUpdate=${$emailUpdate}`;
        alert(data);
        $.ajax({
            url: '../Controllers/controllerClients.php?' + data,
            method: 'PUT',
            contentType: "application/json",
            success: function (response) {
                alert("Actualización exitosa");
                console.log(response);
            }
        });
    }

}

function updateModal(id) {

    $.ajax({
        url: '../Controllers/controllerClients.php',
        type: 'GET',
        data: {
            option: 2,
            id: id
        },
        success: function (response) {
            console.log(response);
            var data = jQuery.parseJSON(response);
            setModalData(data);

        },
        error: function (err) {
            alert('Error al obtener datos' + err);
            console.log(err);

        }
    });

}

function setModalData(data) {

    $("#IdUpdate").val(parseInt(data[0].ID));
    $('#nameUpdate').val(data[0].NOMBRE);
    $("#lastNameUpdate").val(data[0].APELLIDO);
    $("#emailUpdate").val(data[0].CORREO);
    $("#updateClientModal").modal();
}


function makeTable(data) {
    var codigo = '';
    codigo += "<thead>" +
        "<tr><th>Cédula</th>" +
        "<th>Nombre</th>" +
        "<th>Apellido</th>" +
        "<th>Correo</th>" +
        "<th>Actualizar</th>" +
        "<th>Eliminar</th>" +
        "</tr>" +
        "</thead> <tbody>";
    $.each(data, function (index, i) {
        codigo += "<tr id='" + i.ID + "' class='trClient'>" +
            "<td class='tdClient col-lg-1'>" + i.ID + " </td>" +
            "<td class='tdClient col-lg-2'>" + i.NOMBRE + " </td>" +
            "<td class='tdClient col-lg-2'>" + i.APELLIDO + "</td>" +
            "<td class='tdClient col-lg-2'>" + i.CORREO + "</td>" +
            "<td class='tdClient col-lg-2'> <button type='text' class='btn btn-xs btn-success' onclick='updateModal(" + i.ID + ")'> Actualizar <i class='fa fa-edit'></button></td>" +
            "<td class='tdClient col-lg-2'> <button type='text' class='btn btn-xs btn-danger' onclick='deleteClient(" + i.ID + ")'>Eliminar <i class='fa fa-close'></button></td></tr>";
    });
    codigo += "</tbody>";
    $("#tableResponse").html(codigo);


}


function deleteClient(id) {
    var data = `id=${id}`;
    $.ajax({
        url: '../Controllers/controllerClients.php?' + data,
        method: 'DELETE',
        success: function (response) {
            alert("Delete Successfully ");
            getClients();

        },
        error: function (err) {
            alert('Error al eliminar informacion' + err);
            console.log(err);
        }
    });
}