var express = require('express');
var router = express.Router();

const flightsCtrl = require('../controllers/flights')
const ticketsCtrl = require('../controllers/tickets')

router.get('/', flightsCtrl.index);

router.get('/new', flightsCtrl.new);

router.get('/:id/tickets/new', ticketsCtrl.new)

router.post('/:id/tickets', ticketsCtrl.create);


router.post('/', flightsCtrl.create);


router.get('/:id', flightsCtrl.show);

module.exports = router;
