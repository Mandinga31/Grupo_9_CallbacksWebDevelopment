let formulario = document.querySelector("form.formulario");
   
    
    formulario.addEventListener("submit", (e)=>{
        let campoNombre = document.querySelector("input#nombre.control");
        let campoDescripcion = document.querySelector("textarea#descripcion.control");
        let campoPrecio = document.querySelector("input#precio.control");
        
        let errorPrecio = document.querySelector('p#precio.error');
        let errorNombre = document.querySelector("p#nombre.error");
        let errorDescripcion = document.querySelector("p#descripcion.error");
        if(campoNombre.value == ""){
            e.preventDefault();
            errorNombre.innerHTML="Debes completar el nombre del producto"
        }else if(campoNombre.value.length<5){
            e.preventDefault();
            errorNombre.innerHTML="El nombre debe al menos 5 caracteres."
        }else{
            errorNombre.innerHTML=""
        }

        if(campoDescripcion.value == ""){
            e.preventDefault();
            errorDescripcion.innerHTML="Debes completar la descripción"
        }else if(campoDescripcion.value.length<20){
            e.preventDefault();
            errorDescripcion.innerHTML="La descripción debe tener al menos 20 caracteres."
        }else{
            errorDescripcion.innerHTML=""
        }
        if(campoPrecio.value<100){
            e.preventDefault();
            errorPrecio.innerHTML="El precio del producto debe ser mayor a $100"
        }
             
        
        
       
    }
  )
  