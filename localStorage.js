//almacenamiento dentro de las variables
$(document).ready(function () {
    
    $(document).submit(function () {
        var txtNombre = $('#nombre').val();
        var txtCorreo = $('#correo').val();
        var txtContraseña = $('#contraseña').val();

        //almacenamiento drento de locastorage
        localStorage.setItem("User", txtNombre);
        localStorage.setItem("Email", txtCorreo);
        localStorage.setItem("Password", txtContraseña);

    }); 

    
});
