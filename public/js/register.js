let formulario = document.querySelector("form.formulario");


const expresiones = {
    email: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
}   
    formulario.addEventListener("submit", (e)=>{
        let campoNombre = document.querySelector("input#nombre.control")
        let campoEmail = document.querySelector("input#email.control");
        let campoContraseña = document.querySelector("input#password.control");
        let campoUsuario = document.querySelector("input#usuario.control") 
        let campoCategorias = document.querySelector("select#category.control");
        let campoImagen = document.querySelector("input#imagen.control");


        let errorNombre = document.querySelector("p#nombre.error")
        let errorEmail = document.querySelector("p#email.error");
        let errorPassword = document.querySelector("p#password.error");
        let errorUsuario = document.querySelector("p#usuario.error")
        let errorCategorias = document.querySelector("p#category.error")
        let errorImagen = document.querySelector("p#imagen.error");
        
        if(campoNombre.value == ""){
            e.preventDefault();
            errorNombre.innerHTML="Debes completar tu nombre"
        }else if(campoNombre.value.length<2){
            e.preventDefault();
            errorNombre.innerHTML="El nombre debe tener al menos 2 caracteres."
        }else{
            errorNombre.innerHTML=""
        }

        if(campoUsuario.value == ""){
            e.preventDefault();
            errorUsuario.innerHTML="Debes completar tu usuario"
        }else{
            errorUsuario.innerHTML=""
        }
        
        
        if(campoEmail.value == ""){
            e.preventDefault();
            errorEmail.innerHTML="Debes completar el email"
        }else if (!expresiones.email.test(campoEmail.value)){
            console.log(campoEmail.value)
            e.preventDefault();
            errorEmail.innerHTML="Debes completar un email válido"
        }else{
            errorEmail.innerHTML="";
        }
        if(campoImagen.value == ""){
            e.preventDefault();
            errorImagen.innerHTML="Debes subir una imagén"
        }
        if(campoCategorias.value == ""){
            e.preventDefault();
            errorCategorias.innerHTML="Debes completar la categoria"
        }else{
            errorCategorias.innerHTML=""
        }
        if(campoContraseña.value == ""){
            e.preventDefault();
            errorPassword.innerHTML="Debes completar la contraseña"
        }else if(campoContraseña.value.length<8){
            e.preventDefault();
            errorPassword.innerHTML="La contraseña debe tener al menos 8 caracteres."
        }else{
            errorPassword.innerHTML=""
        }
       
    }
)


