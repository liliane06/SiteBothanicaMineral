const express   = require('express');
const axios     = require('axios');
let router = express.Router();

router.get('/', (req, res)=> {
    axios.get('https://blog.bm.com.vc/wp-json/wp/v2/posts?_embed&per_page=3')
        .then((resAxios)=>{
            console.log(resAxios.data);
            res.render('index', {artigos: resAxios.data});
        })
    
});

router.get('/quem-somos', (req, res)=> {
    res.render('quem-somos');
});

router.get('/produtos', (req, res)=> {
    res.render('produtos');
});

router.get('/cursos', (req, res)=> {
    res.render('cursos');
});

router.get('/fale-conosco', (req, res)=> {
    res.render('fale-conosco');
});




module.exports = router;