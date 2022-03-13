const express = require('express');
const app = express();
const mainRoutes = require('./routes/mainroutes');
const methodOverride = require('method-override');
app.use(express.static('public'));
app.set('view engine', 'ejs')
app.use(mainRoutes);
app.use(methodOverride('_method'))
app.use(express.urlencoded({extended:false}));
app.use(express.json())


app.listen(2500, ()=>{
    console.log('Servidor funcionando');
});



