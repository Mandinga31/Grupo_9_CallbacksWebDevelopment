//aca lo voy a agregar a la vsita product cart
let cart = JSON.parse(localStorage.getItem("carrito")) // todo lo que hay en carrito en un array
let nombreHtml = document.querySelector(".elemento-carrito")
let imagenHtml = document.querySelector("img#imagen").src

//mostrar productos en el carrito
if(cart != null && cart.length>=1){
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
    <div style="place-self: center">
    <button class="elemento-carrito" id="eliminar" data-id="${producto.id}"><i class="fas fa-trash-alt"></i>
                </button></div>
                
                
                
    </div>`

    
    const listaProductos = document.querySelector("#listaProductos")
    listaProductos.appendChild(productoHTML) //appendChild = .push? 
})}else{
    const carritoHTML = document.createElement("div")
    carritoHTML.className = "carritoVacio"
    carritoHTML.innerHTML = 
    `<div class="centerCarrito">
    <h2>¡Lo sentimos!</h2>
    <i class="fas fa-cart-plus" style="font-size: 7em;color: #195855;margin: 10px;"></i>
    
    <h3>No tienes ningún artículo en tu carrito de compras.</h3>
    </div>`

    
    const listacarrito = document.querySelector("#listaProductos")
    listacarrito.appendChild(carritoHTML) 
    
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
    let total = arrayPrecios.reduce((prev, curr) => prev + curr, 0)
    let envios;
    if(total>18000){envios = 0}else{
        envios = 670
    }
        const productoHTML = document.createElement("div")
        productoHTML.innerHTML = 
        `   <div class="elemento-comprar">
            <p>Subtotal:</p>
            <p> $${total}</p>
        </div>
        <div class="elemento-comprar">
            
            <p>Envío:</p>
            <p> $${envios}</p>
        </div>
        
        <tr><td colspan="2"><hr class="separatorTotals"></td></tr>
        <div class="elemento-comprar">
            <p class="bold">Total a pagar:</p>
            <p class="bold">$${total + envios}</p>
        </div>
        
        <div style="display:flex ;">
        
            `
    
        
        const listaProductos = document.querySelector("div.insertarTotal")
        listaProductos.appendChild(productoHTML)
    }else{
        const productoHTML = document.createElement("div")
        productoHTML.innerHTML = 
        `<div class="centerCarrito">
		
        <h2>Descubrí nuestra línea de relojes inteligentes</h2>

        <p>Conozca los cuatro nuevos modelos de esta colección de estilo clásico, 
        fabricados en diversos materiales y con la tecnología Callwatch 
		</p>
			
        <button class="boton-css-nuevo"> <a href="/products/tech">Descubrí nuevos Relojes</a></button>
	</div>      
            `
    
        
        const listaProductos = document.querySelector("div.insertarTotal")
        listaProductos.appendChild(productoHTML)
    }


//botones de finalizar 
const botones = document.querySelector(".finalizar");
const detalleTitulo = document.querySelector(".bold");

if(cart == null || cart.length == 0){
    botones.classList.add('noneDisplay')
    detalleTitulo.classList.add('noneDisplay')
    console.log(detalleTitulo)
}else if(cart != null && cart.length>=1){
    if (document.querySelector(".noneDisplay")){
    botones.classList.remove('noneDisplay')}
    detalleTitulo.classList.remove('noneDisplay')
}

