let formulario = document.querySelector("form.formulario");
console.log(formulario)


    formulario.addEventListener("submit", (e)=>{
        let campoNombre = document.querySelector("input#nombre.control")
        let campoContraseña = document.querySelector("input#password.control");
        let campoUsuario = document.querySelector("input#usuario.control");
        let campoConfirm = document.querySelector("input#confirmarContra.control")  
        
     
        let errorNombre = document.querySelector("p#nombre.error")
        let errorPassword = document.querySelector("p#password.error");
        let errorUsuario = document.querySelector("p#usuario.error")
        let errorConfirm = document.querySelector("p#confirmarContra.error")  
        
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
    
        if(campoContraseña.value == ""){
            e.preventDefault();
            errorPassword.innerHTML="Debes completar la contraseña"
        }else if(campoContraseña.value.length<8){
            e.preventDefault();
            errorPassword.innerHTML="La contraseña debe tener al menos 8 caracteres."
        }else{
            errorPassword.innerHTML=""
        }
        if(campoConfirm.value == "" && campoConfirm.value != campoContraseña.value){
            e.preventDefault();
            errorConfirm.innerHTML="Debes confirmar la contraseña"
        }else if(campoConfirm.value != campoContraseña.value){
            e.preventDefault();
            errorConfirm.innerHTML="Las contraseñas deben coincidir"
        }else{
            errorConfirm.innerHTML=""
        }
        
       
    }
)
