let burger = document.querySelector(".burger")

console.log(burger)
let nav = document.querySelector("ul.nav-bar")


burger.addEventListener("click", ()=>{
    nav.classList.toggle("style")
    burger.classList.toggle("open");
})
