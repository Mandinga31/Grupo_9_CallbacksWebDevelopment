let guestMiddleware = (req,res,next)=>{
    if(req.session.userLogged){
        res.redirect('/users/userProfile')
    }
    next();
}
module.exports = guestMiddleware