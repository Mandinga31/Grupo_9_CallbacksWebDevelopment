

//Lo que que me traigo del dom  
let botonAgregar = document.querySelector(".carrito-button")
let id = document.querySelector(".id-producto").getAttribute("data-id")
let nombre = document.querySelector("p#nombre").textContent
let imagen = document.querySelector("img.reloj").src
let precio = document.querySelector("h3.precio").textContent

//lo que me traigo del localStorage
let cart = JSON.parse(localStorage.getItem("carrito"))



botonAgregar.addEventListener("click", (e)=>{
    e.preventDefault();
    
   
    const producto = {
        id: Number(id),
        nombre : nombre,
        imagen : imagen,
        precio : Number(precio),
        cantidad : 1
    }
    if (cart == null){
        cart = [producto]
    }else{
        cart.push(producto)
    }
    
    
    localStorage.setItem("carrito", JSON.stringify(cart))
    
    
   
})

