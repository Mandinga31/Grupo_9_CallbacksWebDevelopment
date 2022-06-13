//aca lo voy a agregar a la vsita product cart
let cart = JSON.parse(localStorage.getItem("carrito")) // todo lo que hay en carrito en un array

let nombreHtml = document.querySelector(".elemento-carrito")
let imagenHtml = document.querySelector("img#imagen").src

//mostrar productos en el carrito
if(cart != null){
cart.forEach(producto => {
    const productoHTML = document.createElement("div")
    productoHTML.className = "elementos-carrito"
    productoHTML.innerHTML = 
    `<div class="elemento-carrito nombre">
                    <h5>${producto.nombre}</h5>
                </div>
    <div class="elemento-carrito" id="imagen">
                    <img src="${producto.imagen}" alt="imagen-principal" id="imagen"/>
                </div> 
                
    <div class="elemento-carrito precio"><h5>$ ${producto.precio}</h5></div>
    <div style="margin-top: 10%">
    <button class="elemento-carrito" id="eliminar" data-id="${producto.id}"><i class="fas fa-trash-alt"></i>
                </button></div>
                
                
                
    </div>`

    
    const listaProductos = document.querySelector("#listaProductos")
    listaProductos.appendChild(productoHTML)
})}else{
    const productoHTML = document.createElement("div")
    productoHTML.className = "elementos-carrito"
    productoHTML.innerHTML = 
    `<p>No se encontró nada</p>`

    
    const listaProductos = document.querySelector("#listaProductos")
    listaProductos.appendChild(productoHTML)
}
//vaciar carrito 

let botonVaciar = document.querySelector(".boton-comprar#vaciar")
botonVaciar.addEventListener("click", ()=>{
localStorage.clear();
})

//eliminar producto por producto 

let botonEliminar = document.querySelectorAll("button.elemento-carrito#eliminar"); //array c/todos los buttons

console.log(botonEliminar)
for(let i = 0; i < botonEliminar.length; i++){
botonEliminar[i].addEventListener("click", (e)=>{
    const Cartid = botonEliminar[i].getAttribute("data-id");  // esto debe traer el id del elemento q se toque
     cart = cart.filter((eachProductCart) => {
       return eachProductCart.id != Cartid })
    document.location.reload()
    localStorage.setItem( "carrito", JSON.stringify(cart))
     console.log(Cartid);
})}


//get total
if(cart != null && cart.length>=1){
    let arrayPrecios = []
    console.log(arrayPrecios)
    cart.map(producto => {arrayPrecios.push(producto.precio)})
        const productoHTML = document.createElement("div")
        productoHTML.innerHTML = 
        `   <div class="elemento-comprar">
            <p>Subtotal:</p>
            <p> $${arrayPrecios.reduce((prev, curr) => prev + curr, 0)}</p>
        </div>
        <div class="elemento-comprar">
            
            <p>Envío:</p>
            <p> Gratis</p>
        </div>
        
        <tr><td colspan="2"><hr class="separatorTotals"></td></tr>
        <div class="elemento-comprar">
            <p class="bold">Total a pagar:</p>
            <p class="bold">$${arrayPrecios.reduce((prev, curr) => prev + curr, 0)}</p>
        </div>
        
        <div style="display:flex ;">
        
            `
    
        
        const listaProductos = document.querySelector("div.insertarTotal")
        listaProductos.appendChild(productoHTML)
    }else{
        const productoHTML = document.createElement("div")
        productoHTML.className = "elementos-carrito"
        productoHTML.innerHTML = 
        `<p>No se encontró nada</p>`
    
        
        const listaProductos = document.querySelector("#listaProductos")
        listaProductos.appendChild(productoHTML) 
    }

//botones de finalizar 
if(cart != null && cart.length>=1){

        const productoHTML = document.createElement("div")
        productoHTML.innerHTML = 
        `  
        
                <form action='/' method="get" class="formulario-login">
                    <div class="boton-comprar"><button class="agregar-carrito" type="submit">Finalizar compra</button></div>
                </form>  
                <form action='/products/carrito' method="get" class="formulario-login">
                    <div class="boton-comprar" id="vaciar"><button class="agregar-carrito red" >Vaciar carrito</button></div>            </form>  
                </div>
                </form>
           
        
            `
    
        
        const listaProductos = document.querySelector("div.finalizar")
        listaProductos.appendChild(productoHTML)
    }else{
        const productoHTML = document.createElement("div")
        productoHTML.className = "elementos-carrito"
        productoHTML.innerHTML = 
        `<p>No se encontró nada</p>`
    
        
        const listaProductos = document.querySelector("#listaProductos")
        listaProductos.appendChild(productoHTML) 
    }

   