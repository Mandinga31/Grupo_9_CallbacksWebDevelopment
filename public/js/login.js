let formulario = document.querySelector("form.login-form");
const expresiones = {
    email: /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/
}   
    
    formulario.addEventListener("submit", (e)=>{
        let campoEmail = document.querySelector("input#email.control");
        let campoContraseña = document.querySelector("input#password.control");
        let errorEmail = document.querySelector("p#email.error");
        let errorPassword = document.querySelector("p#password.error");
        
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

        if(campoContraseña.value == ""){
            e.preventDefault();
            errorPassword.innerHTML="Debes completar la contraseña"
        }else{
            errorPassword.innerHTML=""
        }
       
    }
)


