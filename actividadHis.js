//Respuestas Correctas
let correctas=[2,1,4]

//Respuestas del usuario
let opcion_elegida=[];

let cantidad_correctas=0;

//Funcion para tomar el numero de la pregunta y el input de la misma
function respuesta(num_pregunta,seleccionada) {
    //guardar la respuesta elegida
    opcion_elegida[num_pregunta]=seleccionada.value;

    //codigo para saber cual opcion fue elegida en cada pregunta
    id="p"+num_pregunta;

    labels=document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "rgb(241, 235, 194)";
    labels[5].style.backgroundColor = "rgb(241, 235, 194)";
    labels[7].style.backgroundColor = "rgb(241, 235, 194)";
    labels[9].style.backgroundColor = "rgb(241, 235, 194)";

    seleccionada.parentNode.style.backgroundColor="#cec0fc";
}

function corregir() {
    cantidad_correctas=0;
    for(i=0;i<correctas.length;i++){
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas
    if(cantidad_correctas==3){
        return MSJOK();
    }else{
        if(cantidad_correctas>0&&cantidad_correctas<3){
        return MSWARNING();
    }else{
        return MSJERROR();
    }
}
}

//Alertas dependiendo de las respuestas correctas
const MSJOK=()=>{
    Swal.fire(
        'Buen trabajo!',
        'Respondiste todas las respuestas de manera correcta!',
        'success'
    )
}

const MSJERROR=()=>{
    Swal.fire(
        'oops!',
        'Todas las repuestas son incorrectas, pero puedes seguir intentando!',
        'error'
    )
}

const MSWARNING=()=>{
    Swal.fire(
        'Sigue Intentando!',
        'Te equivocaste en varias preguntas, pero aun puedes seguir intentando!',
        'warning'
    )
}