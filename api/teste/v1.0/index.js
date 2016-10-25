var express = require('express');
var multiparty = require('connect-multiparty');
var router  = express.Router();

router.get('/tempfile', require('./services/tempfile'));

router.get('/:id?', require('./services/find'));
//router.put('/:id', require('./services/update'));
//router.patch('/:id', require('./services/update'));
//router.delete('/:id', require('./services/remove'));
router.post('/', require('./services/create'));

router.route('/upload')
.post(multiparty(), require('./services/upload'));



module.exports = router;