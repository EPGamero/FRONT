$(document).ready(function () {
    loadData();
});

function loadData() {
    $.ajax({
        url: "/Home/GetProductos",
        type: "GET",
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        success: function (result) {
            var html = '';
            $('#NombreValidacion').hide();
            $('#APaternoValidacion').hide();
            $('#AMaternoValidacion').hide();
            $.each(result, function (key, item) {
                html += '<tr>';
                html += '<td class="text-center">' + item.Nombre + '</td>';
                html += '<td class="text-center"> ' + item.Precio + '</td>';
                html += '<td class="text-center"> <input type="number" class="text-warning text-center" value=0  min="0"/> </td>';
                html += '</tr>';
            });
            $('.tbody').html(html);
        },
        error: function (errormessage) {
            alert(errormessage.responseText);
        }
    });
}



function Add() {
    var Nombre = $('#Nombre').val();
    var APaterno = $('#APaterno').val();
    var AMaterno = $('#AMaterno').val();
    if (Nombre == "" && APaterno == "" && AMaterno == "") {
        $('#Nombre').css('border-color', 'red');
        $('#NombreValidacion').show();
        $('#APaterno').css('border-color', 'red');
        $('#APaternoValidacion').show();
        $('#AMaterno').css('border-color', 'red');
        $('#AMaternoValidacion').show();
    }
    else if (Nombre == "" && APaterno != "" && AMaterno != "") {
        $('#Nombre').css('border-color', 'red');
        $('#NombreValidacion').show();
        $('#APaterno').css('border-color', 'lightgrey');
        $('#APaternoValidacion').hide();
        $('#AMaterno').css('border-color', 'lightgrey');
        $('#AMaternoValidacion').hide();

    }
    else if (Nombre != "" && APaterno == "" && AMaterno != "") {
        $('#Nombre').css('border-color', 'lightgrey');
        $('#NombreValidacion').hide();
        $('#APaterno').css('border-color', 'red');
        $('#APaternoValidacion').show();
        $('#AMaterno').css('border-color', 'lightgrey');
        $('#AMaternoValidacion').hide();
    }
    else if (Nombre != "" && APaterno != "" && AMaterno == "") {
        $('#Nombre').css('border-color', 'lightgrey');
        $('#NombreValidacion').hide();
        $('#APaterno').css('border-color', 'lightgrey');
        $('#APaternoValidacion').hide();
        $('#AMaterno').css('border-color', 'red');
        $('#AMaternoValidacion').show();
    }


    else if (Nombre == "" && APaterno == "" && AMaterno != "") {
        $('#Nombre').css('border-color', 'red');
        $('#NombreValidacion').show();
        $('#APaterno').css('border-color', 'red');
        $('#APaternoValidacion').show();
        $('#AMaterno').css('border-color', 'lightgrey');
        $('#AMaternoValidacion').hide();
    }
    else if (Nombre == "" && APaterno != "" && AMaterno == "") {
        $('#Nombre').css('border-color', 'red');
        $('#NombreValidacion').show();
        $('#APaterno').css('border-color', 'lightgrey');
        $('#APaternoValidacion').hide();
        $('#AMaterno').css('border-color', 'red');
        $('#AMaternoValidacion').show();
    }

    else if (Nombre != "" && APaterno == "" && AMaterno == "") {
        $('#Nombre').css('border-color', 'lightgrey');
        $('#NombreValidacion').hide();
        $('#APaterno').css('border-color', 'red');
        $('#APaternoValidacion').show();
        $('#AMaterno').css('border-color', 'red');
        $('#AMaternoValidacion').show();
    }



    else if (Nombre != "" && APaterno != "" && AMaterno != "") {

        $('#Nombre').css('border-color', 'lightgrey');
        $('#NombreValidacion').hide();
        $('#APaterno').css('border-color', 'lightgrey');
        $('#APaternoValidacion').hide();
        $('#AMaterno').css('border-color', 'lightgrey');
        $('#AMaternoValidacion').hide();




        var ClientObj = {
            Nombre: $('#Nombre').val(),
            APaterno: $('#APaterno').val(),
            AMaterno: $('#AMaterno').val(),
        };
        var ProductoObj = {
            SKU: 1,
        };

        $.ajax({
            url: "/Home/Add",
            data: JSON.stringify(ClientObj, ProductoObj),
            type: "POST",
            contentType: "application/json;charset=utf-8",
            dataType: "json",
            success: function (result) {
                location.reload();
            },
            error: function (errormessage) {
                alert(errormessage.responseText);
            }
        });
    }
}  


