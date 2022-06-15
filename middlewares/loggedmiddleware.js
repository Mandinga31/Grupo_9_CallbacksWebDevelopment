let db = require("../database/models")
function loggedmiddleware(req,res,next){
res.locals.isLogged = false;
if(req.session.userLogged){
    res.locals.isLogged = true;
    res.locals.userInfo = req.session.userLogged;
   
}
let emailCookie = req.cookies.userEmail;
if(emailCookie){
    db.users.findOne({
         where:{
             email: emailCookie
         }
    }).then(user=>{ if (req.session) {user = req.session.userLogged}
})

} 
next()
}
module.exports = loggedmiddleware