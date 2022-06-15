let burger = document.querySelector(".burger")
let nav = document.querySelector("ul.nav-bar")


burger.addEventListener("click", ()=>{
    nav.classList.toggle("style")
    burger.classList.toggle("open");
})

let userProfileLogged = document.querySelector("#userProfileLogged");
console.log(userProfileLogged)
let navUser = document.querySelector("ul.nav-bar-user")
console.log(navUser)
if (userProfileLogged != null){
    userProfileLogged.addEventListener("click", (e)=>{
        e.preventDefault();
        navUser.classList.toggle("hide")
        
    })
}
console.log(userProfileLogged)