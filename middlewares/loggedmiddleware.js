function loggedmiddleware(req,res,next){
res.locals.isLogged = false;
if(req.session.userLogged){
    res.locals.isLogged = true;
    res.locals.userInfo = req.session.userLogged;
}
next()
}
module.exports = loggedmiddleware