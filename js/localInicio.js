$(document).ready(function () {
    $('#Salidafrom').submit(function () {
        //obtener los datos de input
        var txtEmail = $('#correo').val();
        var txtPassword = $('#contraseña').val();
        //llama los datos de localStorage
        var txt_email = localStorage.getItem('Email');
        var txt_contraseña = localStorage.getItem('Password');
        //compara los datos de localstorage y input
        if (txt_email    == txtEmail && txt_contraseña == txtPassword) {
            //se llama al documento donde va a iniciar
            window.location = 'ssession.html';
        } else {

        }
    });
});
