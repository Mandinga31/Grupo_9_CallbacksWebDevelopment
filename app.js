const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainroutes');
const methodOverride = require('method-override');
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(mainRoutes);
app.use(methodOverride('_method'))


app.listen(2500, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/carrito', (req,res)=>{
    res.sendFile(__dirname + '/views/productCart.html');
});

app.get('/detalle', (req,res)=>{
    res.sendFile(__dirname + '/views/productDetail.html');
});


