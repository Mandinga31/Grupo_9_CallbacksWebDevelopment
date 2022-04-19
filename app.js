const express = require('express');
const session = require('express-session');
const app = express();
const methodOverride = require('method-override');
const loggedmiddleware = require('./middlewares/loggedmiddleware');


app.use(session({
    secret: 'shhh, secreto',
    resave: false,
    saveUninitialized: false
}));
app.use(express.static('public'));
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())
app.use(loggedmiddleware)
const mainRouter = require('./routes/mainroutes');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users')

app.use('/', mainRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)


app.listen(2500, ()=>{
    console.log('Servidor funcionando');
});



