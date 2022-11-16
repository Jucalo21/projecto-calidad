const firebaseConfig = {
apiKey: "AIzaSyAIEIVRbRWkwvybiyJBdbq3d0PK04AGz1o",
authDomain: "calidad-de-software-cd503.firebaseapp.com",
databaseURL: "https://calidad-de-software-cd503-default-rtdb.firebaseio.com",
projectId: "calidad-de-software-cd503",
storageBucket: "calidad-de-software-cd503.appspot.com",
messagingSenderId: "869207398326",
appId: "1:869207398326:web:03219781165d2f24505317",
measurementId: "G-XH3Q4223WF"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

//Guardar usuario
const SaveUser=(user)=>{
    db.collection("usuarios").add({
        user,
    })
    .then((docRef) => {
        MSJOK();
    })
    .catch((error) => {
        MSJERROR();
    });
}

const MSJOK=()=>{
    Swal.fire(
        'Buen trabajo!',
        'Datos guardados exitosamente!',
        'success'
    )
}

const MSJERROR=()=>{
    Swal.fire(
        'oops!',
        'Los datos no fueron guardados!',
        'error'
    )
}

$('#btnsave').click(function(e){
    let nombre = $('#nombre').val();
    let correo = $('#correo').val();
    let contraseña = $('#contraseña').val();

    const user={
        nombre,
        correo,
        contraseña
    }
    
    save(user);

})


