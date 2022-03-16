const express = require('express');
const app = express();
const methodOverride = require('method-override');


app.use(express.static('public'));
app.set('view engine', 'ejs')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())

const mainRouter = require('./routes/mainroutes');
const productRouter = require('./routes/products');
const userRouter = require('./routes/users')

app.use('/', mainRouter)
app.use('/products', productRouter)
app.use('/users', userRouter)


app.listen(2500, ()=>{
    console.log('Servidor funcionando');
});



