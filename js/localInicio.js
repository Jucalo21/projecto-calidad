$(document).ready(function () {
    var txt_nombre = localStorage.getItem('Email');
    var txt_contraseña = localStorage.getItem('Password');

    if (txt_nombre != null && txt_contraseña != undefined) {
        //se llama al documento donde va a iniciar
        window.location = 'ssession.html';
    } else {

    }
});
