//aca lo voy a agregar a la vsita product cart
let cart = JSON.parse(localStorage.getItem("carrito")) // todo lo que hay en carrito en un array

let nombreHtml = document.querySelector(".elemento-carrito")
let imagenHtml = document.querySelector("img#imagen").src

//mostrar productos en el carrito
if(cart != null){
cart.forEach(producto => {
    console.log(producto)
    console.log(producto.id)
    const productoHTML = document.createElement("div")
    productoHTML.className = "elementos-carrito"
    productoHTML.innerHTML = 
    `<div class="elemento-carrito nombre">
                    <h5>${producto.nombre}</h5>
                </div>
                <div class="elemento-carrito" id="imagen">
                    <img src="${producto.imagen}" alt="imagen-principal" id="imagen"/>
                </div> 
                
                <div class="elemento-carrito precio"><h5>$ ${producto.precio}</h5>
                <button data-id="${producto.id}" class="elemento-carrito">
                <i class="fas fa-trash-alt"></i>
                </button>
                
                
    </div>`

    
    const listaProductos = document.querySelector("#listaProductos")
    listaProductos.appendChild(productoHTML)
})}else{
    let mensaje = document.querySelector(".carrito p")
    mensaje.innerHTML = "No hay nada"
}
//vaciar carrito 

let botonVaciar = document.querySelector(".boton-comprar#vaciar")
botonVaciar.addEventListener("click", ()=>{
localStorage.clear();
})

//eliminar producto por producto 

let botonEliminar = document.querySelectorAll("button.elemento-carrito");
botonEliminar.forEach(boton=>{
    var id = boton.getAttribute("data-id")
    console.log(id)

    boton.addEventListener('click', ()=>{
       
       let newCart = cart.filter(item => item.id !== id);
       console.log(newCart)
       localStorage.setItem('carrito', JSON.stringify(newCart));
    })
})
