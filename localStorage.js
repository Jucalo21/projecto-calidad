//guardar_local();
obtener_Local();


function obtener_Local() {

    if (localStorage.getItem("nombre")) {

        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse(localStorage.getItem("persona"));

        console.log(nombre);
        console.log(persona);
    }

}

function guardar_local() {
    let persona = {
        nombre: "Juan",
        correo: "juan123@gmail.com",
        password: "1234Lx"
    };

    let nombre = "jose";

    localStorage.setItem("nombre", nombre);
    localStorage.setItem("persona", JSON.stringify(persona));
}
