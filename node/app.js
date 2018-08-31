const express   = require('express');
const app       = express();
const port      = process.env.PORT || 3000;
const bParser   = require('body-parser');

require('dotenv').config();

app.use(bParser.json());
app.use(bParser.urlencoded({
  extended: true
}));

const routerIndex   = require('./routes/index');
const routerProd    = require('./routes/produtos');
const routerFale    = require('./routes/contato');



app.use(express.static('./public'));
app.set('views', './views');
app.set('view engine', 'pug');

app.use('/', routerIndex);
app.use('/produtos', routerProd);
app.use('/fale-conosco', routerFale);

app.listen(port, ()=>{
    console.log(`Rodando na porta: ${port}`)
});