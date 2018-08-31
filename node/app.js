const express   = require('express');
const app       = express();
const port      = process.env.PORT || 3000;
const bParser   = require('body-parser');

const pug       = require('pug');

const router = require('./routes/index');

app.use(express.static('./public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', router);


app.listen(port, ()=>{
    console.log(`Rodando na porta: ${port}`)
});