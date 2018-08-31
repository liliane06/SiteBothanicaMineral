const express   = require('express');
const router    = express.Router();

router.get('/', (req, res)=>{
    res.render('produtos');
});

router.get('/celulite', (req, res)=>{
    res.render('cat-celulite');
});

router.get('/destoxicacao', (req, res)=>{
    res.render('cat-destoxicacao');
});

router.get('/estrias', (req, res)=>{
    res.render('cat-estrias');
});

router.get('/flacidez', (req, res)=>{
    res.render('cat-flacidez');
});

router.get('/gordura-localizada', (req, res)=>{
    res.render('cat-flacidez');
});

module.exports = router;