const express   = require('express');
const router    = express.Router();
const controller = require('../controller/contato');

router.get('/', controller.formContato) 
router.post('/', controller.formContatoPost)

module.exports = router;